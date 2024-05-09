// Existing smooth scroll functionality
document.querySelectorAll('a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    // Calculate the correct scroll position
    const targetElement = document.querySelector(this.getAttribute('href'));
    const navbarHeight = document.querySelector('.navbar').offsetHeight;
    const scrollPosition = targetElement.offsetTop - navbarHeight;

    // Scroll to the calculated position
    window.scrollTo({
      top: scrollPosition,
      behavior: 'smooth'
    });
  });
});

// New functionality: Detect when.servicos-card-1 divs enter the viewport
document.addEventListener('DOMContentLoaded', function() {
  const cards = document.querySelectorAll('.servicos-card-1');

  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function checkVisibility() {
    cards.forEach(card => {
      if (isInViewport(card)) {
        card.classList.add('visible');
      }
    });
  }

  window.addEventListener('scroll', checkVisibility);
  // Initial check in case any cards are already in view
  checkVisibility();
});
