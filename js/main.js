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
      span.style.animationDelay = `${0.45 + index * 0.03}s`;
      titleEl.appendChild(span);
    });
  }

  // 3. Efeito de Digitação Progressiva no Subtítulo (Typewriter)
  const typewriterEl = document.getElementById('hero-typewriter');
  if (typewriterEl) {
    const fullText = typewriterEl.getAttribute('data-text') || '';
    const cursorSpan = document.createElement('span');
    cursorSpan.className = 'typing-cursor';
    typewriterEl.appendChild(cursorSpan);

    let charIdx = 0;
    setTimeout(() => {
      const typeInterval = setInterval(() => {
        if (charIdx < fullText.length) {
          typewriterEl.insertBefore(document.createTextNode(fullText.charAt(charIdx)), cursorSpan);
          charIdx++;
        } else {
          clearInterval(typeInterval);
        }
      }, 24);
    }, 1100);
  }

  // 4. Animação Palavra por Palavra nos Títulos das Seções (H2)
  document.querySelectorAll('.section-header h2').forEach((h2) => {
    const numSpan = h2.querySelector('.sec-num');
    const rawText = h2.textContent.replace(numSpan ? numSpan.textContent : '', '').trim();
    h2.innerHTML = '';
    if (numSpan) h2.appendChild(numSpan);

    rawText.split(' ').forEach((word, idx) => {
      const wSpan = document.createElement('span');
      wSpan.textContent = word;
      wSpan.className = 'word-reveal';
      wSpan.style.transitionDelay = `${idx * 0.12}s`;
      wSpan.style.marginLeft = '0.35rem';
      h2.appendChild(wSpan);
    });
  });

  // 5. Botão de Copiar E-mail na Convocação
  const copyBtn = document.getElementById('copy-email-btn');
  const emailText = document.getElementById('my-email-text');
  if (copyBtn && emailText) {
    copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(emailText.textContent.trim()).then(() => {
        const original = copyBtn.textContent;
        copyBtn.textContent = 'Copiado! ✓';
        setTimeout(() => {
          copyBtn.textContent = original;
        }, 2200);
      });
    });
  }

  // 6. Cursor Personalizado (Desktop)
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

    document.addEventListener('mouseover', (e) => {
      if (e.target.closest('a, button, input, textarea, .project-card, .skill-category')) {
        ring.classList.add('active');
      } else {
        ring.classList.remove('active');
      }
    });
  }

  // 7. Efeito Spotlight nos Cards
  document.addEventListener('mousemove', (e) => {
    const cards = document.querySelectorAll('.card, .skill-category, .project-card');
    cards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
      card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
    });
  });

  // 8. Scroll Reveal
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