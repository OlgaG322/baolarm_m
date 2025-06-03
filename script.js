const phrases = {
    general: [
        // ... ваши фразы ...
    ],
    bad: [
        // ... ваши фразы ...
    ],
    good: [
        // ... ваши фразы ...
    ]
};

const sarcasticButtonLabels = [
    // ... ваши фразы ...
];

let sleepStart = null;
let alarmTime = null;
const generalSound = new Audio('notification.mp3');
const alarmSound = new Audio('alarm.mp3');

function getRandomPhrase(type) {
    return phrases[type][Math.floor(Math.random() * phrases[type].length)];
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
    setTimeout(updateClock, 1000);
}
function requestNotifications() {
    if ('Notification' in window) {
        Notification.requestPermission();
    }
}
function showRandomGeneralComment() {
    document.getElementById('comment').textContent = getRandomPhrase('general');
}
function setRandomButtonLabel() {
    const phraseSpan = document.getElementById('alarmPhrase');
    phraseSpan.textContent = sarcasticButtonLabels[Math.floor(Math.random() * sarcasticButtonLabels.length)];
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
    alarmTime = `${hours}:${minutes}`;
    timePopup.style.display = 'none';

    alarmPhrase.textContent = `Дедлайн сна: ${hours}:${minutes}`;
    alarmPhrase.style.textAlign = 'center';

    // Сброс "Я проснулся!"
    wakeBtn.textContent = 'Я проснулся!';
    wakeBtn.classList.remove('awake');
    wakeBtn.disabled = false;
    wakeBtn.style.background = "#fff";
    wakeBtn.style.color = "#1e3c72";
    wakeBtn.style.border = "1.5px solid #1e3c72";
    wakeBtn.style.opacity = "1";
    wakeBtn.style.pointerEvents = "auto";
    wakeBtn.style.cursor = "pointer";
    wakeBtn.onmouseenter = null;
    wakeBtn.onmouseleave = null;

    playSoundRepeatedly(generalSound, 1);
    if ('Notification' in window && Notification.permission === 'granted') {
        new Notification('Время установлено!', {
            body: `Вы поставили цель лечь в ${hours}:${minutes}`,
            icon: 'icon-512.png'
        });
    }
});

window.addEventListener('click', (event) => {
    if (event.target === timePopup) {
        timePopup.style.display = 'none';
    }
});

wakeBtn.addEventListener('click', () => {
    if (!sleepStart) return;
    const sleepDurationMs = new Date() - sleepStart;
    const hours = Math.floor(sleepDurationMs / 3600000);
    const minutes = Math.floor((sleepDurationMs % 3600000) / 60000);
    const commentType = sleepDurationMs / 3600000 >= 7 ? 'good' : 'bad';
    commentDiv.textContent = getRandomPhrase(commentType);
    sleepStatus.textContent = 'Не спит';

    // Меняем кнопку: цвет, текст, блокировка
    wakeBtn.textContent = `Спал: ${hours}ч ${minutes}м`;
    wakeBtn.classList.add('awake');
    wakeBtn.disabled = true;
    wakeBtn.style.background = "#2a5298"; // цвет фона (var(--secondary-color))
    wakeBtn.style.color = "#fff";
    wakeBtn.style.border = "none";
    wakeBtn.style.opacity = "1";
    wakeBtn.style.pointerEvents = "none";
    wakeBtn.style.cursor = "default";
    // Темнее при наведении
    wakeBtn.onmouseenter = function() {
        wakeBtn.style.background = "#1e3c72";
    };
    wakeBtn.onmouseleave = function() {
        wakeBtn.style.background = "#2a5298";
    };

    sleepStart = null;

    playSoundRepeatedly(alarmSound, 3);
    if (navigator.vibrate) navigator.vibrate([500, 200, 500]);
    if ('Notification' in window && Notification.permission === 'granted') {
        new Notification('Проснулся!', {
            body: `Ты спал ${hours}ч ${minutes}м`,
            icon: 'icon-512.png'
        });
    }
});

sleepBtn.addEventListener('click', () => {
    sleepStart = new Date();
    sleepStatus.textContent = 'Спит';
    commentDiv.textContent = getRandomPhrase('general');
    // Возвращаем розовой кнопке фразу
    setRandomButtonLabel();
    alarmPhrase.style.textAlign = 'left';
});

function initApp() {
    updateClock();
    requestNotifications();
    showRandomGeneralComment();
    setRandomButtonLabel();
}

document.addEventListener('DOMContentLoaded', initApp);

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js')
        .then(reg => console.log('Service Worker зарегистрирован'))
        .catch(err => console.error('Ошибка регистрации SW:', err));
}
