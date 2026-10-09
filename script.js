// Pointer-following specular highlight on glass surfaces.
(() => {
  const fine = window.matchMedia("(pointer: fine)").matches;
  if (fine) {
    let frame = 0;
    document.addEventListener("pointermove", (e) => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const el = e.target.closest?.(".glass");
        if (!el) return;
        const r = el.getBoundingClientRect();
        el.style.setProperty("--mx", `${e.clientX - r.left}px`);
        el.style.setProperty("--my", `${e.clientY - r.top}px`);
      });
    }, { passive: true });
  }

  // Mark the nav link for the section in view.
  const links = [...document.querySelectorAll(".nav ul a")];
  const sections = links.map((a) => document.querySelector(a.getAttribute("href"))).filter(Boolean);
  if ("IntersectionObserver" in window && sections.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((a) => a.toggleAttribute("aria-current", a.getAttribute("href") === `#${entry.target.id}`));
        links.forEach((a) => a.hasAttribute("aria-current") && a.setAttribute("aria-current", "true"));
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    sections.forEach((s) => io.observe(s));
  }

  const yr = document.getElementById("yr");
  if (yr) yr.textContent = new Date().getFullYear();
})();
