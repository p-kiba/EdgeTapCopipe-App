(() => {
  const carousel = document.querySelector("[data-carousel]");
  if (!carousel) return;

  const track = carousel.querySelector("[data-hero-track]");
  const slides = Array.from(track.querySelectorAll("[data-slide]"));
  const dots = Array.from(carousel.querySelectorAll("[data-slide-to]"));
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const intervalMs = 3500;
  let current = 0;
  let position = 0;
  let timer;
  let manuallyPaused = reducedMotion.matches;
  let focusWithin = false;

  const loopSlide = slides[0].cloneNode(true);
  loopSlide.removeAttribute("id");
  loopSlide.setAttribute("aria-hidden", "true");
  loopSlide.querySelectorAll("[id]").forEach((element) => element.removeAttribute("id"));
  track.append(loopSlide);
  const allSlides = [...slides, loopSlide];

  function updateSlideCopy() {
    const locale = window.EdgeTapCopipeLocales?.[document.documentElement.lang];
    if (!locale) return;
    allSlides.forEach((slide, index) => {
      const copy = locale.hero.slides[index % slides.length];
      slide.querySelector("[data-hero-title]").textContent = copy.title;
      slide.querySelector("[data-hero-title-emphasis]").textContent = copy.emphasis;
      slide.querySelector("[data-hero-description]").textContent = copy.description;
      slide.querySelector("[data-hero-label]").textContent = copy.label;
      slide.querySelector("img").alt = copy.alt;
      slide.querySelector("h1, h2").classList.toggle("is-compact", index % slides.length === 1 || index % slides.length === 3);
    });
  }

  function setPosition(index, animate = true) {
    if (!animate) track.style.transition = "none";
    track.style.transform = `translateX(-${index * 20}%)`;
    position = index;
    if (!animate) {
      requestAnimationFrame(() => track.style.removeProperty("transition"));
    }
  }

  function showSlide(index) {
    const next = (index + slides.length) % slides.length;
    const wrapsForward = current === slides.length - 1 && next === 0;
    current = next;
    updateSlideCopy();

    slides.forEach((slide, slideIndex) => {
      slide.setAttribute("aria-hidden", String(slideIndex !== current));
    });
    dots.forEach((dot, dotIndex) => {
      const active = dotIndex === current;
      dot.classList.toggle("is-active", active);
      dot.setAttribute("aria-current", String(active));
    });
    if (wrapsForward && !reducedMotion.matches) setPosition(slides.length);
    else setPosition(next, !(wrapsForward && reducedMotion.matches));
  }

  track.addEventListener("transitionend", (event) => {
    if (event.target !== track || position !== slides.length) return;
    setPosition(0, false);
  });

  function stopTimer() {
    window.clearInterval(timer);
    timer = undefined;
  }

  function syncTimer() {
    stopTimer();
    if (manuallyPaused || focusWithin || document.hidden || slides.length < 2) return;
    timer = window.setInterval(() => showSlide(current + 1), intervalMs);
  }

  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      showSlide(Number(dot.dataset.slideTo));
      syncTimer();
    });
  });

  carousel.addEventListener("focusin", () => {
    focusWithin = true;
    syncTimer();
  });
  carousel.addEventListener("focusout", (event) => {
    if (!carousel.contains(event.relatedTarget)) {
      focusWithin = false;
      syncTimer();
    }
  });
  document.addEventListener("visibilitychange", syncTimer);
  window.addEventListener("edgetapcopipe-language-change", updateSlideCopy);
  reducedMotion.addEventListener("change", (event) => {
    if (event.matches) {
      manuallyPaused = true;
      setPosition(current, false);
    } else {
      manuallyPaused = false;
    }
    syncTimer();
  });
  showSlide(0);
  syncTimer();
})();
