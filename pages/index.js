// CONTENFULDATABIENVENIDOS
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
contenfulBienvenidaData().then((bienve) => {
  for (const bien of bienve) {
    infoBienvenidos(bien);
  }
});
// CONTENFULDATAPRESENTACION
function infoPresentacion(paramsP = {}) {
  const sectionPresentacion = document.querySelector(".presentacion__content");
  sectionPresentacion.querySelector(
    ".presentacion__content-titulo"
  ).textContent = paramsP.titulo;

  sectionPresentacion.querySelector(".presentacion__content-imagen").src =
    paramsP.imagen;

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
        const imagenfinal = imagenp(item.fields.imagen.sys.id, data);
        return {
          titulo: item.fields.titulo,
          imagen: imagenfinal.fields.file.url,
          parrafo: item.fields.parrafo,
        };
      });
      return fieldsCollections;
    });

  function imagenp(id, data) {
    const imagenEncontrada = data.includes.Asset.find((imagenn) => {
      return imagenn.sys.id == id;
    });
    return imagenEncontrada;
  }
}

contenfulPresentacionData().then((presen) => {
  for (const pre of presen) {
    infoPresentacion(pre);
  }
});
// CONTENFULDATASERVICIOS

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

contenfulServiciosData().then((dataCards) => {
  for (const cards of dataCards) {
    agregarCards(cards);
  }
});
