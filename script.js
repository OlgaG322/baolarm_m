const phrases = {
    general: [
        "Конечно, ЭТОТ ролик точно будет\nпоследним. Как и предыдущие 47",
        "Да, давай досмотрим сезон.\nСон переоценен,\nа\nмешки под глазами — это модно",
        "'Высплюсь\nна\nвыходных' — план человека,\nкоторый не понимает,\nкак работает организм",
        "Ага, завтра точно ляжешь раньше.\nКак и позавчера обещал,\nи\nпозапозавчера...",
        "Ты экономишь время ночью,\nчтобы потратить его\nна\nзевоту днем. Эффективно!",
        "Зачем спать 8 часов,\nесли можно спать 4\nи\nчувствовать себя на все 100...\nпроцентов отвратительно",
        "Поздравляю! Ты снова доказал, что можешь превратить простую задачу\n'лечь спать'\nв\nквест на выживание",
        "Твоя способность находить 'важные' дела\nв\n2 ночи достойна Нобелевки\nпо\nсамосаботажу",
        "Не сдавайся! У тебя получится наладить режим.\nМожет быть.\nКогда-нибудь.",
        "Тебе кажется, что ты обманываешь время.\nСпойлер:\nвремя побеждает",
        "Попробуй удивить меня — засни раньше полуночи.\nЯ уже 200 лет таких чудес не видел",
        "Попробуем сегодня лечь\nдо\nполуночи?\nЯ знаю, звучит безумно...",
        "Твой баобаб верит\nв\nтебя! Ну... почти верит.\nИногда.",
        "Браво! Ты мастерски превратил базовую потребность человека\nв\nолимпийский вид спорта\nпо\nсамоистязанию",
        "Твоя суперсила — делать\nиз\n8-часового сна 4-часовую пытку.\nВпечатляюще бесполезно!",
        "Потрясающе! Ты каждую ночь изобретаешь новые способы издеваться\nнад\nединственным человеком,\nкоторый тебе дорог — над собой",
        "Твой мозг: 'Хочу спать'. Ты: 'Нет,\nдавай листать мемы'.\nПризрак логики плачет где-то\nв\nуглу",
        "Великолепно! Ты снова доказал, что можешь быть злейшим врагом самому себе\nбез\nвсяких усилий",
        "Твоя логика: 'Завтра важный день,\nпоэтому лягу\nв\n3 ночи'.\nПремию Дарвина\nв\nстудию!",
        "Поздравляю, ты превратил сон\nиз\nудовольствия\nв\nквест 'найди 4 часа\nмежду\nпрокрастинацией\nи\nбудильником'",
        "Твоя кровать думает, что ты съехал\nс\nквартиры.\nМожет, пора познакомиться заново?",
        "Я выживаю\nв\nпустыне\nбез\nводы лучше,\nчем ты — без нормального сна",
        "Мои корни уходят глубже\nв\nземлю,\nчем твои отговорки —\nв\nреальность",
        "Ты живешь так,\nбудто у тебя запасная жизнь\nв\nшкафу\nна\nслучай,\nесли эту испортишь недосыпом",
        "Твоя стратегия 'проживу\nна\nкофеине' работает примерно\nкак зонтик\nв\nторнадо",
        "Ты копишь усталость\nкак другие финансовую подушку.\nТак себе стратегия",
        "Ты живешь\nкак персонаж экшена — будто каждая ночь может стать последней,\nпоэтому спать нельзя",
        "Ты поступаешь\nс\nрежимом сна\nкак камикадзе — красиво,\nно\nс\nпредсказуемым финалом",
        "Ты относишься\nк\nсвоему здоровью\nкак\nк\nбесконечному ресурсу\nв\nвидеоигре.\nНовость:\nчиты не работают",
        "Твоя жизненная философия: 'Зачем спать сегодня,\nесли можно страдать завтра?'",
        "Ты словно пытаешься доказать вселенной,\nчто человек может эволюционировать\nв\nночное существо.\nЭксперимент провален",
        "Похоже,\nтвоя жизненная миссия — превратить каждое утро\nв\nэкзистенциальный кризис.\nУдачного недосыпа!",
        "Ты коллекционируешь бессонные ночи\nкак философ — ищешь смысл там,\nгде его нет",
        "Твоя стратегия выживания: 'Сон для слабых,\nкофе — для сильных'.\nКрепкая позиция... до первого нервного срыва",
        "Только\nв\nпараллельной реальности,\nгде время течет\nпо-другому,\n2 часа ночи равны 'еще рано'",
        "Твоя душа вечна,\nа\nвот нервная система — нет",
        "Наблюдаю философский парадокс:\nты хочешь жить полной жизнью,\nно\nметодично сливаешь свою энергию",
        "Твое тело — храм.\nЖаль,\nчто ты его используешь\nкак дешевую круглосуточную забегаловку",
        "Говорят,\nчто безвыходных ситуаций не бывает,\nно\nтвой режим сна создает новые проблемы быстрее,\nчем решаются старые",
        "Ты живешь так,\nбудто планируешь стать совой\nв\nследующей жизни",
        "Анонс блокбастера 'завтра начну жить правильно' слышен\nот\nтебя уже который год.\nКогда премьера?",
        "Твоя жизнь\nкак постмодернистское искусство:\nникто не понимает,\nчто происходит,\nно\nкак-то неприятно\nна\nэто смотреть",
        "Твой режим сна — это перформанс\nв\nстиле дадаизма:\nбессмысленно,\nхаотично,\nно\nты называешь это искусством",
        "Ты создаешь авангардную инсталляцию\nпод\nназванием 'Человек против подушки'.\nЗрители\nв\nужасе",
        "Твоя жизнь снова\nкак сюрреалистическая картина:\nвремя течет странно,\nреальность искажена,\nжизненные цели почти растаяли",
        "Поздравляю! Ты мастер абстрактного экспрессионизма\nв\nобласти саморазрушения",
        "Твой график сна — чистый кубизм:\nвсё разломано\nна\nчасти\nи\nсобрано неправильно",
        "Ты практикуешь минимализм\nв\nсне\nи\nмаксимализм\nв\nпрокрастинации.\nПротиворечивая концепция",
        "И снова утро\nв\nстиле импрессионистов:\nразмытые контуры,\nнеясные очертания,\nвсё\nв\nтумане",
        "Абстрактная композиция 'Мой режим дня' — провокационная работа\nо\nсаморазрушении\nчерез\nнедосып.\nКритики\nв\nрастерянности",
        "Твоя концептуальная инсталляция 'Зомби\nна\nработе' получает премию\nза\nреализм",
        "Перед вами автопортрет\nв\nсостоянии хронического недосыпа.\nМасло,\nкофе,\nотчаяние",
        "Серия работ 'Недоспанные будни' — исследование границ человеческой глупости",
        "Инсталляция 'Кровать\nкак декорация' — ироничная работа\nо\nпредметах,\nпотерявших свое назначение",
        "Ты создал неоклассическую трагедию\nв\nтрех актах: 'Не хочу спать', 'Хочу спать', 'Поздно спать'",
        "Ты практикуешь конструктивизм наоборот:\nразрушаешь структуру сна\nдля\nсоздания хаоса"
    ],
    bad: [
        "Доброе утро, зомби! Как спалось?",
        "Удивительно, как ты каждый день удивляешься, что устал",
        "Кофе не поможет. Но можешь попробовать — мне весело смотреть",
        "Посмотри на себя — ты почти справился! Всего-то проспал 3 будильника",
        "Твоя энергия в течение дня достойна кисти абстракциониста: никто не понимает, что это должно означать"
    ],
    good: [
        "Ого! Целых 8 часов сна? Ты случайно не перепутал себя с нормальным человеком?",
        "Невероятно! Твои глаза не похожи на два кратера от метеоритов. Чудеса случаются!",
        "Ты выглядишь почти как человек, который выспался. Почти.",
        "Поздравляю! Ты снова доказал, что можешь спать как нормальный человек. Почти.",
        "Ты сегодня выглядишь почти как человек, а не как зомби. Почти."
    ]
};

const timePhrases = [
    "В это время\nя притворюсь, что ложусь спать",
    "Мой план: уснуть хотя бы к этому часу",
    "Мечтаю заснуть к этому времени",
    "Я обещаю себе лечь спать\nв это время (ха-ха)",
    "Поставить несбыточный дедлайн для сна",
    "Моя очередная попытка лечь пораньше",
    "Буду в кровати... ну, типа",
    "Я укажу время, а организм\nвсё равно проигнорирует",
    "Планирую заснуть к этому времени (но это не точно)",
    "В это время обещаю себе считать овец",
    "Попробую удивить себя и\nлечь спать вовремя",
    "Установить время для вечерних самообманов",
    "Поставить время, когда я должен был бы спать",
    "Установить время для очередного провала сна"
];

let sleepStart = null;
let alarmTime = null;
const generalSound = new Audio('notification.mp3');
const alarmSound = new Audio('alarm.mp3');
let notificationInterval = null;

function getRandomPhrase(type) {
    return phrases[type][Math.floor(Math.random() * phrases[type].length)];
}

function getRandomTimePhrase() {
    return timePhrases[Math.floor(Math.random() * timePhrases.length)];
}

function playSoundRepeatedly(audio, times) {
    let count = 0;
    const playSound = () => {
        if (count < times) {
            audio.currentTime = 0;
            audio.play();
            count++;
            audio.onended = playSound;
        }
    };
    playSound();
}

function updateClock() {
    const now = new Date();
    document.getElementById('currentTime').textContent = 
        now.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' });
    checkAlarm(now);
    checkMidnight(now);
    setTimeout(updateClock, 1000);
}

function requestNotifications() {
    if ('Notification' in window) {
        Notification.requestPermission();
    }
}

function startBackgroundChecks() {
    notificationInterval = setInterval(() => {
        if (Notification.permission === 'granted') {
            new Notification(getRandomPhrase('general'));
            playSoundRepeatedly(generalSound, 3);
        }
    }, 60 * 1000);
    setInterval(checkMidnight, 60 * 60 * 1000);
}

function checkAlarm(now) {
    if (alarmTime && now >= alarmTime) {
        triggerAlarm();
        alarmTime = null;
    }
}

function checkMidnight(now = new Date()) {
    if (now.getHours() === 0 && now.getMinutes() === 0 && !sleepStart) {
        showMidnightNotification();
    }
}

function triggerAlarm() {
    playSoundRepeatedly(alarmSound, 3);
    if (navigator.vibrate) navigator.vibrate([1000, 500, 1000]);
    if (Notification.permission === 'granted') {
        new Notification('Пора вставать!', {
            body: getRandomPhrase('general'),
            icon: 'icon-192.png'
        });
    }
}

function showMidnightNotification() {
    if (Notification.permission === 'granted') {
        new Notification('Полночь!', {
            body: 'Ты ещё не лёг спать! ' + getRandomPhrase('general'),
            icon: 'icon-192.png'
        });
    }
}

// --- POPUP LOGIC ---

const setAlarmBtn = document.getElementById('setAlarm');
const alarmPhrase = document.getElementById('alarmPhrase');
const timePopup = document.getElementById('timePopup');
const popupHours = document.getElementById('popupHours');
const popupMinutes = document.getElementById('popupMinutes');
const popupOkBtn = document.getElementById('popupOkBtn');
const commentDiv = document.getElementById('comment');
const wakeBtn = document.getElementById('wakeBtn');
const sleepBtn = document.getElementById('sleepBtn');
const sleepStatus = document.getElementById('sleepStatus');

function fillTimeSelects() {
    popupHours.innerHTML = '';
    popupMinutes.innerHTML = '';
    for (let h = 0; h < 24; h++) {
        const opt = document.createElement('option');
        opt.value = h;
        opt.textContent = h.toString().padStart(2, '0');
        popupHours.appendChild(opt);
    }
    for (let m = 0; m < 60; m += 5) {
        const opt = document.createElement('option');
        opt.value = m;
        opt.textContent = m.toString().padStart(2, '0');
        popupMinutes.appendChild(opt);
    }
}
fillTimeSelects();

setAlarmBtn.addEventListener('click', () => {
    timePopup.style.display = 'flex';
});

popupOkBtn.addEventListener('click', () => {
    const hours = popupHours.value.padStart(2, '0');
    const minutes = popupMinutes.value.padStart(2, '0');
    const now = new Date();
    alarmTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hours, minutes);
    timePopup.style.display = 'none';
    alarmPhrase.textContent = `Дедлайн сна: ${hours}:${minutes}`;
});

window.addEventListener('click', (event) => {
    if (event.target === timePopup) {
        timePopup.style.display = 'none';
    }
});

wakeBtn.addEventListener('click', () => {
    if (!sleepStart) return;
    const sleepDurationMs = new Date() - sleepStart;
    const sleepDurationHours = sleepDurationMs / 3600000;
    sleepStatus.textContent = 'Не сплю';
    sleepStatus.classList.remove('spit');
    sleepStatus.classList.add('nespit');
    playSoundRepeatedly(alarmSound, 3);
    if (navigator.vibrate) navigator.vibrate([500, 200, 500]);
    sleepStart = null;

    // Показываем отчёт внутри кнопки
    wakeBtn.textContent = `Сон: ${sleepDurationHours.toFixed(2)} ч`;
    wakeBtn.classList.add('awake');
});

sleepBtn.addEventListener('click', () => {
    sleepStart = new Date();
    sleepStatus.textContent = 'Сплю';
    sleepStatus.classList.remove('nespit');
    sleepStatus.classList.add('spit');
    commentDiv.textContent = getRandomPhrase('general');
    // Кнопка снова становится активной
    wakeBtn.textContent = 'Я проснулся!';
    wakeBtn.classList.remove('awake');
    // Вернуть случайную короткую фразу для розовой кнопки
    alarmPhrase.textContent = getRandomTimePhrase();
});

function initApp() {
    updateClock();
    requestNotifications();
    commentDiv.textContent = getRandomPhrase('general');
    startBackgroundChecks();
    alarmPhrase.textContent = getRandomTimePhrase();
}

document.addEventListener('DOMContentLoaded', initApp);

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js')
        .then(reg => console.log('Service Worker зарегистрирован'))
        .catch(err => console.error('Ошибка регистрации SW:', err));
}
