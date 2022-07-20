function componenteHeader(el) {
  const comHedaer = document.querySelector(".header");
  comHedaer.innerHTML = `<nav class="header__icon">
  <a href="./index.html " class="icon-a">
    <img
      class="header__icon-logo"
      src="./imagenes/logo.png"
      alt="icono"
    />
  </a>
</nav>
<div class="header__menu-burger">
  <div class="menu-burger-abrir">
    <img
      class="menu-burger__abrir-img"
      src="./imagenes/menu-regular-24 (1).png"
      alt=""
    />
  </div>
  <div class="menu-burger__content">
    <div class="menu-burger__cerrar">
      <img
        class="menu-burger__cerrar-img"
        src="./imagenes/x-regular-24.png"
        alt=""
      />
    </div>
    <div class="menu-burger__tex">
      <div class="menu-burger__tex-content">
      <a href="./Portafolio.html">Portafolio</a>
      <a href="./Servicios.html">Servicios</a>
      <a href="./Contacto.html">Contacto</a>
      </div>
    </div>
  </div>
</div>
<div class="header__nav">
<a href="./Portafolio.html">Portafolio</a>
<a href="./Servicios.html">Servicios</a>
<a href="./Contacto.html">Contacto</a>
  </div>
</div>`;

  const botonAbrir = comHedaer.querySelector(".menu-burger-abrir");
  const burger = comHedaer.querySelector(".menu-burger__content");

  botonAbrir.addEventListener("click", () => {
    burger.style.display = "inherit";
  });

  const botonCerrar = comHedaer.querySelector(".menu-burger__cerrar");

  botonCerrar.addEventListener("click", () => {
    burger.style.display = "";
  });

  // el.appendChild(comHedaer); 
}
