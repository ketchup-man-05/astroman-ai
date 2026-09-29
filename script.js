// Astroman AI landing page — tiny enhancements, no frameworks.
(function () {
  // Smooth-scroll offset handled natively via CSS scroll-behavior.
  // Add a subtle twinkle to the hero stars.
  var stars = document.querySelector('.stars');
  if (stars) {
    var t = 0;
    setInterval(function () {
      t += 1;
      stars.style.opacity = 0.55 + 0.2 * Math.abs(Math.sin(t / 8));
    }, 250);
  }
})();
