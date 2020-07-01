class Personagem extends Animacao{
  constructor(matriz,imagem,x,variacaoY,largura,altura,
               larguraSprite,alturaSprite,mascara){
    super(matriz,imagem,x,variacaoY,largura,altura,
          larguraSprite,alturaSprite,mascara);
    this.gravidade = 2;
    this.velocidadeDoPulo = 0;
    this.alturaDoPulo = -30;
    this.yInicial = height - this.altura - variacaoY;
    this.y = this.yInicial;
    this.invencivel = false;
    this.tempoInvencivel = 2000;
    this.pisca = 0;
    this.piscafactor = 2;
    this.dead = false;
    this.inAir = false;
  }
  
 exibe(){
   if(!this.invencivel){
     super.exibe();
   }else{
     this.pisca++;
     if (this.pisca >= this.piscafactor){
       this.pisca=0;
     }
     if(this.pisca % this.piscafactor ==0){
       super.exibe();
     }
   }
 }
  
 pula(){
   if (this.qtdPulos < 2){
     this.velocidadeDoPulo = this.alturaDoPulo;     
     if (!this.dead){
       somDoPulo.play();
       this.trocaAnimacao(matrizPersonagemPulando);
     }
     this.qtdPulos++;
     this.inAir = true;
   }
 }
  
 aplicaGravidade(){
   this.y += this.velocidadeDoPulo;
   this.velocidadeDoPulo += this.gravidade;
   
   if (this.inAir && !this.dead && this.velocidadeDoPulo > 0){
     this.trocaAnimacao(matrizPersonagemCaindo);
   }
   
   if((this.y > this.yInicial) && !this.dead){
     this.y = this.yInicial;
     this.qtdPulos = 0;     
     if (this.inAir){
       this.trocaAnimacao(matrizPersonagem);
       this.inAir = false;
     }
   }
 }
 
 estaColidindo(inimigo){
   //this.debugColisao(inimigo);
   if(inimigo.tipo == "inimigo"){
     if (this.invencivel || inimigo.dead){
       return false;
     }
   }
   
   const colisao = collideRectRect(
     this.x + this.mascara[0],
     this.y + this.mascara[1],
     this.mascara[2],
     this.mascara[3],
     inimigo.x + inimigo.mascara[0],
     inimigo.y + inimigo.mascara[1],
     inimigo.mascara[2],
     inimigo.mascara[3]);
   return colisao;
   //return false;
 }
  
 ficaInvencivel(){
   this.invencivel = true;
   setTimeout(() => {
     this.invencivel = false;
     this.pisca = 0;
   },this.tempoInvencivel);
 }
  
 restart(){
   this.dead = false;
   this.y = this.yInicial;
   this.ficaInvencivel();
   this.trocaAnimacao(matrizPersonagem);
 }
  
 morre(){
   this.dead = true;
   this.pula();
   this.trocaAnimacao(matrizPersonagemMorrendo);
 }
  
 debugColisao(inimigo){
   noFill();
   rect(this.x + this.mascara[0],this.y +this.mascara[1],this.mascara[2],this.mascara[3]);
   rect(inimigo.x + inimigo.mascara[0],inimigo.y + inimigo.mascara[1],inimigo.mascara[2],inimigo.mascara[3]);
 }
}