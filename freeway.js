



function setup() {
  createCanvas(500, 400);
  somDaTrilha.loop();
}

function draw() {
  background(imagemDaEstrada);
  image( imagemDoAtor, xAtor ,yAtor ,30 ,30);
 
  movimentaCarro();
  movimentaAtor();
  voltaPosicaoInicialCarros();
  mostraCarro();
  colisaoAtor();
  pontos();
   marcaPontos();
} 

function mostraCarro(){
  for (var i = 0;  i < imagemCarros.length;  i++ ){
  
  image(imagemCarros[i], xCarros[i] ,yCarros[i] ,40 ,30);
 
  }

  
}

