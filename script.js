const targets = document.querySelectorAll('.section, .skills-band, .project-card, .highlight-card');
targets.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

targets.forEach(el => observer.observe(el));
