function setup() {
  createCanvas(600, 400);
  getAudioContext().resume();
}

function draw() {
  background(imagemEstrada);
  mostraAtor();
  mostraCarro();
  movimentaAtor();
  movimentaCarro();
  voltaCarroPosicaoInicial();
}
