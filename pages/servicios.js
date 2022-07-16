function agregarCards(params = {}) {
  const templateCards = document.querySelector("#servicios__cards-template");
  const containerCards = document.querySelector(".servicios__cards-content");
  templateCards.content.querySelector(".servicios__cards-titulo").textContent =
    params.titulo;
  templateCards.content.querySelector(".servicios__cards-parrafo").textContent =
    params.parrafo;
  templateCards.content.querySelector(".servicios__cards-img").src =
    params.image;

  const clone = document.importNode(templateCards.content, true);
  containerCards.appendChild(clone);
}

function contenfulServiciosData() {
  return fetch(
    "https://cdn.contentful.com/spaces/rnruhwfoanxz/environments/master/entries?access_token=tWrlpvumHVQjxE_yOLtyhJf9hFf9PTqFCNluZFci7G4&content_type=servicios"
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const fieldsCollections = data.items.map((item) => {
        const imagen = imagenE(item.fields.webImg.sys.id, data);
        return {
          titulo: item.fields.subtitulo,
          parrafo: item.fields.parrafo,
          image: imagen.fields.file.url,
        };
      });
      return fieldsCollections;
    });
  function imagenE(id, data) {
    const arrayEncontrado = data.includes.Asset.find((asset) => {
      return asset.sys.id == id;
    });
    return arrayEncontrado;
  }
}
