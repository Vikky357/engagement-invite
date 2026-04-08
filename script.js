// Scroll button
function scrollToSection() {
  window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
}

// Fade animation
const faders = document.querySelectorAll(".fade");

window.addEventListener("scroll", () => {
  faders.forEach(el => {
    const rect = el.getBoundingClientRect().top;
    if (rect < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
});

// Countdown
const eventDate = new Date("June 10, 2026 18:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const gap = eventDate - now;

  const d = Math.floor(gap / (1000 * 60 * 60 * 24));
  const h = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const m = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));

  document.getElementById("timer").innerText =
    `${d} Days ${h} Hours ${m} Minutes`;
}, 1000);
