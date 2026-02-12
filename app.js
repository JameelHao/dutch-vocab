// Dutch Vocabulary App with Spaced Repetition

// ===== Data Management =====
const STORAGE_KEY = 'dutch-vocab-data';
const STATS_KEY = 'dutch-vocab-stats';

function loadData() {
    try {
        const data = localStorage.getItem(STORAGE_KEY);
        const parsed = data ? JSON.parse(data) : { words: [] };
        console.log('[Data] Loaded', parsed.words.length, 'words');
        return parsed;
    } catch (e) {
        console.error('[Data] Error loading data:', e);
        return { words: [] };
    }
}

function saveData(data) {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
        console.log('[Data] Saved', data.words.length, 'words');
    } catch (e) {
        console.error('[Data] Error saving data:', e);
        alert('保存失败！请检查浏览器存储设置。');
    }
}

function loadStats() {
    try {
        const stats = localStorage.getItem(STATS_KEY);
        return stats ? JSON.parse(stats) : { 
            todayReviewed: 0, 
            todayNew: 0,
            lastDate: new Date().toDateString(),
            totalReviews: 0
        };
    } catch (e) {
        return { todayReviewed: 0, todayNew: 0, lastDate: new Date().toDateString(), totalReviews: 0 };
    }
}

function saveStats(stats) {
    localStorage.setItem(STATS_KEY, JSON.stringify(stats));
}

function resetDailyStats() {
    const stats = loadStats();
    const today = new Date().toDateString();
    if (stats.lastDate !== today) {
        stats.todayReviewed = 0;
        stats.todayNew = 0;
        stats.lastDate = today;
        saveStats(stats);
    }
    return stats;
}

// ===== Spaced Repetition Algorithm (SM-2 simplified) =====
function calculateNextReview(word, rating) {
    // rating: 1=again, 2=hard, 3=good, 4=easy
    const now = Date.now();
    let { interval, easeFactor, repetitions } = word;
    
    if (!interval) interval = 0;
    if (!easeFactor) easeFactor = 2.5;
    if (!repetitions) repetitions = 0;
    
    if (rating < 2) {
        // Failed - reset
        repetitions = 0;
        interval = 1; // 1 minute for re-review
    } else {
        repetitions += 1;
        
        // Calculate new interval (in minutes)
        if (repetitions === 1) {
            interval = 10; // 10 minutes
        } else if (repetitions === 2) {
            interval = 60; // 1 hour
        } else if (repetitions === 3) {
            interval = 60 * 8; // 8 hours
        } else if (repetitions === 4) {
            interval = 60 * 24; // 1 day
        } else if (repetitions === 5) {
            interval = 60 * 24 * 3; // 3 days
        } else {
            interval = Math.round(interval * easeFactor);
        }
        
        // Adjust based on rating
        if (rating === 2) { // Hard
            interval = Math.round(interval * 0.8);
        } else if (rating === 4) { // Easy
            interval = Math.round(interval * 1.3);
        }
        
        // Adjust ease factor
        easeFactor = easeFactor + (0.1 - (4 - rating) * (0.08 + (4 - rating) * 0.02));
        if (easeFactor < 1.3) easeFactor = 1.3;
        if (easeFactor > 3.0) easeFactor = 3.0;
    }
    
    const nextReview = now + interval * 60 * 1000; // Convert minutes to ms
    
    console.log(`[SR] ${word.dutch}: rating=${rating}, rep=${repetitions}, interval=${interval}min, next=${new Date(nextReview).toLocaleString()}`);
    
    return {
        interval,
        easeFactor,
        repetitions,
        nextReview,
        lastReview: now
    };
}

function getDueWords(words) {
    const now = Date.now();
    return words.filter(w => !w.nextReview || w.nextReview <= now);
}

function getNewWords(words) {
    return words.filter(w => !w.lastReview);
}

function getLearningWords(words) {
    // Words that have been reviewed but not yet mastered (repetitions < 5)
    return words.filter(w => w.lastReview && w.repetitions < 5);
}

function getMasteredWords(words) {
    return words.filter(w => w.repetitions >= 5);
}

// ===== Time Formatting =====
function formatNextReview(nextReview) {
    if (!nextReview) return '立即复习';
    
    const now = Date.now();
    const diff = nextReview - now;
    
    if (diff <= 0) return '现在';
    
    const minutes = Math.floor(diff / (1000 * 60));
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    
    if (days > 0) return `${days}天后`;
    if (hours > 0) return `${hours}小时后`;
    if (minutes > 0) return `${minutes}分钟后`;
    return '即将';
}

function getReviewStatus(word) {
    if (!word.lastReview) return { text: '新词', class: 'status-new' };
    
    const now = Date.now();
    if (!word.nextReview || word.nextReview <= now) {
        return { text: '待复习', class: 'status-due' };
    }
    
    if (word.repetitions >= 5) {
        return { text: '已掌握', class: 'status-mastered' };
    }
    
    return { text: formatNextReview(word.nextReview), class: 'status-scheduled' };
}

// ===== Speech Synthesis =====
let dutchVoices = [];

function loadVoices() {
    if ('speechSynthesis' in window) {
        const voices = window.speechSynthesis.getVoices();
        dutchVoices = voices.filter(v => v.lang.startsWith('nl'))
            .sort((a, b) => {
                if (a.localService && !b.localService) return -1;
                if (!a.localService && b.localService) return 1;
                if (a.lang === 'nl-NL' && b.lang !== 'nl-NL') return -1;
                if (a.lang !== 'nl-NL' && b.lang === 'nl-NL') return 1;
                return 0;
            });
        console.log('[TTS] Dutch voices:', dutchVoices.map(v => `${v.name} (${v.lang})`));
    }
}

function speak(text) {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'nl-NL';
        utterance.rate = 0.85;
        utterance.pitch = 1.0;
        utterance.volume = 1.0;
        
        if (dutchVoices.length > 0) {
            utterance.voice = dutchVoices[0];
        }
        
        window.speechSynthesis.speak(utterance);
    } else {
        alert('您的浏览器不支持语音合成');
    }
}

if ('speechSynthesis' in window) {
    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;
}

// ===== UI Updates =====
function updateStats() {
    const data = loadData();
    const stats = resetDailyStats();
    const dueWords = getDueWords(data.words);
    const newWords = getNewWords(data.words);
    const masteredWords = getMasteredWords(data.words);
    
    document.getElementById('due-count').textContent = dueWords.length;
    document.getElementById('total-count').textContent = data.words.length;
    
    // Update progress info if element exists
    const progressEl = document.getElementById('progress-info');
    if (progressEl) {
        progressEl.innerHTML = `
            <span class="progress-item">📚 新词 ${newWords.length}</span>
            <span class="progress-item">🔄 学习中 ${getLearningWords(data.words).length}</span>
            <span class="progress-item">✅ 已掌握 ${masteredWords.length}</span>
        `;
    }
}

function renderWordList(filter = '') {
    const data = loadData();
    const container = document.getElementById('word-list');
    
    const filtered = data.words.filter(w => 
        w.dutch.toLowerCase().includes(filter.toLowerCase()) ||
        w.chinese.includes(filter)
    );
    
    if (filtered.length === 0) {
        container.innerHTML = '<div class="empty-state"><p>📚</p><p>没有找到单词</p></div>';
        return;
    }
    
    // Sort: due first, then by next review time
    filtered.sort((a, b) => {
        const now = Date.now();
        const aDue = !a.nextReview || a.nextReview <= now;
        const bDue = !b.nextReview || b.nextReview <= now;
        
        if (aDue && !bDue) return -1;
        if (!aDue && bDue) return 1;
        
        return (a.nextReview || 0) - (b.nextReview || 0);
    });
    
    container.innerHTML = filtered.map((word, index) => {
        const typeClass = word.type.includes('de') ? 'de' : 
                         word.type.includes('het') ? 'het' : '';
        const typeLabel = getTypeLabel(word.type);
        const status = getReviewStatus(word);
        
        let formsText = '';
        if (word.type.startsWith('noun') && word.plural) {
            formsText = `(复数: ${word.plural})`;
        }
        
        let verbInfoHtml = '';
        if (word.type === 'verb') {
            const tags = [];
            if (word.conjugation && word.conjugation.ik) {
                tags.push(`<span class="verb-tag">ik ${word.conjugation.ik}</span>`);
            }
            if (word.pastTense) {
                tags.push(`<span class="verb-tag">过去: ${word.pastTense}</span>`);
            }
            if (word.pastParticiple) {
                tags.push(`<span class="verb-tag">分词: ${word.pastParticiple}</span>`);
            }
            if (tags.length > 0) {
                verbInfoHtml = `<div class="word-item-verb-info"><div class="verb-conj-compact">${tags.join('')}</div></div>`;
            }
        }
        
        return `
            <div class="word-item" data-index="${index}">
                <div class="word-item-left">
                    <div>
                        <span class="word-item-dutch">${word.dutch}</span>
                        <span class="word-item-type word-type ${typeClass}">${typeLabel}</span>
                        <span class="review-status ${status.class}">${status.text}</span>
                    </div>
                    <div class="word-item-chinese">${word.chinese} ${formsText}</div>
                    ${verbInfoHtml}
                </div>
                <div class="word-item-actions">
                    <button class="speak-word" data-word="${word.dutch}">🔊</button>
                    <button class="delete" data-id="${word.id}">🗑️</button>
                </div>
            </div>
        `;
    }).join('');
    
    container.querySelectorAll('.speak-word').forEach(btn => {
        btn.addEventListener('click', () => speak(btn.dataset.word));
    });
    
    container.querySelectorAll('.delete').forEach(btn => {
        btn.addEventListener('click', () => {
            if (confirm('确定删除这个单词？')) {
                deleteWord(btn.dataset.id);
            }
        });
    });
}

function deleteWord(id) {
    const data = loadData();
    data.words = data.words.filter(w => w.id !== id);
    saveData(data);
    renderWordList(document.getElementById('search-input').value);
    updateStats();
}

function getTypeLabel(type) {
    const labels = {
        'noun-de': 'de 名词',
        'noun-het': 'het 名词',
        'verb': '动词',
        'adjective': '形容词',
        'adverb': '副词',
        'other': '其他'
    };
    return labels[type] || type;
}

// ===== Review System =====
let currentCard = null;
let dueQueue = [];
let sessionReviewed = 0;

function startReview() {
    const data = loadData();
    dueQueue = getDueWords(data.words);
    
    console.log('[Review] Due words:', dueQueue.length);
    
    const noCardsEl = document.getElementById('no-cards');
    const cardContainer = document.getElementById('card-container');
    
    if (dueQueue.length === 0) {
        // Show completion message with next review time
        const nextWord = data.words
            .filter(w => w.nextReview)
            .sort((a, b) => a.nextReview - b.nextReview)[0];
        
        let nextReviewText = '';
        if (nextWord) {
            nextReviewText = `<p style="margin-top:10px;font-size:14px;">下次复习：${formatNextReview(nextWord.nextReview)}</p>`;
        }
        
        noCardsEl.innerHTML = `
            <p>🎉</p>
            <p>太棒了！暂无待复习单词</p>
            ${sessionReviewed > 0 ? `<p style="color:var(--accent-green);margin-top:10px;">本次复习了 ${sessionReviewed} 个单词</p>` : ''}
            ${nextReviewText}
        `;
        noCardsEl.style.display = 'block';
        cardContainer.style.display = 'none';
    } else {
        noCardsEl.style.display = 'none';
        cardContainer.style.display = 'flex';
        showNextCard();
    }
    
    updateStats();
}

function showNextCard() {
    if (dueQueue.length === 0) {
        startReview();
        return;
    }
    
    // Pick randomly from due queue
    const randomIndex = Math.floor(Math.random() * dueQueue.length);
    currentCard = dueQueue[randomIndex];
    
    // Update queue count display
    const queueCountEl = document.getElementById('queue-count');
    if (queueCountEl) {
        queueCountEl.textContent = `剩余 ${dueQueue.length} 个`;
    }
    
    // Show front
    document.getElementById('card-front').style.display = 'block';
    document.getElementById('card-back').style.display = 'none';
    
    const typeClass = currentCard.type.includes('de') ? 'de' : 
                     currentCard.type.includes('het') ? 'het' : '';
    const typeLabel = getTypeLabel(currentCard.type);
    
    document.getElementById('word-type').className = `word-type ${typeClass}`;
    document.getElementById('word-type').textContent = typeLabel;
    document.getElementById('word-dutch').textContent = currentCard.dutch;
    
    let formsText = '';
    if (currentCard.type.startsWith('noun') && currentCard.plural) {
        formsText = `单数: ${currentCard.dutch} | 复数: ${currentCard.plural}`;
    }
    document.getElementById('word-forms').textContent = formsText;
}

function showAnswer() {
    document.getElementById('card-front').style.display = 'none';
    document.getElementById('card-back').style.display = 'block';
    
    const typeClass = currentCard.type.includes('de') ? 'de' : 
                     currentCard.type.includes('het') ? 'het' : '';
    const typeLabel = getTypeLabel(currentCard.type);
    
    document.getElementById('word-type-back').className = `word-type ${typeClass}`;
    document.getElementById('word-type-back').textContent = typeLabel;
    document.getElementById('word-dutch-back').textContent = currentCard.dutch;
    
    let formsText = '';
    if (currentCard.type.startsWith('noun') && currentCard.plural) {
        formsText = `单数: ${currentCard.dutch} | 复数: ${currentCard.plural}`;
    }
    document.getElementById('word-forms-back').textContent = formsText;
    
    document.getElementById('word-chinese').textContent = currentCard.chinese;
    document.getElementById('example-dutch').textContent = currentCard.exampleDutch || '';
    document.getElementById('example-chinese').textContent = currentCard.exampleChinese || '';
    
    // Handle verb conjugation display
    const existingVerbSection = document.querySelector('.verb-conjugation');
    if (existingVerbSection) {
        existingVerbSection.remove();
    }
    
    if (currentCard.type === 'verb' && (currentCard.conjugation || currentCard.pastTense || currentCard.pastParticiple)) {
        const verbSection = document.createElement('div');
        verbSection.className = 'verb-conjugation';
        
        let html = '';
        
        if (currentCard.conjugation && Object.values(currentCard.conjugation).some(v => v)) {
            html += `
                <h4>📝 现在时变位</h4>
                <div class="conj-table">
                    ${currentCard.conjugation.ik ? `<div class="conj-row"><span class="pron">ik</span><span class="form">${currentCard.conjugation.ik}</span></div>` : ''}
                    ${currentCard.conjugation.jij ? `<div class="conj-row"><span class="pron">jij/je</span><span class="form">${currentCard.conjugation.jij}</span></div>` : ''}
                    ${currentCard.conjugation.hij ? `<div class="conj-row"><span class="pron">hij/zij</span><span class="form">${currentCard.conjugation.hij}</span></div>` : ''}
                    ${currentCard.conjugation.wij ? `<div class="conj-row"><span class="pron">wij/we</span><span class="form">${currentCard.conjugation.wij}</span></div>` : ''}
                    ${currentCard.conjugation.jullie ? `<div class="conj-row"><span class="pron">jullie</span><span class="form">${currentCard.conjugation.jullie}</span></div>` : ''}
                    ${currentCard.conjugation.zij ? `<div class="conj-row"><span class="pron">zij/ze</span><span class="form">${currentCard.conjugation.zij}</span></div>` : ''}
                </div>
            `;
        }
        
        if (currentCard.pastTense || currentCard.pastParticiple) {
            html += `
                <div class="tense-section">
                    <h4>⏰ 过去时 & 完成时</h4>
                    <div class="tense-info">
                        ${currentCard.pastTense ? `<div class="tense-row"><span class="label">过去时：</span><span class="value">${currentCard.pastTense}</span></div>` : ''}
                        ${currentCard.pastParticiple ? `<div class="tense-row"><span class="label">过去分词：</span><span class="value">${currentCard.pastParticiple}</span></div>` : ''}
                        ${currentCard.auxiliary ? `<div class="tense-row"><span class="label">助动词：</span><span class="value">${currentCard.auxiliary}</span></div>` : ''}
                    </div>
                    ${currentCard.pastParticiple && currentCard.auxiliary ? `
                        <div class="perfect-example">
                            完成时例：Ik ${currentCard.auxiliary === 'hebben' ? 'heb' : 'ben'} ${currentCard.pastParticiple}
                        </div>
                    ` : ''}
                </div>
            `;
        }
        
        verbSection.innerHTML = html;
        
        const ratingButtons = document.querySelector('.rating-buttons');
        ratingButtons.parentNode.insertBefore(verbSection, ratingButtons);
    }
}

function rateCard(rating) {
    const data = loadData();
    const wordIndex = data.words.findIndex(w => w.id === currentCard.id);
    
    if (wordIndex !== -1) {
        const updates = calculateNextReview(data.words[wordIndex], rating);
        data.words[wordIndex] = { ...data.words[wordIndex], ...updates };
        saveData(data);
        
        // Update session stats
        sessionReviewed++;
        const stats = loadStats();
        stats.todayReviewed++;
        stats.totalReviews++;
        saveStats(stats);
    }
    
    // Remove from queue
    dueQueue = dueQueue.filter(w => w.id !== currentCard.id);
    
    // If failed (rating 1), add back to queue for re-review
    if (rating === 1) {
        // Reload the word from saved data
        const refreshedData = loadData();
        const refreshedWord = refreshedData.words.find(w => w.id === currentCard.id);
        if (refreshedWord) {
            dueQueue.push(refreshedWord);
        }
    }
    
    showNextCard();
}

// ===== Add Word =====
function addWord(wordData) {
    const data = loadData();
    
    const newWord = {
        id: Date.now().toString(),
        ...wordData,
        interval: 0,
        easeFactor: 2.5,
        repetitions: 0,
        nextReview: Date.now(), // Due immediately
        lastReview: null
    };
    
    data.words.push(newWord);
    saveData(data);
    
    // Update stats
    const stats = loadStats();
    stats.todayNew++;
    saveStats(stats);
    
    updateStats();
    
    document.getElementById('add-success').style.display = 'block';
    setTimeout(() => {
        document.getElementById('add-success').style.display = 'none';
    }, 2000);
    
    document.getElementById('add-form').reset();
}

// ===== Event Listeners =====
document.addEventListener('DOMContentLoaded', () => {
    // Tab switching
    document.querySelectorAll('.tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
            
            tab.classList.add('active');
            document.getElementById(`${tab.dataset.tab}-tab`).classList.add('active');
            
            if (tab.dataset.tab === 'review') {
                startReview();
            } else if (tab.dataset.tab === 'list') {
                renderWordList();
            }
        });
    });
    
    // Show/hide noun/verb fields based on word type
    document.getElementById('word-type-input').addEventListener('change', (e) => {
        const isNoun = e.target.value.startsWith('noun');
        const isVerb = e.target.value === 'verb';
        document.querySelector('.noun-only').classList.toggle('show', isNoun);
        document.querySelectorAll('.verb-only').forEach(el => {
            el.classList.toggle('show', isVerb);
        });
    });
    
    // Add form submission
    document.getElementById('add-form').addEventListener('submit', (e) => {
        e.preventDefault();
        
        const type = document.getElementById('word-type-input').value;
        const wordData = {
            type: type,
            dutch: document.getElementById('dutch-input').value.trim(),
            plural: document.getElementById('plural-input').value.trim(),
            chinese: document.getElementById('chinese-input').value.trim(),
            exampleDutch: document.getElementById('example-dutch-input').value.trim(),
            exampleChinese: document.getElementById('example-chinese-input').value.trim()
        };
        
        if (type === 'verb') {
            wordData.conjugation = {
                ik: document.getElementById('conj-ik').value.trim(),
                jij: document.getElementById('conj-jij').value.trim(),
                hij: document.getElementById('conj-hij').value.trim(),
                wij: document.getElementById('conj-wij').value.trim(),
                jullie: document.getElementById('conj-jullie').value.trim(),
                zij: document.getElementById('conj-zij').value.trim()
            };
            wordData.pastTense = document.getElementById('past-tense').value.trim();
            wordData.pastParticiple = document.getElementById('past-participle').value.trim();
            wordData.auxiliary = document.getElementById('auxiliary-verb').value;
        }
        
        addWord(wordData);
        
        if (type === 'verb') {
            ['conj-ik', 'conj-jij', 'conj-hij', 'conj-wij', 'conj-jullie', 'conj-zij', 
             'past-tense', 'past-participle'].forEach(id => {
                document.getElementById(id).value = '';
            });
            document.getElementById('auxiliary-verb').value = 'hebben';
        }
    });
    
    // Review buttons
    document.getElementById('show-answer').addEventListener('click', showAnswer);
    
    document.querySelectorAll('.rating').forEach(btn => {
        btn.addEventListener('click', () => {
            rateCard(parseInt(btn.dataset.rating));
        });
    });
    
    // Speak buttons
    document.getElementById('speak-btn').addEventListener('click', () => {
        if (currentCard) speak(currentCard.dutch);
    });
    
    document.getElementById('speak-btn-back').addEventListener('click', () => {
        if (currentCard) {
            speak(currentCard.dutch);
            if (currentCard.exampleDutch) {
                setTimeout(() => speak(currentCard.exampleDutch), 1500);
            }
        }
    });
    
    // Search
    document.getElementById('search-input').addEventListener('input', (e) => {
        renderWordList(e.target.value);
    });
    
    // Debug button (hidden, for troubleshooting)
    window.debugVocab = () => {
        const data = loadData();
        console.log('=== Vocabulary Debug ===');
        console.log('Total words:', data.words.length);
        data.words.forEach(w => {
            console.log(`${w.dutch}: rep=${w.repetitions}, interval=${w.interval}min, next=${w.nextReview ? new Date(w.nextReview).toLocaleString() : 'N/A'}`);
        });
    };
    
    // Initialize
    resetDailyStats();
    updateStats();
    startReview();
});

// ===== Load Dictionary =====
function loadDictionary() {
    const data = loadData();
    if (data.words.length === 0 && typeof DUTCH_DICTIONARY !== 'undefined') {
        console.log('[Init] Loading dictionary with', DUTCH_DICTIONARY.length, 'words...');
        
        const words = DUTCH_DICTIONARY.map((w, index) => ({
            id: (index + 1).toString(),
            ...w,
            nextReview: Date.now(), // All due immediately for new users
            interval: 0,
            easeFactor: 2.5,
            repetitions: 0,
            lastReview: null
        }));
        
        data.words = words;
        saveData(data);
        console.log('[Init] Dictionary loaded successfully!');
    }
}

loadDictionary();
