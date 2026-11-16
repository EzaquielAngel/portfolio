// --- DADOS DOS PROJETOS (GRIMÓRIO / CONQUISTAS) ---
const projects = [
  {
    title: "Sistema de Controle de Estoque para Restaurante (Cozinha Japonesa)",
    category: "Full-Stack • Banco de Dados • Node.js",
    description: "Desenvolvido do zero para resolver gargalos operacionais em gastronomia, integrando fichas técnicas e controle transacional de insumos.",
    techs: ["Node.js", "Express", "MySQL", "JavaScript", "HTML5", "CSS3"],
    link: "projeto-cozinha.html"
  },
  {
    title: "Jogo 2D Interativo (Metroid)",
    category: "Lógica Avançada • Game Dev • GameMaker",
    description: "Framework de plataforma 2D com máquina de estados finitos, tratamento de gravidade por frame e gestão síncrona de HUD.",
    techs: ["GameMaker Language (GML)", "Lógica de Programação", "Física 2D"],
    link: "projeto-metroide.html"
  }
];

// --- RENDERIZAÇÃO DOS PROJETOS NO DOM (DESIGN PROFISSIONAL) ---
function renderProjects() {
  const container = document.getElementById("projects-container");
  if (!container) return;

  container.innerHTML = projects.map(proj => `
    <div class="project-card" onclick="window.location.href='${proj.link}'">
      <div class="project-header-row">
        <span class="project-cat">${proj.category}</span>
      </div>
      <h3>${proj.title}</h3>
      <p>${proj.description}</p>
      <div class="tech-list">
        ${proj.techs.map(tech => `<span class="tech-badge">${tech}</span>`).join("")}
      </div>
      <div class="project-footer">
        <span class="link-detail">Analisar Arquitetura & Detalhes ↗</span>
      </div>
    </div>
  `).join("");
}

// --- EFEITOS VISUAIS E INTERATIVIDADE CAVALIERE ---
document.addEventListener('DOMContentLoaded', () => {
  // 1. Renderiza os projetos dinamicamente
  renderProjects();

  // 2. Abertura do Estandarte de Entrada
  const gateOverlay = document.getElementById('gate-overlay');
  if (gateOverlay) {
    setTimeout(() => {
      gateOverlay.classList.add('open');
    }, 350);
  }

  // Revelação suave e elegante da descrição da Hero Section
  const heroDesc = document.getElementById('hero-fade-desc');
  if (heroDesc) {
    window.addEventListener('load', () => {
      setTimeout(() => {
        heroDesc.classList.add('active');
      }, 250);
    });
  }

  // 4. Efeito de Digitação Progressiva no Subtítulo (Typewriter)
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
      }, 22);
    }, 1000);
  }

  // 5. Animação Letra por Letra Charmosa nos Títulos Principais das Seções
  document.querySelectorAll('.char-title-anim').forEach((el) => {
    const text = el.textContent.trim();
    el.textContent = '';
    [...text].forEach((char, index) => {
      const span = document.createElement('span');
      span.textContent = char === ' ' ? '\u00A0' : char;
      span.classList.add('char-animate');
      span.style.animationDelay = `${0.1 + index * 0.025}s`;
      el.appendChild(span);
    });
  });

  // 6. Botão de Copiar E-mail na Convocação
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

  // 7. Cursor Personalizado (Desktop)
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

  // 8. Efeito Spotlight nos Cards
  document.addEventListener('mousemove', (e) => {
    const cards = document.querySelectorAll('.card, .skill-category, .project-card');
    cards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
      card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
    });
  });

  // 9. Scroll Reveal (Aparecer suave ao rolar a página)
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

// Efeito de Digitação Progressiva na Descrição do Cavaleiro (Hero)
  const typewriterDesc = document.getElementById('hero-typewriter-desc');
  if (typewriterDesc) {
    const textToType = typewriterDesc.getAttribute('data-text') || '';
    typewriterDesc.textContent = ''; // Limpa o conteúdo inicial
    
    // Cria um cursor de escrita temático
    const cursor = document.createElement('span');
    cursor.className = 'typing-cursor-gold';
    typewriterDesc.appendChild(cursor);

    let charIndex = 0;
    window.addEventListener('load', () => {
      setTimeout(() => {
        const typingInterval = setInterval(() => {
          if (charIndex < textToType.length) {
            // Insere a letra antes do cursor
            typewriterDesc.insertBefore(document.createTextNode(textToType.charAt(charIndex)), cursor);
            charIndex++;
          } else {
            clearInterval(typingInterval);
            // Remove o cursor após terminar de escrever
            setTimeout(() => cursor.remove(), 1200);
          }
        }, 18); // Velocidade da digitação (quanto menor, mais rápido)
      }, 500); // Atraso inicial para iniciar a escrita
    });
  }
  
  // Revelação fluida e sequencial dos parágrafos da biografia
  const paragraphElements = document.querySelectorAll('.paragraph-reveal');
  if (paragraphElements.length > 0) {
    const observerOptions = {
      root: null,
      threshold: 0.15
    };

    const paragraphObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    paragraphElements.forEach(el => {
      paragraphObserver.observe(el);
    });
  }