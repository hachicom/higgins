class TelaMission {
  constructor(){    
    
  }
  
  keyPressed(key) {
    cenaAtual='jogo';
    jogo.restart();
  }

  mousePressed() {
    cenaAtual='jogo';
    jogo.restart();
  }
  
  touchStarted() {
    cenaAtual='jogo';
    jogo.restart();
    return false;
  }
  
  draw(){
    this._imagemDeFundo();
    this._texto();
  }
  
  _imagemDeFundo(){
    background(color(200, 0, 255));
    image(imagemInimigo, width/2 + 10, 60, 93, 60, 0, 0, 186, 120);
    image(imagemInimigoGrande, (width/2) + 113, 10, 160, 160, 0, 0, 320, 320);
    image(imagemInimigoVoador, (width/2) + 283, 10, 160, 200, 0, 0, 320, 400);
    image(imagemItemGold, (width/2) + 10, 240, 120, 120, 0, 0, 240, 240);
  }
  
  _texto(){
    textFont(fonteTelaInicial);
    textAlign(RIGHT);
    fill("#fff");
    strokeWeight(4);
    stroke(51);
    
    textSize(30);
    text("Avoid Obstacles\nEvite Obstaculos",width/2 - 20,height - 420);
    textSize(30);
    text("Collect Bags to score points\nColete sacolas para marcar pontos",width/2 - 20,height - 260);
    textSize(40);
    textAlign(CENTER);
    text('Press Key/Click/Touch to Continue',width/2,height - 40);
  }
}