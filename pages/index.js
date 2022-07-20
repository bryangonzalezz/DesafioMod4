function main() {
  // COMPONENTEHEADER
  componenteHeader();

  // COMPONENTECONTACTO
  componenteContacto();
}

// CONTENFULDATABIENVENIDOS
contenfulBienvenidaData().then((bienve) => {
  for (const bien of bienve) {
    infoBienvenidos(bien);
  }
});
// CONTENFULDATAPRESENTACION
contenfulPresentacionData().then((presen) => {
  for (const pre of presen) {
    infoPresentacion(pre);
  }
});                  
// CONTENFULDATASERVICIOS
contenfulServiciosData().then((dataCards) => {
  for (const cards of dataCards) {
    agregarCards(cards);
  }
});

main();
