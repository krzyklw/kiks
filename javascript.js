function updateTimer() {
    const startDate = new Date(document.getElementById('startDate').textContent);
    const now = new Date();

    let months = 0;
    let days = Math.floor((now - startDate) / (1000 * 60 * 60 * 24));
    
    while (days >= 30) {
        days -= 30;
        months++;
    }

    const hours = Math.floor((now - startDate) / (1000 * 60 * 60)) % 24;
    const minutes = Math.floor((now - startDate) / (1000 * 60)) % 60;
    const seconds = Math.floor((now - startDate) / 1000) % 60;

    document.getElementById('months').innerText = months;
    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;
}

setInterval(updateTimer, 1000);
updateTimer();
