//cariáveis ator
let xAtor = 113;
let yAtor = 366;
let colisao = false;
let meusPontos = 0;

function mostraAtor() {
  image(imagemAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor() {
  if (keyIsDown(UP_ARROW)) {
    yAtor -= 2;
  }
  if (keyIsDown(DOWN_ARROW)) {
    if (yAtor < 366) {
      yAtor += 2;
    }
  }
}

function verificaColisao() {
  // (x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < imagemCarros.length; i++) {
    colisao = collideRectCircle(xCarros[i], yCarros[i], larguraCarro, alturaCarro, xAtor, yAtor, 15);
    if (colisao) {
      voltaAtorPosicaoInicial();
      somColisao.play();
      if (pontosPositivos()) {
        meusPontos -= 1;
      }
    }
  }
}

function pontosPositivos() {
  return meusPontos > 0;
}

function voltaAtorPosicaoInicial() {
  yAtor = 366;
}

function mostraPontos() {
  textSize(30);
  textAlign(CENTER);
  fill(color(255, 255, 208))
  text(meusPontos, width / 5, 29);
}

function marcaPonto() {
  if (yAtor < 15) {
    meusPontos += 1;
    voltaAtorPosicaoInicial();
    somDoPonto.play();
  }
}
