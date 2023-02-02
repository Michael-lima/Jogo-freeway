//variavel do ator 

 let xAtor = 95;
 let yAtor = 366; 
 let colisao = false;
 let meusPontos = 0;


function movimentaAtor(){
  
if (keyIsDown(UP_ARROW)){
  

 yAtor -= 3;

}
 if (keyIsDown(DOWN_ARROW)) {
    
   yAtor += 3
   
   if (yAtor > 366){
     yAtor = 366;
   }
 }

}
 function colisaoAtor(){
   
   for (var i = 0;  i < imagemCarros.length;  i++ ){
     
     colisao = collideRectCircle(xCarros[i],yCarros[i],40,30 , xAtor,yAtor,15);
     
     
   
   
   if (colisao){
    atorVoltaProInicio();
     
     somDaColisao.play();
     
      if(meusPontos > 0){
     meusPontos -= 1;
      }
   } 
 
     }
     
    
     
 }
function  atorVoltaProInicio(){
     yAtor = 366;
   }
   
  function pontos(){
   text (meusPontos, width / 3 , 26);
    textSize(25);
    fill(color(25,240,150));
    
    
  }

function marcaPontos(){
   
  if(yAtor < 16 ){
    meusPontos += 1;
    somPonto.play();
    atorVoltaProInicio(); 
  }
  
}
 
