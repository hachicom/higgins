class Inimigo extends Animacao {
 constructor(matriz,imagem,x,variacaoY,largura,altura,larguraSprite,alturaSprite,mascara,velocidade,delay,tipo,score){
   super(matriz,imagem,x,variacaoY,largura,altura,larguraSprite,alturaSprite,mascara);
   this.velocidade = velocidade;
   this.delay = delay;
   //this.delay = delay;
   this.x = width + this.delay;
   this.dead = false;
   this.captured = false;
   this.hit = false;
   this.tipo = tipo;
   this.score = score;
 }
  
 exibe(){
   if(!this.captured){
     super.exibe();
   }
 }
  
 move() {
   this.x -= this.velocidade;
   /*if (this.x < -this.largura - this.delay){
     this.x = width;
   }*/
 }
}