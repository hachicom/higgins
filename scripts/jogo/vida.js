class Vida {
  constructor(total, inicial) {
    this.total = total;
    this.inicial = inicial;
    this.vidas = this.inicial;
    
    this.largura = 50;
    this.altura = 50;
    this.xInicial = 10;
    this.margem = 10;
  }
  
  exibe(){
    for(let i = 0; i < this.vidas; i++){
      image(imagemVida,this.xInicial + (i * (this.largura + this.margem)),5,this.largura,this.altura);
    }
  }
  
  defineVida(valor){
    this.vidas=valor;
  }
  
  ganhaVida(valor){
    this.vidas+=valor;
    if (this.vida >= this.total){
      this.vidas = this.total;
    }
  }
  
  perdeVida(valor){
    this.vidas-=valor;
    if (this.vida <= 0){
      this.vidas = 0;
    }
  }
}