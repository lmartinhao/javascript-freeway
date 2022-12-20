function setup() {
  createCanvas(600, 400);
  getAudioContext().resume();
  trilhaSonora.loop();
}

function draw() {
  background(imagemEstrada);
  mostraAtor();
  mostraCarro();
  movimentaAtor();
  movimentaCarro();
  voltaCarroPosicaoInicial();
  verificaColisao();
  mostraPontos();
  marcaPonto();
}
