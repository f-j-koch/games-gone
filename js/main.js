/*
 * Kleine JavaScript-Datei zur Steuerung der mobilen Navigation.
 * Öffnet und schließt das Navigationsmenü bei Klick auf den Hamburger-Button.
 */
document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('.nav-toggle');
  const navList = document.querySelector('.nav-list');

  navToggle.addEventListener('click', () => {
    navList.classList.toggle('open');
    navToggle.classList.toggle('open');
  });
});
