function infoPresentacion(paramsP = {}) {
  const sectionPresentacion = document.querySelector(".presentacion__content");
  sectionPresentacion.querySelector(
    ".presentacion__content-titulo"
  ).textContent = paramsP.titulo;
  sectionPresentacion.querySelector(
    ".presentacion__content-parrafo"
  ).textContent = paramsP.parrafo;
}

function contenfulPresentacionData() {
  return fetch(
    "https://cdn.contentful.com/spaces/rnruhwfoanxz/environments/master/entries?access_token=tWrlpvumHVQjxE_yOLtyhJf9hFf9PTqFCNluZFci7G4&content_type=presentacion"
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const fieldsCollections = data.items.map((item) => {
        return {
          titulo: item.fields.titulo,
          parrafo: item.fields.parrafo,
        };
      });
      return fieldsCollections;
    });
}
