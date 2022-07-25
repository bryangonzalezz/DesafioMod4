function agregarServiciosPag(params = {}) {
  const templateCards = document.querySelector("#servicios-page__cards");
  const containerCards = document.querySelector(".servicios-cards__container");

  templateCards.content.querySelector(".servicios-cards__titulo").textContent =
    params.titulo;
  templateCards.content.querySelector(".servicios-cards__parrafo").textContent =
    params.parrafo;

  templateCards.content.querySelector(".servicios-cards__img").src =
    params.imagen;

  const clone = document.importNode(templateCards.content, true);
  containerCards.appendChild(clone);
}
function contenfulServiciosPag() {
  return fetch(
    "https://cdn.contentful.com/spaces/rnruhwfoanxz/environments/master/entries?access_token=tWrlpvumHVQjxE_yOLtyhJf9hFf9PTqFCNluZFci7G4&content_type=serviciospag"
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const contenidoData = data.items.map((grupoDataServ) => {
        console.log(grupoDataServ);
        const imagenfinal = imagenp(grupoDataServ.fields.imagen.sys.id, data);
        return {
          titulo: grupoDataServ.fields.titulo,
          parrafo: grupoDataServ.fields.parrafo,
          imagen: imagenfinal.fields.file.url,
        };
      });
      return contenidoData;
    });

  function imagenp(id, data) {
    const imagenEncontrada = data.includes.Asset.find((imagenn) => {
      return imagenn.sys.id == id;
    });
    return imagenEncontrada;
  }
}

contenfulServiciosPag().then((dataCards) => {
  for (const cards of dataCards) {
    agregarServiciosPag(cards);
  }
});
