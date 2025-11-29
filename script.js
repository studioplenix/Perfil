// script.js
// Interactividad ligera: animaciones de microinteracción y botón "Ask MineMax"

document.addEventListener('DOMContentLoaded', () => {
  const voiceBtn = document.getElementById('voiceBtn');

  // efecto pulsante sutil
  setInterval(() => {
    document.documentElement.style.setProperty('--pulse', `${0.98 + Math.random()*0.04}`);
  }, 2500);

  // botón Ask: muestra un modal simulado (no usa librerías)
  voiceBtn && voiceBtn.addEventListener('click', (e) => {
    e.preventDefault();
    showMiniModal('MineMax está escuchando...', 'Prueba de respuesta AI: En la demo, MineMax respondería con optimizaciones y métricas en tiempo real.');
  });

  // modal helper
  function showMiniModal(title, text){
    if(document.querySelector('.mini-modal')) return;
    const modal = document.createElement('div');
    modal.className = 'mini-modal';
    modal.innerHTML = `
      <div class="mini-modal-card">
        <strong>${title}</strong>
        <p>${text}</p>
        <div><button id="modalClose" class="btn-ghost">Cerrar</button></div>
      </div>
    `;
    document.body.appendChild(modal);
    document.getElementById('modalClose').focus();
    document.getElementById('modalClose').addEventListener('click', () => modal.remove());
    modal.addEventListener('click', (ev) => { if(ev.target === modal) modal.remove(); });
  }
});
