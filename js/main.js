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