// variáveis dos carros
let xCarros = [600, 600, 600]
let yCarros = [44, 100, 150];
let velocidadeCarros = [2, 2.7, 3.4];


function mostraCarro() {
  image(imagemCarro, xCarros[0], yCarros[0], 50, 36);
  image(imagemCarro2, xCarros[1], yCarros[1], 50, 36);
  image(imagemCarro3, xCarros[2], yCarros[2], 50, 36);

}

function movimentaCarro() {
  xCarros[0] -= velocidadeCarros[0];
  xCarros[1] -= velocidadeCarros[1];
  xCarros[2] -= velocidadeCarros[2];
}

function voltaCarroPosicaoInicial() {
  if (xCarros[0] < -60) {
    xCarros[0] = 600;
  }
  if (xCarros[1] < -60) {
    xCarros[1] = 600;
  }
  if (xCarros[2] < -60) {
    xCarros[2] = 600;
  }
}
