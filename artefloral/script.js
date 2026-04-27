// Workshop Arte Floral — script.js

document.addEventListener('DOMContentLoaded', () => {

  // ── NAV scroll state ──────────────────────
  const nav = document.getElementById('main-nav');
  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 60);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // ── Mobile menu ───────────────────────────
  const hamburger = document.getElementById('nav-hamburger');
  const overlay   = document.getElementById('mobile-overlay');
  const closeBtn  = document.getElementById('mobile-close');

  const openMenu  = () => { overlay.classList.add('open'); document.body.style.overflow = 'hidden'; };
  const closeMenu = () => { overlay.classList.remove('open'); document.body.style.overflow = ''; };

  hamburger && hamburger.addEventListener('click', openMenu);
  closeBtn  && closeBtn.addEventListener('click', closeMenu);
  overlay   && overlay.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));

  // ── Smooth scroll ─────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = (nav?.offsetHeight || 80) + 16;
        window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - offset, behavior: 'smooth' });
      }
    });
  });

  // ── Scroll animations ────────────────────
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const delay = parseInt(entry.target.dataset.delay || '0', 10);
        setTimeout(() => entry.target.classList.add('visible'), delay);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('[data-ani]').forEach(el => observer.observe(el));

  // ── Carousel ─────────────────────────────
  const carousel = document.getElementById('carousel');
  const prevBtn  = document.getElementById('car-prev');
  const nextBtn  = document.getElementById('car-next');

  if (carousel && prevBtn && nextBtn) {
    const scrollBy = () => carousel.querySelector('.car-card')?.offsetWidth + 20 || 380;
    prevBtn.addEventListener('click', () => carousel.scrollBy({ left: -scrollBy(), behavior: 'smooth' }));
    nextBtn.addEventListener('click', () => carousel.scrollBy({ left:  scrollBy(), behavior: 'smooth' }));
  }

  // ── Floating petals on hero ───────────────
  const hero = document.querySelector('.hero-content');
  if (hero) {
    const chars = ['❀','✿','❁','⚘'];
    for (let i = 0; i < 10; i++) {
      const p = document.createElement('span');
      p.textContent = chars[i % chars.length];
      p.style.cssText = `
        position:absolute;pointer-events:none;
        font-size:${10 + Math.random()*14}px;
        color:rgba(168,18,30,${0.04+Math.random()*0.07});
        left:${Math.random()*100}%;top:${Math.random()*100}%;
        animation:floatPetal ${10+Math.random()*12}s ease-in-out infinite;
        animation-delay:${Math.random()*8}s;
      `;
      hero.parentElement.appendChild(p);
    }
    const sty = document.createElement('style');
    sty.textContent = `
      @keyframes floatPetal {
        0%,100%{transform:translate(0,0) rotate(0deg);opacity:.3}
        33%{transform:translate(18px,-40px) rotate(60deg);opacity:.6}
        66%{transform:translate(-12px,-70px) rotate(120deg);opacity:.4}
      }
    `;
    document.head.appendChild(sty);
  }

});
