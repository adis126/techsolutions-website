// Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  hamburger.innerHTML = navMenu.classList.contains('active')
    ? '<i class="fas fa-times"></i>'
    : '<i class="fas fa-bars"></i>';
});

// Smooth Scroll
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', e => {
    if (link.hash !== '') {
      e.preventDefault();
      document.querySelector(link.hash).scrollIntoView({ behavior: 'smooth' });
      navMenu.classList.remove('active');
      hamburger.innerHTML = '<i class="fas fa-bars"></i>';
    }
  });
});

// Fade-in on scroll
function checkFade() {
  document.querySelectorAll('.fade-in').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', checkFade);
window.addEventListener('load', checkFade);

// Animated Counters
const counters = document.querySelectorAll('.counter');
let started = false;
function runCounters() {
  if (!started && window.scrollY > document.querySelector('.stats').offsetTop - 500) {
    counters.forEach(counter => {
      const target = +counter.getAttribute('data-target');
      let count = 0;
      const step = Math.ceil(target / 100);
      const update = setInterval(() => {
        count += step;
        if (count >= target) {
          counter.textContent = target;
          clearInterval(update);
        } else {
          counter.textContent = count;
        }
      }, 30);
    });
    started = true;
  }
}
window.addEventListener('scroll', runCounters);

// Contact Form Validation
document.getElementById('contact-form').addEventListener('submit', e => {
  e.preventDefault();
  let valid = true;

  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const message = document.getElementById('message');

  const nameError = document.getElementById('name-error');
  const emailError = document.getElementById('email-error');
  const messageError = document.getElementById('message-error');

  nameError.textContent = '';
  emailError.textContent = '';
  messageError.textContent = '';

  if (name.value.trim() === '') {
    nameError.textContent = 'Name is required';
    valid = false;
  }
  if (!email.value.includes('@')) {
    emailError.textContent = 'Valid email is required';
    valid = false;
  }
  if (message.value.trim() === '') {
    messageError.textContent = 'Message cannot be empty';
    valid = false;
  }

  if (valid) {
    alert('Message sent successfully 🎉');
    document.getElementById('contact-form').reset();
  }
});

// Dark Mode Toggle
const toggle = document.getElementById('mode-toggle');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  toggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});
