// Menu déroulant mobile
(function () {
  var bouton = document.querySelector('.burger');
  var nav = document.querySelector('.entete nav');
  if (!bouton || !nav) return;

  function basculer(ouvrir) {
    nav.classList.toggle('ouvert', ouvrir);
    bouton.classList.toggle('ouvert', ouvrir);
    bouton.setAttribute('aria-expanded', ouvrir ? 'true' : 'false');
    bouton.setAttribute('aria-label', ouvrir ? 'Fermer le menu' : 'Ouvrir le menu');
  }

  bouton.addEventListener('click', function () {
    basculer(!nav.classList.contains('ouvert'));
  });
  nav.addEventListener('click', function (e) {
    if (e.target.closest('a')) basculer(false);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') basculer(false);
  });
  window.addEventListener('resize', function () {
    if (window.innerWidth > 1000) basculer(false);
  });
})();

// Bouton son de la vidéo d'accueil
(function () {
  var son = document.querySelector('.bouton-son');
  var video = document.querySelector('.video-fond video');
  if (!son || !video) return;
  son.addEventListener('click', function () {
    video.muted = !video.muted;
    son.textContent = video.muted ? '🔇' : '🔊';
    son.setAttribute('aria-label', video.muted ? 'Activer le son' : 'Couper le son');
  });
})();
