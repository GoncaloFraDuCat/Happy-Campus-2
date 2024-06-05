

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

// New functionality: Expand second <p> within.servicos-card-1 upon clicking "More"
document.querySelectorAll('.more-button').forEach(button => {
  button.addEventListener('click', function(event) {

     // Prevent the default action
    const description = this.closest('.servicos-card-1'); // Correctly target the parent div
    const descriptionText = description.querySelector('.servicos-description'); // Target the description text
    if (descriptionText.style.maxHeight) {
      descriptionText.style.maxHeight = null;
    } else {
      descriptionText.style.maxHeight = descriptionText.scrollHeight + "px";
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const carousel = document.querySelector('.servicos');
  const prevButton = document.querySelector('.carousel-control.prev');
  const nextButton = document.querySelector('.carousel-control.next');

  let scrollPerClick;
  let currentScrollPosition = 0;

  // Calculate the amount to scroll per click based on the width of one card
  scrollPerClick = carousel.offsetWidth / 3;

  prevButton.addEventListener('click', function () {
    if (currentScrollPosition > 0) {
      currentScrollPosition -= scrollPerClick;
      carousel.scrollTo({
        left: currentScrollPosition,
        behavior: 'smooth'
      });
    }
  });

  nextButton.addEventListener('click', function () {
    if (currentScrollPosition < carousel.scrollWidth - carousel.offsetWidth) {
      currentScrollPosition += scrollPerClick;
      carousel.scrollTo({
        left: currentScrollPosition,
        behavior: 'smooth'
      });
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const carousel = document.querySelector('.noticias');
  const prevButton = document.querySelector('.carousel-control.prev');
  const nextButton = document.querySelector('.carousel-control.next');

  let scrollPerClick;
  let currentScrollPosition = 0;

  // Calculate the amount to scroll per click based on the width of one card
  scrollPerClick = carousel.offsetWidth / 3;

  prevButton.addEventListener('click', function () {
    if (currentScrollPosition > 0) {
      currentScrollPosition -= scrollPerClick;
      carousel.scrollTo({
        left: currentScrollPosition,
        behavior: 'smooth'
      });
    }
  });

  nextButton.addEventListener('click', function () {
    if (currentScrollPosition < carousel.scrollWidth - carousel.offsetWidth) {
      currentScrollPosition += scrollPerClick;
      carousel.scrollTo({
        left: currentScrollPosition,
        behavior: 'smooth'
      });
    }
  });
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  console.log(anchor);
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    // Get the target element
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    // Check if targetElement is not null
    if (targetElement!== null) { // Add this condition
      const navbarHeight = document.querySelector('.navbar')? document.querySelector('.navbar').offsetHeight : 0;
      const scrollPosition = targetElement.offsetTop - navbarHeight;

      // Scroll to the calculated position
      window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth'
      });
    } else {
      console.log(`Target element not found for ${targetId}`);
    }
  });
});


document.addEventListener('DOMContentLoaded', function() {
    var scrollToTopButton = document.getElementById('scroll-to-top-button');

    // Show the button when scrolling starts
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 0) { // Check if scrolled past the top
            scrollToTopButton.style.opacity = "1";
            scrollToTopButton.style.visibility = "visible";
        } else {
            scrollToTopButton.style.opacity = "0";
            scrollToTopButton.style.visibility = "hidden";
        }
    });

    // Scroll to top when the button is clicked
    scrollToTopButton.addEventListener('click', function(event) {
        window.scrollTo({top: 0, behavior: 'smooth'});
    });
});
