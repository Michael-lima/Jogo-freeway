
let imagemDaEstrada;
let imagemDoAtor;
let imagemDoCarro;
let imagemDoCarro2;
let imagemDoCarro3;
let somDaTrilha;
let somDaColisao;
let somPonto;

function preload (){
  imagemDaEstrada = loadImage("Imagens/estrada.png");
  imagemDoAtor = loadImage("Imagens/ator-1.png");
  imagemDoCarro = loadImage("Imagens/carro-1.png");
  imagemDoCarro2 = loadImage("Imagens/carro-2.png");
  imagemDoCarro3 = loadImage("Imagens/carro-3.png");
  somDaTrilha = loadSound  ("sons/trilha.mp3");
  somDaColisao = loadSound ("sons/colidiu.mp3");
  somPonto = loadSound ("sons/pontos.wav") ;
  
imagemCarros = [imagemDoCarro, imagemDoCarro2 ,imagemDoCarro3,imagemDoCarro,imagemDoCarro2,imagemDoCarro3];
}

