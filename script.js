const eventDate = new Date("June 10, 2026 18:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const gap = eventDate - now;

  const days = Math.floor(gap / (1000 * 60 * 60 * 24));
  const hours = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));

  document.getElementById("timer").innerText =
    `${days} Days ${hours} Hours ${minutes} Minutes`;
}, 1000);
