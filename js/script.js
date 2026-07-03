// Nav background on scroll
const nav = document.getElementById("nav");
window.addEventListener("scroll", () => {
  nav.classList.toggle("scrolled", window.scrollY > 20);
});

// Reveal on scroll
const revealEls = document.querySelectorAll(".reveal");
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);
revealEls.forEach((el) => revealObserver.observe(el));

// Load each demo only when the visitor asks for it
document.querySelectorAll(".demo-load-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const stage = btn.closest(".demo-stage");
    const frame = stage.querySelector(".demo-frame");
    if (frame && !frame.src) frame.src = frame.dataset.src;
    stage.querySelector(".demo-start").classList.add("hidden");
  });
});

// Spotlight that follows the mouse on cards
document.querySelectorAll(".glow").forEach((el) => {
  el.addEventListener("mousemove", (e) => {
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", e.clientX - r.left + "px");
    el.style.setProperty("--my", e.clientY - r.top + "px");
  });
});

// Fullscreen buttons for the live demos
document.querySelectorAll(".browser-fullscreen").forEach((fsBtn) => {
  fsBtn.addEventListener("click", () => {
    const mock = fsBtn.closest(".browser-mock");
    const frame = mock && mock.querySelector(".demo-frame");
    if (frame && frame.requestFullscreen) {
      frame.requestFullscreen();
    }
  });
});

// Typewriter effect for hero role
const roles = ["Full Stack", "Front-end", "Back-end", "Mobile", "de Jogos"];
const typedEl = document.getElementById("typed");

if (typedEl && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  let roleIndex = 0;
  let charIndex = 0;
  let deleting = false;

  const tick = () => {
    const current = roles[roleIndex];

    if (!deleting) {
      charIndex++;
      typedEl.textContent = current.slice(0, charIndex);
      if (charIndex === current.length) {
        deleting = true;
        setTimeout(tick, 1600);
        return;
      }
    } else {
      charIndex--;
      typedEl.textContent = current.slice(0, charIndex);
      if (charIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
      }
    }

    setTimeout(tick, deleting ? 45 : 85);
  };

  tick();
} else if (typedEl) {
  typedEl.textContent = roles[0];
}
