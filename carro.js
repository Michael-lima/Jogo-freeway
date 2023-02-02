let   xCarros = [600,600,600,600,600,600];
let   yCarros = [150,96,50,210,270,318];
let   velocidadeCarros = [2,2.5,3.2,3.3,2.7,5];

 function movimentaCarro (){
   for (var i = 0;  i < imagemCarros.length;  i++ ){
     xCarros[i] -= velocidadeCarros[i];
   
   }
   
 }

 function voltaPosicaoInicialCarros(){
   
    for (var i = 0;  i < imagemCarros.length;  i++ ){
     
   
   if (xCarros[i] < - 28 ) {
       
    xCarros[i] = 600; 
       
       
    
     if (xCarros[i] < - 30 ) {
       
    xCarros[i] = 600; 
       
       }
   }}} 
  
