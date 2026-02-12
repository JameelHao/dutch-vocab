// Dutch Vocabulary App with Spaced Repetition

// ===== Data Management =====
const STORAGE_KEY = 'dutch-vocab-data';

function loadData() {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : { words: [] };
}

function saveData(data) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
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
        interval = 1; // 1 minute for immediate re-review
    } else {
        repetitions += 1;
        
        // Calculate new interval
        if (repetitions === 1) {
            interval = 1; // 1 minute
        } else if (repetitions === 2) {
            interval = 10; // 10 minutes
        } else if (repetitions === 3) {
            interval = 60 * 24; // 1 day
        } else {
            interval = Math.round(interval * easeFactor);
        }
        
        // Adjust ease factor
        easeFactor = easeFactor + (0.1 - (4 - rating) * (0.08 + (4 - rating) * 0.02));
        if (easeFactor < 1.3) easeFactor = 1.3;
    }
    
    const nextReview = now + interval * 60 * 1000; // Convert minutes to ms
    
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

// ===== Speech Synthesis =====
function speak(text) {
    if ('speechSynthesis' in window) {
        // Cancel any ongoing speech
        window.speechSynthesis.cancel();
        
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'nl-NL';
        utterance.rate = 0.9;
        
        // Try to find Dutch voice
        const voices = window.speechSynthesis.getVoices();
        const dutchVoice = voices.find(v => v.lang.startsWith('nl'));
        if (dutchVoice) {
            utterance.voice = dutchVoice;
        }
        
        window.speechSynthesis.speak(utterance);
    } else {
        alert('您的浏览器不支持语音合成');
    }
}

// Load voices (needed for some browsers)
if ('speechSynthesis' in window) {
    window.speechSynthesis.onvoiceschanged = () => {
        window.speechSynthesis.getVoices();
    };
}

// ===== UI Updates =====
function updateStats() {
    const data = loadData();
    const dueWords = getDueWords(data.words);
    
    document.getElementById('due-count').textContent = dueWords.length;
    document.getElementById('total-count').textContent = data.words.length;
}

function renderWordList(filter = '') {
    const data = loadData();
    const container = document.getElementById('word-list');
    
    const filtered = data.words.filter(w => 
        w.dutch.toLowerCase().includes(filter.toLowerCase()) ||
        w.chinese.includes(filter)
    );
    
    if (filtered.length === 0) {
        container.innerHTML = '<div class="empty-state"><p>没有找到单词</p></div>';
        return;
    }
    
    container.innerHTML = filtered.map((word, index) => {
        const typeClass = word.type.includes('de') ? 'de' : 
                         word.type.includes('het') ? 'het' : '';
        const typeLabel = getTypeLabel(word.type);
        
        let formsText = '';
        if (word.type.startsWith('noun') && word.plural) {
            formsText = `(复数: ${word.plural})`;
        }
        
        // Build verb info for display
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
    
    // Add event listeners
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

function startReview() {
    const data = loadData();
    dueQueue = getDueWords(data.words);
    
    if (dueQueue.length === 0) {
        document.getElementById('no-cards').style.display = 'block';
        document.getElementById('card-container').style.display = 'none';
    } else {
        document.getElementById('no-cards').style.display = 'none';
        document.getElementById('card-container').style.display = 'flex';
        showNextCard();
    }
    
    updateStats();
}

function showNextCard() {
    if (dueQueue.length === 0) {
        startReview();
        return;
    }
    
    // Shuffle and pick one
    const randomIndex = Math.floor(Math.random() * dueQueue.length);
    currentCard = dueQueue[randomIndex];
    
    // Show front
    document.getElementById('card-front').style.display = 'block';
    document.getElementById('card-back').style.display = 'none';
    
    // Fill front content
    const typeClass = currentCard.type.includes('de') ? 'de' : 
                     currentCard.type.includes('het') ? 'het' : '';
    const typeLabel = getTypeLabel(currentCard.type);
    
    document.getElementById('word-type').className = `word-type ${typeClass}`;
    document.getElementById('word-type').textContent = typeLabel;
    document.getElementById('word-dutch').textContent = currentCard.dutch;
    
    let formsText = '';
    if (currentCard.type.startsWith('noun')) {
        if (currentCard.plural) {
            formsText = `单数: ${currentCard.dutch} | 复数: ${currentCard.plural}`;
        }
    }
    document.getElementById('word-forms').textContent = formsText;
}

function showAnswer() {
    document.getElementById('card-front').style.display = 'none';
    document.getElementById('card-back').style.display = 'block';
    
    // Fill back content
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
        
        // Present tense conjugation
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
        
        // Past tense and perfect
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
        
        // Insert before the rating buttons
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
    }
    
    // Remove from queue
    dueQueue = dueQueue.filter(w => w.id !== currentCard.id);
    
    // If failed (rating 1), add back to queue for re-review
    if (rating === 1) {
        dueQueue.push(currentCard);
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
    updateStats();
    
    // Show success message
    document.getElementById('add-success').style.display = 'block';
    setTimeout(() => {
        document.getElementById('add-success').style.display = 'none';
    }, 2000);
    
    // Reset form
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
        
        // Add verb conjugation data if it's a verb
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
        
        // Also reset verb fields
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
    
    // Initialize
    updateStats();
    startReview();
});

// ===== Sample Data (for testing) =====
function loadSampleData() {
    const data = loadData();
    if (data.words.length === 0) {
        const sampleWords = [
            {
                id: '1',
                type: 'noun-het',
                dutch: 'huis',
                plural: 'huizen',
                chinese: '房子',
                exampleDutch: 'Het huis is groot.',
                exampleChinese: '这房子很大。'
            },
            {
                id: '2',
                type: 'noun-de',
                dutch: 'man',
                plural: 'mannen',
                chinese: '男人',
                exampleDutch: 'De man loopt op straat.',
                exampleChinese: '男人在街上走。'
            },
            {
                id: '3',
                type: 'verb',
                dutch: 'eten',
                plural: '',
                chinese: '吃',
                exampleDutch: 'Ik eet een appel.',
                exampleChinese: '我在吃苹果。',
                conjugation: {
                    ik: 'eet',
                    jij: 'eet',
                    hij: 'eet',
                    wij: 'eten',
                    jullie: 'eten',
                    zij: 'eten'
                },
                pastTense: 'at / aten',
                pastParticiple: 'gegeten',
                auxiliary: 'hebben'
            },
            {
                id: '4',
                type: 'noun-de',
                dutch: 'vrouw',
                plural: 'vrouwen',
                chinese: '女人',
                exampleDutch: 'De vrouw leest een boek.',
                exampleChinese: '女人在读书。'
            },
            {
                id: '5',
                type: 'noun-het',
                dutch: 'boek',
                plural: 'boeken',
                chinese: '书',
                exampleDutch: 'Het boek is interessant.',
                exampleChinese: '这本书很有趣。'
            }
        ];
        
        sampleWords.forEach(w => {
            w.nextReview = Date.now();
            w.interval = 0;
            w.easeFactor = 2.5;
            w.repetitions = 0;
        });
        
        data.words = sampleWords;
        saveData(data);
    }
}

// Uncomment to load sample data on first run
loadSampleData();
