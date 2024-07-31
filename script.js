

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

document.addEventListener('DOMContentLoaded', function () {
  // Initialize atividades carousel
  const atividadesCarousel = document.querySelector('.atividades-cards');
  const atividadesPrevButton = document.getElementById('atividades-prev');
  const atividadesNextButton = document.getElementById('atividades-next');

  let scrollPerClickAtividades;
  let currentScrollPositionAtividades = 0;

  // Calculate scroll distance based on card width and desired scroll increment
  const cardWidth = atividadesCarousel.children[0].offsetWidth; // Assuming all cards have the same width
  scrollPerClickAtividades = cardWidth * 1; // Adjust multiplier as needed

  atividadesPrevButton.addEventListener('click', function () {
    currentScrollPositionAtividades -= scrollPerClickAtividades;
    if (currentScrollPositionAtividades < 0) {
      currentScrollPositionAtividades = 0; // Prevent scrolling too far left
    }
    atividadesCarousel.scrollTo({
      left: currentScrollPositionAtividades,
      behavior: 'smooth'
    });
  });

  atividadesNextButton.addEventListener('click', function () {
    const maxScrollLeft = atividadesCarousel.scrollWidth - atividadesCarousel.offsetWidth;
    currentScrollPositionAtividades += scrollPerClickAtividades;
    if (currentScrollPositionAtividades > maxScrollLeft) {
      currentScrollPositionAtividades = maxScrollLeft; // Prevent scrolling too far right
    }
    atividadesCarousel.scrollTo({
      left: currentScrollPositionAtividades,
      behavior: 'smooth'
    });
  });
});


// Get the modal
var modal = document.getElementById('videoModal');

// Get the button that opens the modal
var btn = document.querySelector('.open-modal');

// Get the <span> element that closes the modal
var span = document.querySelector('.close');

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = 'block';
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = 'none';
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
}

document.addEventListener("DOMContentLoaded", function() {
  const counterContainer = document.querySelector(".counter-container");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counterElement = entry.target.querySelector('.counter');
        const options = {
          decimal: '.2',
        };

        let demo = new CountUp(counterElement, 48, options);

        if (!demo.error) {
          demo.start();
        } else {
          console.error(demo.error);
        }
      }
    });

    observer.unobserve(entry.target); // Stop observing once done
  });

  observer.observe(counterContainer);
});
