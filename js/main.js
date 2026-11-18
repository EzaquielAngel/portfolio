// --- DADOS DOS PROJETOS (GRIMÓRIO / CONQUISTAS) ---
const projects = [
  {
    title: "European Nights - Ultimate Career Edition",
    category: "Simulador de Partidas • Full-Stack • MySQL",
    problem: "Gargalo na simulação lógica em tempo real e persistência de dados de plantéis europeus.",
    description: "Simulador avançado de partidas de futebol com gestão tática, simulação ao vivo (90'+VAR+Subs), seleção de clubes europeus e persistência em MySQL.",
    techs: ["JavaScript", "Node.js", "MySQL", "HTML5", "CSS3", "Engine Tática"],
    link: "projeto-futebol.html"
  },
  {
    title: "Sistema de Controle de Estoque para Restaurante (Cozinha Japonesa)",
    category: "Full-Stack • Banco de Dados • Node.js",
    problem: "Alto índice de desperdício de insumos nobres e desatualização de inventário durante o expediente.",
    description: "Desenvolvido do zero para resolver gargalos operacionais em gastronomia, integrando fichas técnicas e controle transacional de insumos.",
    techs: ["Node.js", "Express", "MySQL", "JavaScript", "HTML5", "CSS3"],
    link: "projeto-cozinha.html"
  },
  {
    title: "Jogo 2D Interativo (Metroid)",
    category: "Lógica Avançada • Game Dev • GameMaker",
    problem: "Necessidade de estruturar física vetorial estável, tratamento de gravidade e máquina de estados sem travamentos.",
    description: "Framework de plataforma 2D com máquina de estados finitos, tratamento de gravidade por frame e gestão síncrona de HUD.",
    techs: ["GameMaker Language (GML)", "Lógica de Programação", "Física 2D"],
    link: "projeto-metroide.html"
  }
];

// --- BIBLIOTECA DE CONHECIMENTO (INTEGRADA COM OS PROJETOS E ESTUDOS) ---
const knowledgeLibrary = [
  {
    id: "javascript",
    name: "JavaScript (ES6+)",
    category: "Domínio Prático",
    icon: "⚡",
    learned: "Manipulação avançada do DOM, assincronismo (Promises, Async/Await), consumo de APIs REST e criação de interfaces responsivas.",
    appliedIn: "Desenvolvimento de motores de simulação, lógica de front-end e interatividade tática.",
    project: "European Nights & Sistema de Cozinha",
    origin: "Aplicado diretamente em projetos Full-Stack reais."
  },
  {
    id: "nodejs",
    name: "Node.js & Express",
    category: "Domínio Prático",
    icon: "🛠️",
    learned: "Construção de servidores web, roteamento modular, manipulação de requisições HTTP e conexão persistente com bases de dados.",
    appliedIn: "Arquitetura back-end para gerenciamento de estoque e simulações de partidas.",
    project: "Sistema de Controle de Estoque & European Nights",
    origin: "Aplicado diretamente em projetos Full-Stack reais."
  },
  {
    id: "mysql",
    name: "MySQL & SQL",
    category: "Domínio Prático",
    icon: "🗄️",
    learned: "Modelagem relacional conceitual e lógica (DER/MER), normalização de tabelas, chaves estrangeiras e queries complexas DDL/DML.",
    appliedIn: "Estruturação de dados relacionais para cozinhas profissionais e ligas de futebol.",
    project: "Sistema de Controle de Estoque para Restaurante",
    origin: "Aplicado diretamente em projetos Full-Stack reais."
  },
  {
    id: "gamemaker",
    name: "GameMaker & GML",
    category: "Domínio Prático",
    icon: "🎮",
    learned: "Máquina de estados finitos (FSM), tratamento de física vetorial por frame, gestão de colisões e sincronização síncrona de HUD.",
    appliedIn: "Desenvolvimento de mecânicas de plataforma 2D e controle de inputs em tempo real.",
    project: "Jogo 2D Interativo (Metroid)",
    origin: "Aplicado em projeto de desenvolvimento de jogos."
  },
  {
    id: "htmlcss",
    name: "HTML5 & CSS3",
    category: "Domínio Prático",
    icon: "🎨",
    learned: "Semântica web avançada, Flexbox, Grid Layout, variáveis CSS customizadas e design responsivo (Mobile First).",
    appliedIn: "Estilização de interfaces temáticas, painéis de controle e estruturação de layouts.",
    project: "Todo o ecossistema do Portfólio e Aplicações Web",
    origin: "Aplicado diretamente em projetos Full-Stack reais."
  },
  {
    id: "python",
    name: "Python & Lógica",
    category: "Em Aprofundamento (Curso Online)",
    icon: "🐍",
    learned: "Sintaxe limpa, estruturas condicionais e de repetição, manipulação de listas/dicionários e automação de scripts.",
    appliedIn: "Resolução de desafios lógicos e complementação da base acadêmica em Engenharia da Computação.",
    project: "Estudos práticos via curso online especializado",
    origin: "Em desenvolvimento ativo por meio de capacitação online."
  },
  {
    id: "c-lang",
    name: "Linguagem C",
    category: "Em Aprofundamento (Faculdade)",
    icon: "⚙️",
    learned: "Fundamentos de programação de baixo nível, ponteiros, alocação dinâmica de memória e estruturação de dados.",
    appliedIn: "Desenvolvimento de algoritmos estruturados e base lógica na Uningá.",
    project: "Laboratórios acadêmicos de Engenharia",
    origin: "Matriz curricular de Engenharia da Computação."
  },
  {
    id: "gitgithub",
    name: "Git & GitHub",
    category: "Domínio Prático",
    icon: "🌿",
    learned: "Controle de versão distribuído, criação de branches, commits semânticos, resolução de conflitos e deploy contínuo (GitHub Pages).",
    appliedIn: "Versionamento de todo o código-fonte e publicação de projetos na web.",
    project: "Repositórios Oficiais do Portfólio",
    origin: "Utilizado diariamente no fluxo de desenvolvimento."
  }
];

// --- RENDERIZAÇÃO DOS PROJETOS NO DOM ---
function renderProjects() {
  const container = document.getElementById("projects-container");
  if (!container) return;

  container.innerHTML = projects.map(proj => `
    <div class="project-card" data-link="${proj.link}">
      <div class="project-header-row">
        <span class="project-cat">${proj.category}</span>
      </div>
      <h3>${proj.title}</h3>
      <div class="project-problem-box">
        <span class="problem-label">🎯 Desafio Resolvido:</span>
        <p>${proj.problem}</p>
      </div>
      <p class="project-desc">${proj.description}</p>
      <div class="tech-list">
        ${proj.techs.map(tech => `<span class="tech-badge">${tech}</span>`).join("")}
      </div>
      <div class="project-footer">
        <span class="link-detail">Analisar Engenharia & Arquitetura ↗</span>
      </div>
    </div>
  `).join("");

  container.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
      const link = card.getAttribute('data-link');
      if (link) window.location.href = link;
    });
  });
}

// --- RENDERIZAÇÃO DA BIBLIOTECA DE CONHECIMENTO ---
function renderLibrary() {
  const grid = document.getElementById("library-grid");
  if (!grid) return;

  grid.innerHTML = knowledgeLibrary.map(item => {
    let tagClass = 'tag-learning';
    if (item.category === 'Domínio Prático') tagClass = 'tag-active';
    if (item.category.includes('Curso Online') || item.category.includes('Faculdade')) tagClass = 'tag-course';

    return `
      <div class="library-book" data-book-id="${item.id}">
        <div class="book-cover">
          <span class="book-icon">${item.icon}</span>
          <span class="book-cat-tag ${tagClass}">${item.category}</span>
        </div>
        <div class="book-info">
          <h3>${item.name}</h3>
          <p class="book-hint">Clique para abrir o registro técnico 📖</p>
        </div>
      </div>
    `;
  }).join("");

  grid.querySelectorAll('.library-book').forEach(bookEl => {
    bookEl.addEventListener('click', () => {
      const bookId = bookEl.getAttribute('data-book-id');
      openBookModal(bookId);
    });
  });
}

// --- MODAL DO LIVRO TÉCNICO ---
function openBookModal(id) {
  const book = knowledgeLibrary.find(b => b.id === id);
  if (!book) return;

  const existingModal = document.getElementById('book-modal-overlay');
  if (existingModal) existingModal.remove();

  let tagClass = 'tag-learning';
  if (book.category === 'Domínio Prático') tagClass = 'tag-active';
  if (book.category.includes('Curso Online') || book.category.includes('Faculdade')) tagClass = 'tag-course';

  const modalOverlay = document.createElement('div');
  modalOverlay.id = 'book-modal-overlay';
  modalOverlay.className = 'book-modal-overlay';
  modalOverlay.innerHTML = `
    <div class="book-modal-card">
      <button type="button" class="modal-close-btn" id="close-book-modal-btn">✕</button>
      <div class="modal-header">
        <span class="book-icon-large">${book.icon}</span>
        <div>
          <span class="book-cat-tag ${tagClass}">${book.category}</span>
          <h2>${book.name}</h2>
        </div>
      </div>
      
      <div class="modal-body-scroll">
        <div class="modal-section">
          <h4>📌 O que aprendi / Competência:</h4>
          <p>${book.learned}</p>
        </div>
        <div class="modal-section">
          <h4>⚙️ Contexto de Aplicação:</h4>
          <p>${book.appliedIn}</p>
        </div>
        <div class="modal-section">
          <h4>🏆 Evidência / Projeto Associado:</h4>
          <p style="color: var(--accent-gold); font-weight: 600;">${book.project}</p>
        </div>
        <div class="modal-section">
          <h4>🚀 Origem do Conhecimento:</h4>
          <p>${book.origin}</p>
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(modalOverlay);

  const closeBtn = document.getElementById('close-book-modal-btn');
  if (closeBtn) {
    closeBtn.addEventListener('click', closeBookModal);
  }

  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeBookModal();
  });

  requestAnimationFrame(() => {
    modalOverlay.classList.add('active');
  });
}

function closeBookModal() {
  const modal = document.getElementById('book-modal-overlay');
  if (modal) {
    modal.classList.remove('active');
    setTimeout(() => modal.remove(), 300);
  }
}

// --- EFEITOS VISUAIS E INTERATIVIDADE CAVALIERE ---
document.addEventListener('DOMContentLoaded', () => {
  renderProjects();
  renderLibrary();

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeBookModal();
  });

  const gateOverlay = document.getElementById('gate-overlay');
  if (gateOverlay) {
    setTimeout(() => {
      gateOverlay.classList.add('open');
    }, 350);
  }

  const typewriterDesc = document.getElementById('hero-typewriter-desc');
  if (typewriterDesc) {
    const textToType = typewriterDesc.getAttribute('data-text') || typewriterDesc.textContent.trim();
    typewriterDesc.textContent = '';

    const cursor = document.createElement('span');
    cursor.className = 'typing-cursor-gold';
    typewriterDesc.appendChild(cursor);

    let charIndex = 0;
    setTimeout(() => {
      const typingInterval = setInterval(() => {
        if (charIndex < textToType.length) {
          typewriterDesc.insertBefore(document.createTextNode(textToType.charAt(charIndex)), cursor);
          charIndex++;
        } else {
          clearInterval(typingInterval);
          setTimeout(() => cursor.remove(), 1200);
        }
      }, 18);
    }, 500);
  }

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

  const cursorRing = document.querySelector('.cursor-ring');
  if (cursorRing && window.matchMedia('(pointer: fine)').matches) {
    let mouseX = 0;
    let mouseY = 0;
    let animationFrameId = null;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!animationFrameId) {
        animationFrameId = requestAnimationFrame(() => {
          cursorRing.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
          animationFrameId = null;
        });
      }
    }, { passive: true });

    document.addEventListener('mouseover', (e) => {
      if (e.target.closest('a, button, input, textarea, .project-card, .library-book, .modal-close-btn')) {
        cursorRing.classList.add('active');
      } else {
        cursorRing.classList.remove('active');
      }
    });
  }

  document.addEventListener('mousemove', (e) => {
    const cards = document.querySelectorAll('.card, .library-book, .project-card');
    cards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
      card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
    });
  }, { passive: true });

  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.12 });

  reveals.forEach((el) => observer.observe(el));

  const paragraphElements = document.querySelectorAll('.paragraph-reveal');
  if (paragraphElements.length > 0) {
    const observerOptions = { root: null, threshold: 0.15 };
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
});