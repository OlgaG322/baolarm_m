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

document.addEventListener('DOMContentLoaded', () => {
    initClock();
    initButtons();
    requestNotifications();
    setInterval(sendTestPush, 5 * 60 * 1000); // Пуш каждые 5 минут
});

function initClock() {
    setInterval(() => {
        document.getElementById('currentTime').textContent = 
            new Date().toLocaleTimeString('ru-RU', {hour: '2-digit', minute:'2-digit'});
    }, 1000);
}

function initButtons() {
    // Инициализация попапа
    const hoursSelect = document.getElementById('popupHours');
    const minutesSelect = document.getElementById('popupMinutes');
    for(let h=0; h<24; h++) {
        hoursSelect.innerHTML += `<option value="${h}">${h.toString().padStart(2,'0')}</option>`;
    }
    for(let m=0; m<60; m+=5) {
        minutesSelect.innerHTML += `<option value="${m}">${m.toString().padStart(2,'0')}</option>`;
    }

    document.getElementById('setAlarm').addEventListener('click', () => {
        document.getElementById('timePopup').style.display = 'flex';
    });

    document.getElementById('popupOkBtn').addEventListener('click', () => {
        const hours = hoursSelect.value.padStart(2,'0');
        const minutes = minutesSelect.value.padStart(2,'0');
        alarmTime = `${hours}:${minutes}`;
        document.getElementById('alarmPhrase').textContent = `Дедлайн: ${alarmTime}`;
        document.getElementById('alarmPhrase').style.textAlign = 'center';
        document.getElementById('timePopup').style.display = 'none';
        resetWakeButton();
        playSound(generalSound);
        sendPush('Время установлено!', `Вы поставили цель лечь в ${alarmTime}`);
    });

    document.getElementById('sleepBtn').addEventListener('click', () => {
        if(!alarmTime) return;
        sleepStart = new Date();
        const phrase = sarcasticButtonLabels[Math.floor(Math.random() * sarcasticButtonLabels.length)];
        document.getElementById('alarmPhrase').textContent = phrase;
        document.getElementById('alarmPhrase').style.textAlign = 'center';
        document.getElementById('sleepStatus').textContent = 'Спит';
    });

    document.getElementById('wakeBtn').addEventListener('click', () => {
        if(!sleepStart) return;
        const sleepDuration = new Date() - sleepStart;
        const hours = Math.floor(sleepDuration / 3600000);
        const minutes = Math.floor((sleepDuration % 3600000) / 60000);
        const btn = document.getElementById('wakeBtn');
        btn.textContent = `Спал: ${hours}ч ${minutes}м`;
        btn.classList.add('awake');
        btn.style.background = "var(--secondary-color)";
        btn.style.color = "#fff";
        btn.style.border = "none";
        btn.style.cursor = "default";
        btn.style.pointerEvents = "none";
        btn.onmouseenter = function() { btn.style.background = "#1a2c54"; };
        btn.onmouseleave = function() { btn.style.background = "var(--secondary-color)"; };
        sleepStart = null;
        playSound(alarmSound);
        sendPush('Проснулся!', `Ты спал ${hours}ч ${minutes}м`);
        // Комментарий внизу
        const commentType = (hours + minutes/60) >= 7 ? 'good' : 'bad';
        document.getElementById('comment').textContent = getRandomPhrase(commentType);
        document.getElementById('sleepStatus').textContent = 'Не спит';
    });
}

function resetWakeButton() {
    const btn = document.getElementById('wakeBtn');
    btn.textContent = 'Я проснулся!';
    btn.classList.remove('awake');
    btn.style.background = "var(--secondary-color)";
    btn.style.color = "#fff";
    btn.style.border = "none";
    btn.style.cursor = "pointer";
    btn.style.pointerEvents = "auto";
    btn.onmouseenter = function() { btn.style.background = "#1a2c54"; };
    btn.onmouseleave = function() { btn.style.background = "var(--secondary-color)"; };
}

function getRandomPhrase(type) {
    return phrases[type][Math.floor(Math.random() * phrases[type].length)];
}

function playSound(audio) {
    try {
        audio.currentTime = 0;
        audio.play();
    } catch(e){}
}

function requestNotifications() {
    if('Notification' in window) {
        Notification.requestPermission();
    }
}

function sendPush(title, body) {
    if('Notification' in window && Notification.permission === 'granted') {
        new Notification(title, { body, icon: 'icon-512.png' });
    }
}

// Тестовый push каждые 5 минут
function sendTestPush() {
    sendPush('Тестовый push', 'Это тестовое уведомление от Баоларма');
}
