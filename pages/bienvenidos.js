function infoBienvenidos(paramsB = {}) {
  const sectionBienvenidos = document.querySelector(".bienvenidos__content");
  sectionBienvenidos.querySelector(".bienvenidos-titulo").textContent =
    paramsB.titulo;
  sectionBienvenidos.querySelector(".bienvenidos-subtitulo").textContent =
    paramsB.subtitulo;
}

function contenfulBienvenidaData() {
  return fetch(
    "https://cdn.contentful.com/spaces/rnruhwfoanxz/environments/master/entries?access_token=tWrlpvumHVQjxE_yOLtyhJf9hFf9PTqFCNluZFci7G4&content_type=contenidoHome"
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const fieldsCollections = data.items.map((item) => {
        return {
          titulo: item.fields.titulo,
          subtitulo: item.fields.subtitulo,
        };
      });
      return fieldsCollections;
    });
}
