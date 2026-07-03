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

// Load the demo only when the visitor asks for it
const demoLoadBtn = document.getElementById("demo-load");
if (demoLoadBtn) {
  demoLoadBtn.addEventListener("click", () => {
    const frame = document.getElementById("demo-iframe");
    if (frame && !frame.src) frame.src = frame.dataset.src;
    document.getElementById("demo-start").classList.add("hidden");
  });
}

// Spotlight that follows the mouse on cards
document.querySelectorAll(".glow").forEach((el) => {
  el.addEventListener("mousemove", (e) => {
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", e.clientX - r.left + "px");
    el.style.setProperty("--my", e.clientY - r.top + "px");
  });
});

// Fullscreen button for the live demo
const fsBtn = document.getElementById("demo-fullscreen");
if (fsBtn) {
  fsBtn.addEventListener("click", () => {
    const frame = document.querySelector(".demo-frame");
    if (frame && frame.requestFullscreen) {
      frame.requestFullscreen();
    }
  });
}

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
