// Countdown to 8 August 2026 12:00 AM
const targetDate = new Date("2026-08-08T00:00:00").getTime();

// Convert to Unix timestamp (seconds)
const flipdown = new FlipDown(Math.floor(targetDate / 1000));

flipdown
  .start()
  .ifEnded(() => {
    document.querySelector("h1").innerHTML = "HAPPY BIRTHDAY PRI ";
  });
