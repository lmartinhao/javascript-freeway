// variáveis dos carros
let xCarros = [600, 600, 600, 600, 600, 600]
let yCarros = [44, 100, 150, 210, 265, 320];
let velocidadeCarros = [2.5, 4, 3.4, 5.5, 2.6, 3.9];
let larguraCarro = 50;
let alturaCarro = 36;


function mostraCarro() {
  for (let i = 0; i < imagemCarros.length; i++) {
    image(imagemCarros[i], xCarros[i], yCarros[i], larguraCarro, alturaCarro);;
  }
}

function movimentaCarro() {
  for (let i = 0; i < imagemCarros.length; i++) {
    xCarros[i] -= velocidadeCarros[i];
  }
}

function voltaCarroPosicaoInicial() {
  for (let i = 0; i < imagemCarros.length; i++) {
    if (passouTodaATela(xCarros[i])) {
      xCarros[i] = 600;
    }
  }
}

function passouTodaATela(xCarro) {
  return xCarro < - 60;
}
