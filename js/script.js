/* ========================================
   Sakshi Kulkarni - Portfolio Website
   script.js — Main JavaScript
   ======================================== */

/* ── Page Loader ── */
window.addEventListener('load', () => {
  const loader = document.getElementById('page-loader');
  if (loader) {
    setTimeout(() => loader.classList.add('hidden'), 800);
  }
});

/* ── Dark / Light Mode ── */
const themeToggles = document.querySelectorAll('.theme-toggle');
const savedTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', savedTheme);
updateThemeIcon(savedTheme);

themeToggles.forEach(btn => {
  btn.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    updateThemeIcon(next);
  });
});

function updateThemeIcon(theme) {
  themeToggles.forEach(btn => {
    btn.textContent = theme === 'dark' ? '☀️' : '🌙';
    btn.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
  });
}

/* ── Navbar Scroll Behaviour ── */
const navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  });
}

/* ── Mobile Navigation ── */
const hamburger = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobile-nav');

if (hamburger && mobileNav) {
  hamburger.addEventListener('click', () => {
    const open = mobileNav.classList.toggle('open');
    hamburger.classList.toggle('active', open);
    hamburger.setAttribute('aria-expanded', open);
  });

  // Close on link click
  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      hamburger.classList.remove('active');
    });
  });
}

/* ── Active Nav Link (highlight current page) ── */
(function highlightNav() {
  const current = window.location.pathname.split('/').pop() || 'index.html';
  const allLinks = document.querySelectorAll('.nav-links a, .mobile-nav a');
  allLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === current || (current === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
})();

/* ── Scroll Reveal (Intersection Observer) ── */
const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      // Stagger delay for sibling elements
      const siblings = [...entry.target.parentElement.children].filter(el =>
        el.classList.contains('reveal') || el.classList.contains('reveal-left') || el.classList.contains('reveal-right')
      );
      const idx = siblings.indexOf(entry.target);
      entry.target.style.transitionDelay = `${idx * 80}ms`;
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

revealEls.forEach(el => observer.observe(el));

/* ── Skill Bar Animations ── */
const skillBars = document.querySelectorAll('.skill-bar-fill');

const barObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const fill = entry.target;
      const pct = fill.getAttribute('data-width');
      fill.style.width = pct + '%';
      barObserver.unobserve(fill);
    }
  });
}, { threshold: 0.3 });

skillBars.forEach(bar => barObserver.observe(bar));

/* ── Typed Role Animation (hero) ── */
(function typeRole() {
  const el = document.querySelector('.typed-role');
  if (!el) return;

  const roles = [
    'Frontend Developer',
    'ML Enthusiast',
    'AI Explorer',
    'Problem Solver',
  ];
  let roleIdx = 0, charIdx = 0, deleting = false;

  function type() {
    const role = roles[roleIdx];
    if (!deleting) {
      el.textContent = role.slice(0, charIdx + 1);
      charIdx++;
      if (charIdx === role.length) {
        deleting = true;
        setTimeout(type, 2000);
        return;
      }
    } else {
      el.textContent = role.slice(0, charIdx - 1);
      charIdx--;
      if (charIdx === 0) {
        deleting = false;
        roleIdx = (roleIdx + 1) % roles.length;
      }
    }
    setTimeout(type, deleting ? 60 : 100);
  }
  type();
})();

/* ── Project Filtering ── */
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card[data-category]');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const filter = btn.getAttribute('data-filter');

    // Update active button
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // Show/hide cards
    projectCards.forEach(card => {
      const cats = card.getAttribute('data-category').split(' ');
      const show = filter === 'all' || cats.includes(filter);
      card.setAttribute('data-hidden', !show);
      // Animate visibility
      if (show) {
        card.style.display = '';
        requestAnimationFrame(() => {
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        });
      } else {
        card.style.opacity = '0';
        card.style.transform = 'translateY(16px)';
        setTimeout(() => {
          if (card.getAttribute('data-hidden') === 'true') {
            card.style.display = 'none';
          }
        }, 280);
      }
    });
  });
});

/* ── Contact Form Validation ── */
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let valid = true;

    // Clear errors
    contactForm.querySelectorAll('.form-error').forEach(el => el.classList.remove('show'));
    contactForm.querySelectorAll('.form-control').forEach(el => el.classList.remove('error'));

    // Validate each field
    const fields = {
      name: { minLen: 2, msg: 'Please enter your full name (min 2 characters).' },
      email: { pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, msg: 'Please enter a valid email address.' },
      subject: { minLen: 3, msg: 'Please enter a subject (min 3 characters).' },
      message: { minLen: 15, msg: 'Please enter a message (min 15 characters).' },
    };

    for (const [id, rules] of Object.entries(fields)) {
      const input = document.getElementById(id);
      const errorEl = document.getElementById(`${id}-error`);
      if (!input || !errorEl) continue;

      const val = input.value.trim();
      let fieldValid = true;

      if (rules.minLen && val.length < rules.minLen) fieldValid = false;
      if (rules.pattern && !rules.pattern.test(val)) fieldValid = false;

      if (!fieldValid) {
        input.classList.add('error');
        errorEl.textContent = rules.msg;
        errorEl.classList.add('show');
        valid = false;
      }
    }

    if (valid) {
      // Show success message
      const success = document.getElementById('form-success');
      if (success) success.classList.add('show');
      contactForm.reset();
      setTimeout(() => success && success.classList.remove('show'), 5000);
    }
  });
}

/* ── Scroll to Top Button ── */
const scrollTopBtn = document.getElementById('scroll-top');
if (scrollTopBtn) {
  window.addEventListener('scroll', () => {
    scrollTopBtn.classList.toggle('visible', window.scrollY > 400);
  });

  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ── Smooth scroll for anchor links ── */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
