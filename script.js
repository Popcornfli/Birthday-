const targetDate = new Date("2026-08-08T00:00:00");

const boxes = document.querySelectorAll(".box");

function updateCountdown() {

    const now = new Date();

    const difference = targetDate - now;

    if (difference <= 0) {

        boxes[0].textContent = "00";
        boxes[1].textContent = "00";
        boxes[2].textContent = "00";
        boxes[3].textContent = "00";

        return;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));

    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    boxes[0].textContent = String(days).padStart(2,"0");
    boxes[1].textContent = String(hours).padStart(2,"0");
    boxes[2].textContent = String(minutes).padStart(2,"0");
    boxes[3].textContent = String(seconds).padStart(2,"0");

}

updateCountdown();

setInterval(updateCountdown,1000);
