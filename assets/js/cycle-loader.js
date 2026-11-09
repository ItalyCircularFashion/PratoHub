// Lazy-load del motore ciclo quando l'hero e visibile (CSP-safe, nessun inline).
const canvas = document.querySelector("#cycle-world");
if (canvas) {
  const load = () => { import("./cycle-hero.js"); };
  if ("IntersectionObserver" in window) {
    new IntersectionObserver((entries, obs) => {
      if (entries[0].isIntersecting) { obs.disconnect(); load(); }
    }, { rootMargin: "200px" }).observe(canvas);
  } else { load(); }
}
