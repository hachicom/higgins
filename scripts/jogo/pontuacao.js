class Pontuacao {
 constructor(){
   this.pontos = 0;
   this.pontosToLife = 3000;
 }
  
 exibe(){
   textSize(50);
   textAlign(RIGHT);
   fill('#fff');
   text(parseInt(this.pontos),width - 30,50);
 }

 adicionarPonto(){
   this.pontos+=0.2;
 }
  
 addPts(pontos){
   this.pontos+=parseInt(pontos);
   this.pontosToLife-=parseInt(pontos);
   if (this.pontosToLife <= 0){
     Vida.ganhaVida(1);
     this.pontosToLife = 3000;
   }
 }
  
 restart(){
   this.pontos=0;
 }
}