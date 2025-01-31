document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("navbar-container").innerHTML = `
    <nav>
      <a href="../index.html">
        <img src="/images/HC-logo-black.png" alt="Logo" sizes="64x64" class="navbar-logo">
      </a>
      <div id="hamburger-menu" class="hamburger-menu">&#9776;</div>
      <ul class="navbar" id="navbar">
        <li><a href="/index.html#home">Home</a></li>
        <li><a href="/index.html#sobre">Sobre</a></li>
        <li><a href="/index.html#atividades">Atividades</a></li>
        <li><a href="/index.html#servicos">Serviços</a></li>
        <li><a href="/index.html#noticias">Notícias</a></li>
        <li><a href="#sobre">Recursos</a>
          <ul class="dropdown-menu">
            <li><a href="/recursos/webinars.html" class="nav-drop-link">Webinars</a></li>
            <li><a href="/recursos/flyers.html" class="nav-drop-link">Flyers</a></li>
            <li><a href="/recursos/news_&_media.html" class="nav-drop-link">News & Media</a></li>
            <li><a href="/recursos/videos.html" class="nav-drop-link">Vídeos</a></li>
          </ul>
        </li>
        <li><a href="/eventos.html">Eventos</a></li>
      </ul>
      <img src="/images/logos.png" alt="Logo" class="navbar-logo-1">
    </nav>
  `;

  // Now reattach event listeners
  const hamburgerMenu = document.getElementById("hamburger-menu");
  const navbar = document.getElementById("navbar");

  if (!hamburgerMenu) {
    console.error("Hamburger menu element NOT found!");
    return;
  }
  if (!navbar) {
    console.error("Navbar element NOT found!");
    return;
  }

  console.log("Hamburger menu and navbar exist!");

  hamburgerMenu.addEventListener("click", function () {
    console.log("Hamburger menu clicked!");
    navbar.classList.toggle("open");
  });
});