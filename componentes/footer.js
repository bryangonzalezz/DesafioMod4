function componenteFooter() {
  const comFooter = document.querySelector(".footer-content");
  comFooter.innerHTML = ` <h2 class="footer-content__titulo">BRYAN</h2>
    <div class="footer-content__links">
      <div class="content__links">
        <img src="./imagenes/instagram-logo-24.png" alt="" />
        <a href="https://www.instagram.com/bryangonzalezok/" class="link">Instagram</a>
      </div>
      <div class="content__links">
        <img src="./imagenes/linkedin-square-logo-24.png" alt="" />
        <a href="https://www.linkedin.com/in/bryan-gonzalez-82822520a/" class="link">Linkedin</a>
      </div>
      <div class="content__links">
        <img src="./imagenes/github-logo-24.png" alt="" />
        <a href="https://github.com/bryangonzalezz?tab=repositories" class="link">Github</a>
      </div>
    </div>`;
}
componenteFooter();
