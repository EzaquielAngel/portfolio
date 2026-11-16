import { portfolioData } from './projects-data.js';

document.addEventListener('DOMContentLoaded', () => {
  // Abertura automática e fluida dos Portões do Inferno
  const gateOverlay = document.getElementById('gate-overlay');
  if (gateOverlay) {
    setTimeout(() => {
      gateOverlay.classList.add('open');
    }, 200);
  }

  // Renderização dinâmica dos cartões de projetos
  const container = document.getElementById('projects-container');
  if (!container) return;

  portfolioData.projects.forEach(project => {
    const card = document.createElement('article');
    card.className = 'project-card card';
    
    card.innerHTML = `
      <span class="project-cat">${project.category}</span>
      <h3>${project.title}</h3>
      <p>${project.shortDescription}</p>
      <ul class="tech-list">
        ${project.technologies.map(tech => `<li>${tech}</li>`).join('')}
      </ul>
      <span class="link-detail">Acessar Página do Projeto ↗</span>
    `;

    card.addEventListener('click', () => {
      window.location.href = project.pageUrl;
    });

    container.appendChild(card);
  });
});

// --- EFEITOS VISUAIS E INTERATIVIDADE CAVALIERE ---
document.addEventListener('DOMContentLoaded', () => {
  // 1. Abertura do Estandarte de Entrada
  const gateOverlay = document.getElementById('gate-overlay');
  if (gateOverlay) {
    setTimeout(() => {
      gateOverlay.classList.add('open');
    }, 350);
  }

  // 2. Animação de Letras no Título Principal
  const titleEl = document.getElementById('animated-title');
  if (titleEl) {
    const text = titleEl.textContent.trim();
    titleEl.textContent = '';
    [...text].forEach((char, index) => {
      const span = document.createElement('span');
      span.textContent = char === ' ' ? '\u00A0' : char;
      span.classList.add('char-animate');
      span.style.animationDelay = `${0.5 + index * 0.03}s`;
      titleEl.appendChild(span);
    });
  }

  // 3. Cursor Personalizado (Apenas dispositivos com mouse)
  const dot = document.getElementById('cursor-dot');
  const ring = document.getElementById('cursor-ring');
  if (dot && ring && window.matchMedia('(pointer: fine)').matches) {
    window.addEventListener('mousemove', (e) => {
      dot.style.left = `${e.clientX}px`;
      dot.style.top = `${e.clientY}px`;
      ring.animate({
        left: `${e.clientX}px`,
        top: `${e.clientY}px`
      }, { duration: 180, fill: 'forwards' });
    });

    // Expande o anel ao passar em links, botões e cards
    document.addEventListener('mouseover', (e) => {
      if (e.target.closest('a, button, .project-card, .skill-category')) {
        ring.classList.add('active');
      } else {
        ring.classList.remove('active');
      }
    });
  }

  // 4. Efeito Spotlight (Brilho que acompanha o mouse nos cards)
  document.addEventListener('mousemove', (e) => {
    const cards = document.querySelectorAll('.card, .skill-category, .project-card');
    cards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });

  // 5. Scroll Reveal (Aparição suave das seções)
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.12 });

  reveals.forEach((el) => observer.observe(el));
});