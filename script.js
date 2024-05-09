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
