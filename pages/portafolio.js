function agregarPortafolio(params = {}) {
  const templateCards = document.querySelector("#portafolio-page__cards");
  const containerCards = document.querySelector(".portafolio-cards__container");

  templateCards.content.querySelector(".portafolio-cards__titulo").textContent =
    params.titulo;
  templateCards.content.querySelector(
    ".portafolio-cards__parrafo"
  ).textContent = params.parrafo;

  templateCards.content.querySelector(".portafolio-link__content").href =
    params.url;

  templateCards.content.querySelector(".portafolio-cards__img").src =
    params.imagen;

  const clone = document.importNode(templateCards.content, true);
  containerCards.appendChild(clone);
}

function contentfulPortafolio() {
  return fetch(
    "https://cdn.contentful.com/spaces/rnruhwfoanxz/environments/master/entries?access_token=tWrlpvumHVQjxE_yOLtyhJf9hFf9PTqFCNluZFci7G4&content_type=portafolio"
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const contenidoData = data.items.map((grupoData) => {
        const imagenfinal = imagenp(
          grupoData.fields.imagenportafolio.sys.id,
          data
        );
        return {
          titulo: grupoData.fields.titulo,
          parrafo: grupoData.fields.parrafo,
          url: grupoData.fields.link,

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

contentfulPortafolio().then((dataCards) => {
  for (const cards of dataCards) {
    agregarPortafolio(cards);
  }
});
