// Dutch-Chinese Dictionary - 荷兰语基础词汇表
// 约200个常用词汇

const DUTCH_DICTIONARY = [
    // ===== 数字 Numbers =====
    { type: 'other', dutch: 'een', chinese: '一', exampleDutch: 'Ik heb een appel.', exampleChinese: '我有一个苹果。' },
    { type: 'other', dutch: 'twee', chinese: '二', exampleDutch: 'Twee kopjes koffie.', exampleChinese: '两杯咖啡。' },
    { type: 'other', dutch: 'drie', chinese: '三', exampleDutch: 'Drie dagen.', exampleChinese: '三天。' },
    { type: 'other', dutch: 'vier', chinese: '四', exampleDutch: 'Vier seizoenen.', exampleChinese: '四季。' },
    { type: 'other', dutch: 'vijf', chinese: '五', exampleDutch: 'Vijf minuten.', exampleChinese: '五分钟。' },
    { type: 'other', dutch: 'zes', chinese: '六', exampleDutch: 'Zes euro.', exampleChinese: '六欧元。' },
    { type: 'other', dutch: 'zeven', chinese: '七', exampleDutch: 'Zeven dagen per week.', exampleChinese: '一周七天。' },
    { type: 'other', dutch: 'acht', chinese: '八', exampleDutch: 'Acht uur.', exampleChinese: '八点钟。' },
    { type: 'other', dutch: 'negen', chinese: '九', exampleDutch: 'Negen maanden.', exampleChinese: '九个月。' },
    { type: 'other', dutch: 'tien', chinese: '十', exampleDutch: 'Tien procent.', exampleChinese: '百分之十。' },

    // ===== 代词 Pronouns =====
    { type: 'other', dutch: 'ik', chinese: '我', exampleDutch: 'Ik ben student.', exampleChinese: '我是学生。' },
    { type: 'other', dutch: 'jij', chinese: '你', exampleDutch: 'Jij bent mijn vriend.', exampleChinese: '你是我的朋友。' },
    { type: 'other', dutch: 'hij', chinese: '他', exampleDutch: 'Hij werkt hier.', exampleChinese: '他在这里工作。' },
    { type: 'other', dutch: 'zij', chinese: '她/他们', exampleDutch: 'Zij is arts.', exampleChinese: '她是医生。' },
    { type: 'other', dutch: 'wij', chinese: '我们', exampleDutch: 'Wij gaan naar huis.', exampleChinese: '我们回家。' },
    { type: 'other', dutch: 'jullie', chinese: '你们', exampleDutch: 'Jullie zijn welkom.', exampleChinese: '欢迎你们。' },
    { type: 'other', dutch: 'dit', chinese: '这个', exampleDutch: 'Dit is mijn boek.', exampleChinese: '这是我的书。' },
    { type: 'other', dutch: 'dat', chinese: '那个', exampleDutch: 'Dat is mooi.', exampleChinese: '那很漂亮。' },

    // ===== 常用名词 - het词 =====
    { type: 'noun-het', dutch: 'huis', plural: 'huizen', chinese: '房子', exampleDutch: 'Het huis is groot.', exampleChinese: '这房子很大。' },
    { type: 'noun-het', dutch: 'boek', plural: 'boeken', chinese: '书', exampleDutch: 'Het boek is interessant.', exampleChinese: '这本书很有趣。' },
    { type: 'noun-het', dutch: 'water', plural: 'wateren', chinese: '水', exampleDutch: 'Het water is koud.', exampleChinese: '水是冷的。' },
    { type: 'noun-het', dutch: 'kind', plural: 'kinderen', chinese: '孩子', exampleDutch: 'Het kind speelt buiten.', exampleChinese: '孩子在外面玩。' },
    { type: 'noun-het', dutch: 'meisje', plural: 'meisjes', chinese: '女孩', exampleDutch: 'Het meisje lacht.', exampleChinese: '女孩在笑。' },
    { type: 'noun-het', dutch: 'werk', plural: 'werken', chinese: '工作', exampleDutch: 'Het werk is moeilijk.', exampleChinese: '工作很难。' },
    { type: 'noun-het', dutch: 'eten', plural: '-', chinese: '食物', exampleDutch: 'Het eten is lekker.', exampleChinese: '食物很好吃。' },
    { type: 'noun-het', dutch: 'weer', plural: '-', chinese: '天气', exampleDutch: 'Het weer is mooi.', exampleChinese: '天气很好。' },
    { type: 'noun-het', dutch: 'jaar', plural: 'jaren', chinese: '年', exampleDutch: 'Het jaar heeft twaalf maanden.', exampleChinese: '一年有十二个月。' },
    { type: 'noun-het', dutch: 'land', plural: 'landen', chinese: '国家', exampleDutch: 'Het land is groot.', exampleChinese: '这个国家很大。' },
    { type: 'noun-het', dutch: 'geld', plural: '-', chinese: '钱', exampleDutch: 'Het geld is op.', exampleChinese: '钱花完了。' },
    { type: 'noun-het', dutch: 'hoofd', plural: 'hoofden', chinese: '头', exampleDutch: 'Mijn hoofd doet pijn.', exampleChinese: '我头痛。' },
    { type: 'noun-het', dutch: 'probleem', plural: 'problemen', chinese: '问题', exampleDutch: 'Het probleem is opgelost.', exampleChinese: '问题解决了。' },
    { type: 'noun-het', dutch: 'moment', plural: 'momenten', chinese: '时刻', exampleDutch: 'Een moment alstublieft.', exampleChinese: '请稍等。' },
    { type: 'noun-het', dutch: 'station', plural: 'stations', chinese: '车站', exampleDutch: 'Het station is dichtbij.', exampleChinese: '车站很近。' },
    { type: 'noun-het', dutch: 'restaurant', plural: 'restaurants', chinese: '餐厅', exampleDutch: 'Het restaurant is vol.', exampleChinese: '餐厅满了。' },
    { type: 'noun-het', dutch: 'hotel', plural: 'hotels', chinese: '酒店', exampleDutch: 'Het hotel is duur.', exampleChinese: '酒店很贵。' },
    { type: 'noun-het', dutch: 'vliegtuig', plural: 'vliegtuigen', chinese: '飞机', exampleDutch: 'Het vliegtuig vertrekt.', exampleChinese: '飞机起飞了。' },
    { type: 'noun-het', dutch: 'ziekenhuis', plural: 'ziekenhuizen', chinese: '医院', exampleDutch: 'Het ziekenhuis is nieuw.', exampleChinese: '医院是新的。' },
    { type: 'noun-het', dutch: 'ontbijt', plural: 'ontbijten', chinese: '早餐', exampleDutch: 'Het ontbijt is klaar.', exampleChinese: '早餐准备好了。' },

    // ===== 常用名词 - de词 =====
    { type: 'noun-de', dutch: 'man', plural: 'mannen', chinese: '男人', exampleDutch: 'De man loopt.', exampleChinese: '男人在走路。' },
    { type: 'noun-de', dutch: 'vrouw', plural: 'vrouwen', chinese: '女人', exampleDutch: 'De vrouw leest.', exampleChinese: '女人在读书。' },
    { type: 'noun-de', dutch: 'jongen', plural: 'jongens', chinese: '男孩', exampleDutch: 'De jongen rent.', exampleChinese: '男孩在跑。' },
    { type: 'noun-de', dutch: 'dag', plural: 'dagen', chinese: '天/日', exampleDutch: 'De dag is lang.', exampleChinese: '这天很长。' },
    { type: 'noun-de', dutch: 'week', plural: 'weken', chinese: '周', exampleDutch: 'De week is voorbij.', exampleChinese: '这周过去了。' },
    { type: 'noun-de', dutch: 'maand', plural: 'maanden', chinese: '月', exampleDutch: 'De maand december.', exampleChinese: '十二月。' },
    { type: 'noun-de', dutch: 'tijd', plural: 'tijden', chinese: '时间', exampleDutch: 'De tijd vliegt.', exampleChinese: '时间飞逝。' },
    { type: 'noun-de', dutch: 'kamer', plural: 'kamers', chinese: '房间', exampleDutch: 'De kamer is schoon.', exampleChinese: '房间很干净。' },
    { type: 'noun-de', dutch: 'deur', plural: 'deuren', chinese: '门', exampleDutch: 'De deur is open.', exampleChinese: '门开着。' },
    { type: 'noun-de', dutch: 'tafel', plural: 'tafels', chinese: '桌子', exampleDutch: 'De tafel is rond.', exampleChinese: '桌子是圆的。' },
    { type: 'noun-de', dutch: 'stoel', plural: 'stoelen', chinese: '椅子', exampleDutch: 'De stoel is comfortabel.', exampleChinese: '椅子很舒服。' },
    { type: 'noun-de', dutch: 'straat', plural: 'straten', chinese: '街道', exampleDutch: 'De straat is druk.', exampleChinese: '街道很繁忙。' },
    { type: 'noun-de', dutch: 'stad', plural: 'steden', chinese: '城市', exampleDutch: 'De stad is mooi.', exampleChinese: '这座城市很美。' },
    { type: 'noun-de', dutch: 'school', plural: 'scholen', chinese: '学校', exampleDutch: 'De school begint.', exampleChinese: '学校开学了。' },
    { type: 'noun-de', dutch: 'auto', plural: "auto's", chinese: '汽车', exampleDutch: 'De auto is rood.', exampleChinese: '汽车是红色的。' },
    { type: 'noun-de', dutch: 'fiets', plural: 'fietsen', chinese: '自行车', exampleDutch: 'De fiets is nieuw.', exampleChinese: '自行车是新的。' },
    { type: 'noun-de', dutch: 'trein', plural: 'treinen', chinese: '火车', exampleDutch: 'De trein is laat.', exampleChinese: '火车晚点了。' },
    { type: 'noun-de', dutch: 'bus', plural: 'bussen', chinese: '公交车', exampleDutch: 'De bus komt eraan.', exampleChinese: '公交车来了。' },
    { type: 'noun-de', dutch: 'zon', plural: 'zonnen', chinese: '太阳', exampleDutch: 'De zon schijnt.', exampleChinese: '太阳在照耀。' },
    { type: 'noun-de', dutch: 'maan', plural: 'manen', chinese: '月亮', exampleDutch: 'De maan is vol.', exampleChinese: '月亮是满月。' },
    { type: 'noun-de', dutch: 'regen', plural: '-', chinese: '雨', exampleDutch: 'De regen valt.', exampleChinese: '下雨了。' },
    { type: 'noun-de', dutch: 'wind', plural: 'winden', chinese: '风', exampleDutch: 'De wind waait hard.', exampleChinese: '风刮得很大。' },
    { type: 'noun-de', dutch: 'boom', plural: 'bomen', chinese: '树', exampleDutch: 'De boom is hoog.', exampleChinese: '树很高。' },
    { type: 'noun-de', dutch: 'bloem', plural: 'bloemen', chinese: '花', exampleDutch: 'De bloem is mooi.', exampleChinese: '花很漂亮。' },
    { type: 'noun-de', dutch: 'hond', plural: 'honden', chinese: '狗', exampleDutch: 'De hond blaft.', exampleChinese: '狗在叫。' },
    { type: 'noun-de', dutch: 'kat', plural: 'katten', chinese: '猫', exampleDutch: 'De kat slaapt.', exampleChinese: '猫在睡觉。' },
    { type: 'noun-de', dutch: 'vogel', plural: 'vogels', chinese: '鸟', exampleDutch: 'De vogel zingt.', exampleChinese: '鸟在唱歌。' },
    { type: 'noun-de', dutch: 'vis', plural: 'vissen', chinese: '鱼', exampleDutch: 'De vis zwemt.', exampleChinese: '鱼在游泳。' },
    { type: 'noun-de', dutch: 'vriend', plural: 'vrienden', chinese: '朋友(男)', exampleDutch: 'Mijn vriend komt.', exampleChinese: '我朋友来了。' },
    { type: 'noun-de', dutch: 'vriendin', plural: 'vriendinnen', chinese: '朋友(女)', exampleDutch: 'Mijn vriendin belt.', exampleChinese: '我女性朋友打电话。' },
    { type: 'noun-de', dutch: 'familie', plural: 'families', chinese: '家庭', exampleDutch: 'De familie is groot.', exampleChinese: '家庭很大。' },
    { type: 'noun-de', dutch: 'vader', plural: 'vaders', chinese: '父亲', exampleDutch: 'Mijn vader werkt.', exampleChinese: '我父亲在工作。' },
    { type: 'noun-de', dutch: 'moeder', plural: 'moeders', chinese: '母亲', exampleDutch: 'Mijn moeder kookt.', exampleChinese: '我母亲在做饭。' },
    { type: 'noun-de', dutch: 'broer', plural: 'broers', chinese: '兄弟', exampleDutch: 'Mijn broer studeert.', exampleChinese: '我兄弟在学习。' },
    { type: 'noun-de', dutch: 'zus', plural: 'zussen', chinese: '姐妹', exampleDutch: 'Mijn zus danst.', exampleChinese: '我姐妹在跳舞。' },
    { type: 'noun-de', dutch: 'dokter', plural: 'dokters', chinese: '医生', exampleDutch: 'De dokter helpt.', exampleChinese: '医生在帮忙。' },
    { type: 'noun-de', dutch: 'leraar', plural: 'leraren', chinese: '老师(男)', exampleDutch: 'De leraar leest voor.', exampleChinese: '老师在朗读。' },
    { type: 'noun-de', dutch: 'lerares', plural: 'leraressen', chinese: '老师(女)', exampleDutch: 'De lerares legt uit.', exampleChinese: '女老师在解释。' },
    { type: 'noun-de', dutch: 'student', plural: 'studenten', chinese: '学生', exampleDutch: 'De student leert.', exampleChinese: '学生在学习。' },
    { type: 'noun-de', dutch: 'taal', plural: 'talen', chinese: '语言', exampleDutch: 'De taal is moeilijk.', exampleChinese: '这门语言很难。' },
    { type: 'noun-de', dutch: 'les', plural: 'lessen', chinese: '课程', exampleDutch: 'De les begint.', exampleChinese: '课程开始了。' },
    { type: 'noun-de', dutch: 'vraag', plural: 'vragen', chinese: '问题', exampleDutch: 'Ik heb een vraag.', exampleChinese: '我有个问题。' },
    { type: 'noun-de', dutch: 'koffie', plural: '-', chinese: '咖啡', exampleDutch: 'De koffie is warm.', exampleChinese: '咖啡是热的。' },
    { type: 'noun-de', dutch: 'thee', plural: '-', chinese: '茶', exampleDutch: 'De thee is lekker.', exampleChinese: '茶很好喝。' },
    { type: 'noun-de', dutch: 'melk', plural: '-', chinese: '牛奶', exampleDutch: 'De melk is koud.', exampleChinese: '牛奶是冷的。' },
    { type: 'noun-de', dutch: 'appel', plural: 'appels', chinese: '苹果', exampleDutch: 'De appel is rood.', exampleChinese: '苹果是红色的。' },
    { type: 'noun-de', dutch: 'banaan', plural: 'bananen', chinese: '香蕉', exampleDutch: 'De banaan is geel.', exampleChinese: '香蕉是黄色的。' },
    { type: 'noun-de', dutch: 'sinaasappel', plural: 'sinaasappels', chinese: '橙子', exampleDutch: 'De sinaasappel is zoet.', exampleChinese: '橙子是甜的。' },
    { type: 'noun-de', dutch: 'kaas', plural: 'kazen', chinese: '奶酪', exampleDutch: 'De kaas is Nederlands.', exampleChinese: '这是荷兰奶酪。' },
    { type: 'noun-de', dutch: 'winkel', plural: 'winkels', chinese: '商店', exampleDutch: 'De winkel is open.', exampleChinese: '商店开门了。' },
    { type: 'noun-de', dutch: 'supermarkt', plural: 'supermarkten', chinese: '超市', exampleDutch: 'De supermarkt is groot.', exampleChinese: '超市很大。' },
    { type: 'noun-de', dutch: 'prijs', plural: 'prijzen', chinese: '价格', exampleDutch: 'De prijs is hoog.', exampleChinese: '价格很高。' },
    { type: 'noun-de', dutch: 'rekening', plural: 'rekeningen', chinese: '账单', exampleDutch: 'De rekening alstublieft.', exampleChinese: '请给我账单。' },
    { type: 'noun-de', dutch: 'telefoon', plural: 'telefoons', chinese: '电话', exampleDutch: 'De telefoon rinkelt.', exampleChinese: '电话响了。' },
    { type: 'noun-de', dutch: 'computer', plural: 'computers', chinese: '电脑', exampleDutch: 'De computer werkt niet.', exampleChinese: '电脑不工作了。' },
    { type: 'noun-de', dutch: 'krant', plural: 'kranten', chinese: '报纸', exampleDutch: 'De krant van vandaag.', exampleChinese: '今天的报纸。' },
    { type: 'noun-de', dutch: 'brief', plural: 'brieven', chinese: '信', exampleDutch: 'De brief is aangekomen.', exampleChinese: '信到了。' },
    { type: 'noun-de', dutch: 'avond', plural: 'avonden', chinese: '晚上', exampleDutch: 'De avond is rustig.', exampleChinese: '晚上很安静。' },
    { type: 'noun-de', dutch: 'morgen', plural: '-', chinese: '早晨', exampleDutch: 'De morgen is fris.', exampleChinese: '早晨很清新。' },
    { type: 'noun-de', dutch: 'middag', plural: 'middagen', chinese: '下午', exampleDutch: 'De middag is warm.', exampleChinese: '下午很热。' },
    { type: 'noun-de', dutch: 'nacht', plural: 'nachten', chinese: '夜晚', exampleDutch: 'De nacht is stil.', exampleChinese: '夜晚很安静。' },

    // ===== 常用动词 (带变位) =====
    { 
        type: 'verb', dutch: 'zijn', chinese: '是', 
        exampleDutch: 'Ik ben student.', exampleChinese: '我是学生。',
        conjugation: { ik: 'ben', jij: 'bent', hij: 'is', wij: 'zijn', jullie: 'zijn', zij: 'zijn' },
        pastTense: 'was / waren', pastParticiple: 'geweest', auxiliary: 'zijn'
    },
    { 
        type: 'verb', dutch: 'hebben', chinese: '有', 
        exampleDutch: 'Ik heb een boek.', exampleChinese: '我有一本书。',
        conjugation: { ik: 'heb', jij: 'hebt', hij: 'heeft', wij: 'hebben', jullie: 'hebben', zij: 'hebben' },
        pastTense: 'had / hadden', pastParticiple: 'gehad', auxiliary: 'hebben'
    },
    { 
        type: 'verb', dutch: 'gaan', chinese: '去', 
        exampleDutch: 'Ik ga naar huis.', exampleChinese: '我回家。',
        conjugation: { ik: 'ga', jij: 'gaat', hij: 'gaat', wij: 'gaan', jullie: 'gaan', zij: 'gaan' },
        pastTense: 'ging / gingen', pastParticiple: 'gegaan', auxiliary: 'zijn'
    },
    { 
        type: 'verb', dutch: 'komen', chinese: '来', 
        exampleDutch: 'Ik kom morgen.', exampleChinese: '我明天来。',
        conjugation: { ik: 'kom', jij: 'komt', hij: 'komt', wij: 'komen', jullie: 'komen', zij: 'komen' },
        pastTense: 'kwam / kwamen', pastParticiple: 'gekomen', auxiliary: 'zijn'
    },
    { 
        type: 'verb', dutch: 'doen', chinese: '做', 
        exampleDutch: 'Wat doe je?', exampleChinese: '你在做什么？',
        conjugation: { ik: 'doe', jij: 'doet', hij: 'doet', wij: 'doen', jullie: 'doen', zij: 'doen' },
        pastTense: 'deed / deden', pastParticiple: 'gedaan', auxiliary: 'hebben'
    },
    { 
        type: 'verb', dutch: 'zeggen', chinese: '说', 
        exampleDutch: 'Wat zeg je?', exampleChinese: '你说什么？',
        conjugation: { ik: 'zeg', jij: 'zegt', hij: 'zegt', wij: 'zeggen', jullie: 'zeggen', zij: 'zeggen' },
        pastTense: 'zei / zeiden', pastParticiple: 'gezegd', auxiliary: 'hebben'
    },
    { 
        type: 'verb', dutch: 'maken', chinese: '做/制作', 
        exampleDutch: 'Ik maak eten.', exampleChinese: '我做饭。',
        conjugation: { ik: 'maak', jij: 'maakt', hij: 'maakt', wij: 'maken', jullie: 'maken', zij: 'maken' },
        pastTense: 'maakte / maakten', pastParticiple: 'gemaakt', auxiliary: 'hebben'
    },
    { 
        type: 'verb', dutch: 'zien', chinese: '看见', 
        exampleDutch: 'Ik zie je morgen.', exampleChinese: '明天见。',
        conjugation: { ik: 'zie', jij: 'ziet', hij: 'ziet', wij: 'zien', jullie: 'zien', zij: 'zien' },
        pastTense: 'zag / zagen', pastParticiple: 'gezien', auxiliary: 'hebben'
    },
    { 
        type: 'verb', dutch: 'weten', chinese: '知道', 
        exampleDutch: 'Ik weet het niet.', exampleChinese: '我不知道。',
        conjugation: { ik: 'weet', jij: 'weet', hij: 'weet', wij: 'weten', jullie: 'weten', zij: 'weten' },
        pastTense: 'wist / wisten', pastParticiple: 'geweten', auxiliary: 'hebben'
    },
    { 
        type: 'verb', dutch: 'denken', chinese: '想/认为', 
        exampleDutch: 'Ik denk van wel.', exampleChinese: '我想是的。',
        conjugation: { ik: 'denk', jij: 'denkt', hij: 'denkt', wij: 'denken', jullie: 'denken', zij: 'denken' },
        pastTense: 'dacht / dachten', pastParticiple: 'gedacht', auxiliary: 'hebben'
    },
    { 
        type: 'verb', dutch: 'willen', chinese: '想要', 
        exampleDutch: 'Ik wil koffie.', exampleChinese: '我想要咖啡。',
        conjugation: { ik: 'wil', jij: 'wilt', hij: 'wil', wij: 'willen', jullie: 'willen', zij: 'willen' },
        pastTense: 'wilde / wilden', pastParticiple: 'gewild', auxiliary: 'hebben'
    },
    { 
        type: 'verb', dutch: 'kunnen', chinese: '能/会', 
        exampleDutch: 'Ik kan zwemmen.', exampleChinese: '我会游泳。',
        conjugation: { ik: 'kan', jij: 'kunt', hij: 'kan', wij: 'kunnen', jullie: 'kunnen', zij: 'kunnen' },
        pastTense: 'kon / konden', pastParticiple: 'gekund', auxiliary: 'hebben'
    },
    { 
        type: 'verb', dutch: 'moeten', chinese: '必须', 
        exampleDutch: 'Ik moet gaan.', exampleChinese: '我必须走了。',
        conjugation: { ik: 'moet', jij: 'moet', hij: 'moet', wij: 'moeten', jullie: 'moeten', zij: 'moeten' },
        pastTense: 'moest / moesten', pastParticiple: 'gemoeten', auxiliary: 'hebben'
    },
    { 
        type: 'verb', dutch: 'mogen', chinese: '可以', 
        exampleDutch: 'Mag ik binnenkomen?', exampleChinese: '我可以进来吗？',
        conjugation: { ik: 'mag', jij: 'mag', hij: 'mag', wij: 'mogen', jullie: 'mogen', zij: 'mogen' },
        pastTense: 'mocht / mochten', pastParticiple: 'gemogen', auxiliary: 'hebben'
    },
    { 
        type: 'verb', dutch: 'eten', chinese: '吃', 
        exampleDutch: 'Ik eet een appel.', exampleChinese: '我吃苹果。',
        conjugation: { ik: 'eet', jij: 'eet', hij: 'eet', wij: 'eten', jullie: 'eten', zij: 'eten' },
        pastTense: 'at / aten', pastParticiple: 'gegeten', auxiliary: 'hebben'
    },
    { 
        type: 'verb', dutch: 'drinken', chinese: '喝', 
        exampleDutch: 'Ik drink water.', exampleChinese: '我喝水。',
        conjugation: { ik: 'drink', jij: 'drinkt', hij: 'drinkt', wij: 'drinken', jullie: 'drinken', zij: 'drinken' },
        pastTense: 'dronk / dronken', pastParticiple: 'gedronken', auxiliary: 'hebben'
    },
    { 
        type: 'verb', dutch: 'slapen', chinese: '睡觉', 
        exampleDutch: 'Ik slaap goed.', exampleChinese: '我睡得好。',
        conjugation: { ik: 'slaap', jij: 'slaapt', hij: 'slaapt', wij: 'slapen', jullie: 'slapen', zij: 'slapen' },
        pastTense: 'sliep / sliepen', pastParticiple: 'geslapen', auxiliary: 'hebben'
    },
    { 
        type: 'verb', dutch: 'werken', chinese: '工作', 
        exampleDutch: 'Ik werk thuis.', exampleChinese: '我在家工作。',
        conjugation: { ik: 'werk', jij: 'werkt', hij: 'werkt', wij: 'werken', jullie: 'werken', zij: 'werken' },
        pastTense: 'werkte / werkten', pastParticiple: 'gewerkt', auxiliary: 'hebben'
    },
    { 
        type: 'verb', dutch: 'lopen', chinese: '走/跑', 
        exampleDutch: 'Ik loop naar school.', exampleChinese: '我走路去学校。',
        conjugation: { ik: 'loop', jij: 'loopt', hij: 'loopt', wij: 'lopen', jullie: 'lopen', zij: 'lopen' },
        pastTense: 'liep / liepen', pastParticiple: 'gelopen', auxiliary: 'hebben'
    },
    { 
        type: 'verb', dutch: 'fietsen', chinese: '骑自行车', 
        exampleDutch: 'Ik fiets naar werk.', exampleChinese: '我骑车去上班。',
        conjugation: { ik: 'fiets', jij: 'fietst', hij: 'fietst', wij: 'fietsen', jullie: 'fietsen', zij: 'fietsen' },
        pastTense: 'fietste / fietsten', pastParticiple: 'gefietst', auxiliary: 'hebben'
    },
    { 
        type: 'verb', dutch: 'rijden', chinese: '开车', 
        exampleDutch: 'Ik rijd auto.', exampleChinese: '我开车。',
        conjugation: { ik: 'rijd', jij: 'rijdt', hij: 'rijdt', wij: 'rijden', jullie: 'rijden', zij: 'rijden' },
        pastTense: 'reed / reden', pastParticiple: 'gereden', auxiliary: 'hebben'
    },
    { 
        type: 'verb', dutch: 'lezen', chinese: '读', 
        exampleDutch: 'Ik lees een boek.', exampleChinese: '我在读书。',
        conjugation: { ik: 'lees', jij: 'leest', hij: 'leest', wij: 'lezen', jullie: 'lezen', zij: 'lezen' },
        pastTense: 'las / lazen', pastParticiple: 'gelezen', auxiliary: 'hebben'
    },
    { 
        type: 'verb', dutch: 'schrijven', chinese: '写', 
        exampleDutch: 'Ik schrijf een brief.', exampleChinese: '我在写信。',
        conjugation: { ik: 'schrijf', jij: 'schrijft', hij: 'schrijft', wij: 'schrijven', jullie: 'schrijven', zij: 'schrijven' },
        pastTense: 'schreef / schreven', pastParticiple: 'geschreven', auxiliary: 'hebben'
    },
    { 
        type: 'verb', dutch: 'spreken', chinese: '说(话)', 
        exampleDutch: 'Ik spreek Nederlands.', exampleChinese: '我说荷兰语。',
        conjugation: { ik: 'spreek', jij: 'spreekt', hij: 'spreekt', wij: 'spreken', jullie: 'spreken', zij: 'spreken' },
        pastTense: 'sprak / spraken', pastParticiple: 'gesproken', auxiliary: 'hebben'
    },
    { 
        type: 'verb', dutch: 'leren', chinese: '学习', 
        exampleDutch: 'Ik leer Nederlands.', exampleChinese: '我在学荷兰语。',
        conjugation: { ik: 'leer', jij: 'leert', hij: 'leert', wij: 'leren', jullie: 'leren', zij: 'leren' },
        pastTense: 'leerde / leerden', pastParticiple: 'geleerd', auxiliary: 'hebben'
    },
    { 
        type: 'verb', dutch: 'wonen', chinese: '住', 
        exampleDutch: 'Ik woon in Amsterdam.', exampleChinese: '我住在阿姆斯特丹。',
        conjugation: { ik: 'woon', jij: 'woont', hij: 'woont', wij: 'wonen', jullie: 'wonen', zij: 'wonen' },
        pastTense: 'woonde / woonden', pastParticiple: 'gewoond', auxiliary: 'hebben'
    },
    { 
        type: 'verb', dutch: 'kopen', chinese: '买', 
        exampleDutch: 'Ik koop brood.', exampleChinese: '我买面包。',
        conjugation: { ik: 'koop', jij: 'koopt', hij: 'koopt', wij: 'kopen', jullie: 'kopen', zij: 'kopen' },
        pastTense: 'kocht / kochten', pastParticiple: 'gekocht', auxiliary: 'hebben'
    },
    { 
        type: 'verb', dutch: 'betalen', chinese: '付款', 
        exampleDutch: 'Ik betaal cash.', exampleChinese: '我付现金。',
        conjugation: { ik: 'betaal', jij: 'betaalt', hij: 'betaalt', wij: 'betalen', jullie: 'betalen', zij: 'betalen' },
        pastTense: 'betaalde / betaalden', pastParticiple: 'betaald', auxiliary: 'hebben'
    },
    { 
        type: 'verb', dutch: 'vragen', chinese: '问', 
        exampleDutch: 'Ik vraag het.', exampleChinese: '我来问。',
        conjugation: { ik: 'vraag', jij: 'vraagt', hij: 'vraagt', wij: 'vragen', jullie: 'vragen', zij: 'vragen' },
        pastTense: 'vroeg / vroegen', pastParticiple: 'gevraagd', auxiliary: 'hebben'
    },
    { 
        type: 'verb', dutch: 'antwoorden', chinese: '回答', 
        exampleDutch: 'Ik antwoord snel.', exampleChinese: '我很快回答。',
        conjugation: { ik: 'antwoord', jij: 'antwoordt', hij: 'antwoordt', wij: 'antwoorden', jullie: 'antwoorden', zij: 'antwoorden' },
        pastTense: 'antwoordde / antwoordden', pastParticiple: 'geantwoord', auxiliary: 'hebben'
    },
    { 
        type: 'verb', dutch: 'beginnen', chinese: '开始', 
        exampleDutch: 'De les begint.', exampleChinese: '课程开始了。',
        conjugation: { ik: 'begin', jij: 'begint', hij: 'begint', wij: 'beginnen', jullie: 'beginnen', zij: 'beginnen' },
        pastTense: 'begon / begonnen', pastParticiple: 'begonnen', auxiliary: 'zijn'
    },
    { 
        type: 'verb', dutch: 'stoppen', chinese: '停止', 
        exampleDutch: 'De bus stopt hier.', exampleChinese: '公交车在这里停。',
        conjugation: { ik: 'stop', jij: 'stopt', hij: 'stopt', wij: 'stoppen', jullie: 'stoppen', zij: 'stoppen' },
        pastTense: 'stopte / stopten', pastParticiple: 'gestopt', auxiliary: 'zijn'
    },
    { 
        type: 'verb', dutch: 'helpen', chinese: '帮助', 
        exampleDutch: 'Kan ik u helpen?', exampleChinese: '我能帮您吗？',
        conjugation: { ik: 'help', jij: 'helpt', hij: 'helpt', wij: 'helpen', jullie: 'helpen', zij: 'helpen' },
        pastTense: 'hielp / hielpen', pastParticiple: 'geholpen', auxiliary: 'hebben'
    },
    { 
        type: 'verb', dutch: 'zoeken', chinese: '找/寻找', 
        exampleDutch: 'Ik zoek mijn sleutels.', exampleChinese: '我在找钥匙。',
        conjugation: { ik: 'zoek', jij: 'zoekt', hij: 'zoekt', wij: 'zoeken', jullie: 'zoeken', zij: 'zoeken' },
        pastTense: 'zocht / zochten', pastParticiple: 'gezocht', auxiliary: 'hebben'
    },
    { 
        type: 'verb', dutch: 'vinden', chinese: '找到/认为', 
        exampleDutch: 'Ik vind het leuk.', exampleChinese: '我觉得很有趣。',
        conjugation: { ik: 'vind', jij: 'vindt', hij: 'vindt', wij: 'vinden', jullie: 'vinden', zij: 'vinden' },
        pastTense: 'vond / vonden', pastParticiple: 'gevonden', auxiliary: 'hebben'
    },
    { 
        type: 'verb', dutch: 'houden van', chinese: '喜欢', 
        exampleDutch: 'Ik hou van jou.', exampleChinese: '我爱你。',
        conjugation: { ik: 'hou', jij: 'houdt', hij: 'houdt', wij: 'houden', jullie: 'houden', zij: 'houden' },
        pastTense: 'hield / hielden', pastParticiple: 'gehouden', auxiliary: 'hebben'
    },
    { 
        type: 'verb', dutch: 'wachten', chinese: '等待', 
        exampleDutch: 'Ik wacht op je.', exampleChinese: '我在等你。',
        conjugation: { ik: 'wacht', jij: 'wacht', hij: 'wacht', wij: 'wachten', jullie: 'wachten', zij: 'wachten' },
        pastTense: 'wachtte / wachtten', pastParticiple: 'gewacht', auxiliary: 'hebben'
    },
    { 
        type: 'verb', dutch: 'bellen', chinese: '打电话', 
        exampleDutch: 'Ik bel je later.', exampleChinese: '我稍后打给你。',
        conjugation: { ik: 'bel', jij: 'belt', hij: 'belt', wij: 'bellen', jullie: 'bellen', zij: 'bellen' },
        pastTense: 'belde / belden', pastParticiple: 'gebeld', auxiliary: 'hebben'
    },
    { 
        type: 'verb', dutch: 'luisteren', chinese: '听', 
        exampleDutch: 'Ik luister naar muziek.', exampleChinese: '我在听音乐。',
        conjugation: { ik: 'luister', jij: 'luistert', hij: 'luistert', wij: 'luisteren', jullie: 'luisteren', zij: 'luisteren' },
        pastTense: 'luisterde / luisterden', pastParticiple: 'geluisterd', auxiliary: 'hebben'
    },
    { 
        type: 'verb', dutch: 'kijken', chinese: '看', 
        exampleDutch: 'Ik kijk tv.', exampleChinese: '我在看电视。',
        conjugation: { ik: 'kijk', jij: 'kijkt', hij: 'kijkt', wij: 'kijken', jullie: 'kijken', zij: 'kijken' },
        pastTense: 'keek / keken', pastParticiple: 'gekeken', auxiliary: 'hebben'
    },
    { 
        type: 'verb', dutch: 'horen', chinese: '听到', 
        exampleDutch: 'Ik hoor iets.', exampleChinese: '我听到什么了。',
        conjugation: { ik: 'hoor', jij: 'hoort', hij: 'hoort', wij: 'horen', jullie: 'horen', zij: 'horen' },
        pastTense: 'hoorde / hoorden', pastParticiple: 'gehoord', auxiliary: 'hebben'
    },
    { 
        type: 'verb', dutch: 'voelen', chinese: '感觉', 
        exampleDutch: 'Ik voel me goed.', exampleChinese: '我感觉很好。',
        conjugation: { ik: 'voel', jij: 'voelt', hij: 'voelt', wij: 'voelen', jullie: 'voelen', zij: 'voelen' },
        pastTense: 'voelde / voelden', pastParticiple: 'gevoeld', auxiliary: 'hebben'
    },
    { 
        type: 'verb', dutch: 'zitten', chinese: '坐', 
        exampleDutch: 'Ik zit op de stoel.', exampleChinese: '我坐在椅子上。',
        conjugation: { ik: 'zit', jij: 'zit', hij: 'zit', wij: 'zitten', jullie: 'zitten', zij: 'zitten' },
        pastTense: 'zat / zaten', pastParticiple: 'gezeten', auxiliary: 'hebben'
    },
    { 
        type: 'verb', dutch: 'staan', chinese: '站', 
        exampleDutch: 'Ik sta bij de deur.', exampleChinese: '我站在门口。',
        conjugation: { ik: 'sta', jij: 'staat', hij: 'staat', wij: 'staan', jullie: 'staan', zij: 'staan' },
        pastTense: 'stond / stonden', pastParticiple: 'gestaan', auxiliary: 'hebben'
    },
    { 
        type: 'verb', dutch: 'liggen', chinese: '躺', 
        exampleDutch: 'Ik lig op bed.', exampleChinese: '我躺在床上。',
        conjugation: { ik: 'lig', jij: 'ligt', hij: 'ligt', wij: 'liggen', jullie: 'liggen', zij: 'liggen' },
        pastTense: 'lag / lagen', pastParticiple: 'gelegen', auxiliary: 'hebben'
    },

    // ===== 形容词 Adjectives =====
    { type: 'adjective', dutch: 'groot', chinese: '大', exampleDutch: 'Het huis is groot.', exampleChinese: '房子很大。' },
    { type: 'adjective', dutch: 'klein', chinese: '小', exampleDutch: 'De auto is klein.', exampleChinese: '汽车很小。' },
    { type: 'adjective', dutch: 'goed', chinese: '好', exampleDutch: 'Het eten is goed.', exampleChinese: '食物很好。' },
    { type: 'adjective', dutch: 'slecht', chinese: '坏/差', exampleDutch: 'Het weer is slecht.', exampleChinese: '天气很差。' },
    { type: 'adjective', dutch: 'nieuw', chinese: '新', exampleDutch: 'De fiets is nieuw.', exampleChinese: '自行车是新的。' },
    { type: 'adjective', dutch: 'oud', chinese: '旧/老', exampleDutch: 'Het boek is oud.', exampleChinese: '书是旧的。' },
    { type: 'adjective', dutch: 'mooi', chinese: '漂亮', exampleDutch: 'De bloem is mooi.', exampleChinese: '花很漂亮。' },
    { type: 'adjective', dutch: 'lelijk', chinese: '丑', exampleDutch: 'Het gebouw is lelijk.', exampleChinese: '建筑很丑。' },
    { type: 'adjective', dutch: 'lang', chinese: '长/高', exampleDutch: 'De man is lang.', exampleChinese: '男人很高。' },
    { type: 'adjective', dutch: 'kort', chinese: '短/矮', exampleDutch: 'De film is kort.', exampleChinese: '电影很短。' },
    { type: 'adjective', dutch: 'duur', chinese: '贵', exampleDutch: 'De auto is duur.', exampleChinese: '汽车很贵。' },
    { type: 'adjective', dutch: 'goedkoop', chinese: '便宜', exampleDutch: 'De appels zijn goedkoop.', exampleChinese: '苹果很便宜。' },
    { type: 'adjective', dutch: 'warm', chinese: '热/暖', exampleDutch: 'De koffie is warm.', exampleChinese: '咖啡是热的。' },
    { type: 'adjective', dutch: 'koud', chinese: '冷', exampleDutch: 'Het water is koud.', exampleChinese: '水是冷的。' },
    { type: 'adjective', dutch: 'lekker', chinese: '好吃/舒服', exampleDutch: 'Het eten is lekker.', exampleChinese: '食物很好吃。' },
    { type: 'adjective', dutch: 'makkelijk', chinese: '容易', exampleDutch: 'De vraag is makkelijk.', exampleChinese: '问题很容易。' },
    { type: 'adjective', dutch: 'moeilijk', chinese: '难', exampleDutch: 'Nederlands is moeilijk.', exampleChinese: '荷兰语很难。' },
    { type: 'adjective', dutch: 'snel', chinese: '快', exampleDutch: 'De trein is snel.', exampleChinese: '火车很快。' },
    { type: 'adjective', dutch: 'langzaam', chinese: '慢', exampleDutch: 'De schildpad is langzaam.', exampleChinese: '乌龟很慢。' },
    { type: 'adjective', dutch: 'druk', chinese: '忙/繁忙', exampleDutch: 'De straat is druk.', exampleChinese: '街道很繁忙。' },
    { type: 'adjective', dutch: 'rustig', chinese: '安静', exampleDutch: 'De avond is rustig.', exampleChinese: '晚上很安静。' },
    { type: 'adjective', dutch: 'blij', chinese: '高兴', exampleDutch: 'Ik ben blij.', exampleChinese: '我很高兴。' },
    { type: 'adjective', dutch: 'verdrietig', chinese: '难过', exampleDutch: 'Hij is verdrietig.', exampleChinese: '他很难过。' },
    { type: 'adjective', dutch: 'moe', chinese: '累', exampleDutch: 'Ik ben moe.', exampleChinese: '我很累。' },
    { type: 'adjective', dutch: 'ziek', chinese: '生病', exampleDutch: 'Zij is ziek.', exampleChinese: '她生病了。' },
    { type: 'adjective', dutch: 'gezond', chinese: '健康', exampleDutch: 'Hij is gezond.', exampleChinese: '他很健康。' },
    { type: 'adjective', dutch: 'jong', chinese: '年轻', exampleDutch: 'De vrouw is jong.', exampleChinese: '女人很年轻。' },
    { type: 'adjective', dutch: 'open', chinese: '开着的', exampleDutch: 'De deur is open.', exampleChinese: '门开着。' },
    { type: 'adjective', dutch: 'dicht', chinese: '关着的', exampleDutch: 'De winkel is dicht.', exampleChinese: '商店关门了。' },
    { type: 'adjective', dutch: 'vol', chinese: '满', exampleDutch: 'De bus is vol.', exampleChinese: '公交车满了。' },
    { type: 'adjective', dutch: 'leeg', chinese: '空', exampleDutch: 'De kamer is leeg.', exampleChinese: '房间是空的。' },
    { type: 'adjective', dutch: 'schoon', chinese: '干净', exampleDutch: 'De kamer is schoon.', exampleChinese: '房间很干净。' },
    { type: 'adjective', dutch: 'vies', chinese: '脏', exampleDutch: 'De schoenen zijn vies.', exampleChinese: '鞋子很脏。' },
    { type: 'adjective', dutch: 'licht', chinese: '亮/轻', exampleDutch: 'De kamer is licht.', exampleChinese: '房间很亮。' },
    { type: 'adjective', dutch: 'donker', chinese: '暗', exampleDutch: 'De nacht is donker.', exampleChinese: '夜晚很暗。' },
    { type: 'adjective', dutch: 'interessant', chinese: '有趣', exampleDutch: 'Het boek is interessant.', exampleChinese: '书很有趣。' },
    { type: 'adjective', dutch: 'belangrijk', chinese: '重要', exampleDutch: 'Dit is belangrijk.', exampleChinese: '这很重要。' },
    { type: 'adjective', dutch: 'klaar', chinese: '准备好', exampleDutch: 'Het eten is klaar.', exampleChinese: '饭准备好了。' },
    { type: 'adjective', dutch: 'gratis', chinese: '免费', exampleDutch: 'De koffie is gratis.', exampleChinese: '咖啡是免费的。' },

    // ===== 颜色 Colors =====
    { type: 'adjective', dutch: 'rood', chinese: '红色', exampleDutch: 'De appel is rood.', exampleChinese: '苹果是红色的。' },
    { type: 'adjective', dutch: 'blauw', chinese: '蓝色', exampleDutch: 'De lucht is blauw.', exampleChinese: '天空是蓝色的。' },
    { type: 'adjective', dutch: 'groen', chinese: '绿色', exampleDutch: 'Het gras is groen.', exampleChinese: '草是绿色的。' },
    { type: 'adjective', dutch: 'geel', chinese: '黄色', exampleDutch: 'De zon is geel.', exampleChinese: '太阳是黄色的。' },
    { type: 'adjective', dutch: 'wit', chinese: '白色', exampleDutch: 'De sneeuw is wit.', exampleChinese: '雪是白色的。' },
    { type: 'adjective', dutch: 'zwart', chinese: '黑色', exampleDutch: 'De kat is zwart.', exampleChinese: '猫是黑色的。' },
    { type: 'adjective', dutch: 'oranje', chinese: '橙色', exampleDutch: 'De sinaasappel is oranje.', exampleChinese: '橙子是橙色的。' },

    // ===== 常用副词/短语 =====
    { type: 'adverb', dutch: 'ja', chinese: '是', exampleDutch: 'Ja, dat klopt.', exampleChinese: '是的，没错。' },
    { type: 'adverb', dutch: 'nee', chinese: '不', exampleDutch: 'Nee, dank je.', exampleChinese: '不，谢谢。' },
    { type: 'adverb', dutch: 'niet', chinese: '不（否定）', exampleDutch: 'Ik weet het niet.', exampleChinese: '我不知道。' },
    { type: 'adverb', dutch: 'ook', chinese: '也', exampleDutch: 'Ik ook.', exampleChinese: '我也是。' },
    { type: 'adverb', dutch: 'nog', chinese: '还/仍然', exampleDutch: 'Nog een keer.', exampleChinese: '再一次。' },
    { type: 'adverb', dutch: 'al', chinese: '已经', exampleDutch: 'Ik ben al klaar.', exampleChinese: '我已经准备好了。' },
    { type: 'adverb', dutch: 'altijd', chinese: '总是', exampleDutch: 'Hij komt altijd laat.', exampleChinese: '他总是迟到。' },
    { type: 'adverb', dutch: 'nooit', chinese: '从不', exampleDutch: 'Ik drink nooit alcohol.', exampleChinese: '我从不喝酒。' },
    { type: 'adverb', dutch: 'soms', chinese: '有时', exampleDutch: 'Soms regent het.', exampleChinese: '有时候下雨。' },
    { type: 'adverb', dutch: 'vaak', chinese: '经常', exampleDutch: 'Ik fiets vaak.', exampleChinese: '我经常骑车。' },
    { type: 'adverb', dutch: 'hier', chinese: '这里', exampleDutch: 'Ik woon hier.', exampleChinese: '我住这里。' },
    { type: 'adverb', dutch: 'daar', chinese: '那里', exampleDutch: 'Hij woont daar.', exampleChinese: '他住那里。' },
    { type: 'adverb', dutch: 'nu', chinese: '现在', exampleDutch: 'Ik ga nu.', exampleChinese: '我现在走。' },
    { type: 'adverb', dutch: 'later', chinese: '以后', exampleDutch: 'Tot later!', exampleChinese: '回头见！' },
    { type: 'adverb', dutch: 'vandaag', chinese: '今天', exampleDutch: 'Vandaag is het mooi weer.', exampleChinese: '今天天气好。' },
    { type: 'adverb', dutch: 'morgen', chinese: '明天', exampleDutch: 'Tot morgen!', exampleChinese: '明天见！' },
    { type: 'adverb', dutch: 'gisteren', chinese: '昨天', exampleDutch: 'Gisteren regende het.', exampleChinese: '昨天下雨了。' },
    { type: 'adverb', dutch: 'heel', chinese: '很/非常', exampleDutch: 'Heel goed!', exampleChinese: '非常好！' },
    { type: 'adverb', dutch: 'erg', chinese: '很/非常', exampleDutch: 'Erg lekker!', exampleChinese: '非常好吃！' },
    { type: 'adverb', dutch: 'misschien', chinese: '也许', exampleDutch: 'Misschien morgen.', exampleChinese: '也许明天。' },
    { type: 'adverb', dutch: 'natuurlijk', chinese: '当然', exampleDutch: 'Natuurlijk!', exampleChinese: '当然！' },
    { type: 'adverb', dutch: 'samen', chinese: '一起', exampleDutch: 'We gaan samen.', exampleChinese: '我们一起去。' },
    { type: 'adverb', dutch: 'alleen', chinese: '单独/只有', exampleDutch: 'Ik woon alleen.', exampleChinese: '我一个人住。' },
    { type: 'adverb', dutch: 'waarom', chinese: '为什么', exampleDutch: 'Waarom niet?', exampleChinese: '为什么不？' },
    { type: 'adverb', dutch: 'wanneer', chinese: '什么时候', exampleDutch: 'Wanneer kom je?', exampleChinese: '你什么时候来？' },
    { type: 'adverb', dutch: 'waar', chinese: '哪里', exampleDutch: 'Waar woon je?', exampleChinese: '你住哪里？' },
    { type: 'adverb', dutch: 'hoe', chinese: '怎么/如何', exampleDutch: 'Hoe gaat het?', exampleChinese: '你好吗？' },
    { type: 'adverb', dutch: 'wat', chinese: '什么', exampleDutch: 'Wat is dit?', exampleChinese: '这是什么？' },
    { type: 'adverb', dutch: 'wie', chinese: '谁', exampleDutch: 'Wie is dat?', exampleChinese: '那是谁？' },

    // ===== 常用短语 =====
    { type: 'other', dutch: 'alstublieft', chinese: '请（正式）', exampleDutch: 'Alstublieft.', exampleChinese: '请。/给您。' },
    { type: 'other', dutch: 'dank je wel', chinese: '谢谢', exampleDutch: 'Dank je wel!', exampleChinese: '谢谢你！' },
    { type: 'other', dutch: 'sorry', chinese: '对不起', exampleDutch: 'Sorry, ik ben laat.', exampleChinese: '对不起，我迟到了。' },
    { type: 'other', dutch: 'tot ziens', chinese: '再见', exampleDutch: 'Tot ziens!', exampleChinese: '再见！' },
    { type: 'other', dutch: 'goedemorgen', chinese: '早上好', exampleDutch: 'Goedemorgen!', exampleChinese: '早上好！' },
    { type: 'other', dutch: 'goedemiddag', chinese: '下午好', exampleDutch: 'Goedemiddag!', exampleChinese: '下午好！' },
    { type: 'other', dutch: 'goedenavond', chinese: '晚上好', exampleDutch: 'Goedenavond!', exampleChinese: '晚上好！' },
    { type: 'other', dutch: 'goedenacht', chinese: '晚安', exampleDutch: 'Goedenacht!', exampleChinese: '晚安！' },
    { type: 'other', dutch: 'hallo', chinese: '你好', exampleDutch: 'Hallo, hoe gaat het?', exampleChinese: '你好，你好吗？' },
    { type: 'other', dutch: 'doei', chinese: '拜拜', exampleDutch: 'Doei!', exampleChinese: '拜拜！' },
    { type: 'other', dutch: 'welkom', chinese: '欢迎', exampleDutch: 'Welkom in Nederland!', exampleChinese: '欢迎来到荷兰！' },
    { type: 'other', dutch: 'gefeliciteerd', chinese: '恭喜', exampleDutch: 'Gefeliciteerd!', exampleChinese: '恭喜！' },
    { type: 'other', dutch: 'proost', chinese: '干杯', exampleDutch: 'Proost!', exampleChinese: '干杯！' },
    { type: 'other', dutch: 'smakelijk eten', chinese: '请慢用', exampleDutch: 'Smakelijk eten!', exampleChinese: '请慢用！' },
];

// Export for use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = DUTCH_DICTIONARY;
}
