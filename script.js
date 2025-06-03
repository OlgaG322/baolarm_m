const phrases = {
    general: [
        "Конечно, ЭТОТ ролик точно будет последним. Как и предыдущие 47",
        "Да, давай досмотрим сезон. Сон переоценен, а мешки под глазами — это модно",
        "'Высплюсь на выходных' — план человека, который не понимает, как работает организм",
        // ... остальные фразы ...
    ],
    bad: [
        "Доброе утро, зомби! Как спалось целых 4 часа?",
        // ... остальные фразы ...
    ],
    good: [
        "Ого! Целых 8 часов сна? Ты случайно не перепутал себя с нормальным человеком?",
        // ... остальные фразы ...
    ]
};

const sarcasticButtonLabels = [
    "В это время я притворюсь, что ложусь спать",
    // ... остальные фразы ...
];

let sleepStart = null;
let alarmTime = null;
const generalSound = new Audio('notification.mp3');
const alarmSound = new Audio('alarm.mp3');

document.addEventListener('DOMContentLoaded', () => {
    initClock();
    initButtons();
    requestNotifications();
    setInterval(sendTestPush, 5 * 60 * 1000); // Тестовые пуши каждые 5 минут
});

function initClock() {
    setInterval(() => {
        document.getElementById('currentTime').textContent = 
            new Date().toLocaleTimeString('ru-RU', {hour: '2-digit', minute:'2-digit'});
    }, 1000);
}

function initButtons() {
    const popupHours = document.getElementById('popupHours');
    const popupMinutes = document.getElementById('popupMinutes');
    
    // Заполнение селекторов времени
    for (let h = 0; h < 24; h++) {
        popupHours.innerHTML += `<option value="${h}">${h.toString().padStart(2, '0')}</option>`;
    }
    for (let m = 0; m < 60; m += 5) {
        popupMinutes.innerHTML += `<option value="${m}">${m.toString().padStart(2, '0')}</option>`;
    }

    // Обработчики событий
    document.getElementById('setAlarm').addEventListener('click', () => {
        document.getElementById('timePopup').style.display = 'flex';
    });

    document.getElementById('popupOkBtn').addEventListener('click', () => {
        const hours = popupHours.value.padStart(2, '0');
        const minutes = popupMinutes.value.padStart(2, '0');
        alarmTime = `${hours}:${minutes}`;
        document.getElementById('alarmPhrase').textContent = `Дедлайн: ${alarmTime}`;
        document.getElementById('timePopup').style.display = 'none';
        resetWakeButton();
        playSound(generalSound);
        sendPush('Время установлено!', `Вы поставили цель лечь в ${alarmTime}`);
    });

    document.getElementById('sleepBtn').addEventListener('click', () => {
        if (!alarmTime) return;
        sleepStart = new Date();
        document.getElementById('alarmPhrase').textContent = 
            sarcasticButtonLabels[Math.floor(Math.random() * sarcasticButtonLabels.length)];
        document.getElementById('sleepStatus').textContent = 'Спит';
        document.getElementById('comment').textContent = getRandomPhrase('general'); // Фраза в плашке
    });

    document.getElementById('wakeBtn').addEventListener('click', () => {
        if (!sleepStart) return;
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
        sleepStart = null;
        playSound(alarmSound);
        sendPush('Проснулся!', `Ты спал ${hours}ч ${minutes}м`);
    });

    // Закрытие попапа при клике вне его
    window.addEventListener('click', (event) => {
        if (event.target === document.getElementById('timePopup')) {
            document.getElementById('timePopup').style.display = 'none';
        }
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
}

function getRandomPhrase(type) {
    return phrases[type][Math.floor(Math.random() * phrases[type].length)];
}

function playSound(audio) {
    try {
        audio.currentTime = 0;
        audio.play();
    } catch(e) {}
}

function requestNotifications() {
    if ('Notification' in window) {
        Notification.requestPermission();
    }
}

function sendPush(title, body) {
    if ('Notification' in window && Notification.permission === 'granted') {
        new Notification(title, { body, icon: 'icon-512.png' });
    }
}

function sendTestPush() {
    sendPush('Тестовый push', 'Это тестовое уведомление от Баоларма');
}
