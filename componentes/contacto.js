function componenteContacto() {
  const form = document.querySelector(".contacto__content");
  form.innerHTML = `
  <h2 class="contacto__content-titulo">Escribime</h2>
<form class="contacto__content-form">
  <label for="nombre">
    NOMBRE
    <input class="nombre" name="nombre" type="text" />
  </label>

  <label for="email">
    EMAIL
    <input class="email" name="email" type="text" />
  </label>

  <label form="texto">
    MENSAJE
    <textarea name="texto" class="texto"></textarea>
  </label>
  <button type="submit" class="submit">Enviar</button>
</form>`;

  form.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const mensaje = {
      to: "bryangonzalez199777@gmail.com",
      message:
        "Hola Soy " +
        evento.target.nombre.value +
        "mi email es " +
        evento.target.email.value +
        "quiero decirte  " +
        evento.target.texto.value,
    };

    fetch("https://apx-api.vercel.app/api/utils/dwf", {
      method: "POST",
      body: JSON.stringify(mensaje),
      headers: { "content-type": "application/json" },
    })
      .catch((error) => {
      console.log(error);
    });

    evento.target.nombre.value = "";
    evento.target.email.value = "";
    evento.target.texto.value = "";
    alert("EL MENSAJE SE ENVIOOO");
  });
}
