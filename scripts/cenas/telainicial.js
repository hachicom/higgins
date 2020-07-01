class TelaInicial {
  constructor(){
  }
  
  keyPressed(key) {
    cenaAtual='telaTutorial';
    //jogo.restart();
  }

  mousePressed() {
    cenaAtual='telaTutorial';
    //jogo.restart();
  }
  
  touchStarted() {
    cenaAtual='telaTutorial';
    //jogo.restart();
    return false;
  }
  
  draw(){
    this._imagemDeFundo();
    this._texto();
  }
  
  _imagemDeFundo(){
    background(color(0, 0, 255));
    image(imagemTitulo, 100, 10);
  }
  
  _texto(){
    textFont(fonteTelaInicial);
    textAlign(CENTER);
    fill("#fff");
    strokeWeight(4);
    stroke(51);
    
 textSize(30);
    text("Recriando a fase da Floresta do Hugo",width/2,height - 200);
    textSize(40);
    text('Press key/Click/Touch to Play',width/2,height - 40);
  }
}