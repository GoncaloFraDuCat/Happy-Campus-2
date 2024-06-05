

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
  // Initialize.servicos carousel
  const servicosCarousel = document.querySelector('.servicos');
  const servicosPrevButton = document.getElementById('servicos-prev');
  const servicosNextButton = document.getElementById('servicos-next');

  let scrollPerClickServicos;
  let currentScrollPositionServicos = 0;

  scrollPerClickServicos = servicosCarousel.offsetWidth / 3;

  servicosPrevButton.addEventListener('click', function () {
    if (currentScrollPositionServicos > 0) {
      currentScrollPositionServicos -= scrollPerClickServicos;
      servicosCarousel.scrollTo({
        left: currentScrollPositionServicos,
        behavior: 'smooth'
      });
    }
  });

  servicosNextButton.addEventListener('click', function () {
    if (currentScrollPositionServicos < servicosCarousel.scrollWidth - servicosCarousel.offsetWidth) {
      currentScrollPositionServicos += scrollPerClickServicos;
      servicosCarousel.scrollTo({
        left: currentScrollPositionServicos,
        behavior: 'smooth'
      });
    }
  });

  // Initialize.noticias carousel
  const noticiasCarousel = document.querySelector('.noticias');
  const noticiasPrevButton = document.getElementById('noticias-prev');
  const noticiasNextButton = document.getElementById('noticias-next');

  let scrollPerClickNoticias;
  let currentScrollPositionNoticias = 0;

  scrollPerClickNoticias = noticiasCarousel.offsetWidth / 3;

  noticiasPrevButton.addEventListener('click', function () {
    if (currentScrollPositionNoticias > 0) {
      currentScrollPositionNoticias -= scrollPerClickNoticias;
      noticiasCarousel.scrollTo({
        left: currentScrollPositionNoticias,
        behavior: 'smooth'
      });
    }
  });

  noticiasNextButton.addEventListener('click', function () {
    if (currentScrollPositionNoticias < noticiasCarousel.scrollWidth - noticiasCarousel.offsetWidth) {
      currentScrollPositionNoticias += scrollPerClickNoticias;
      noticiasCarousel.scrollTo({
        left: currentScrollPositionNoticias,
        behavior: 'smooth'
      });
    }
  });
});



document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    // Get the target element
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    // Check if targetElement is not null
    if (targetElement!== null) {
      // Calculate the scroll position, adjusting for the height of the navbar
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
