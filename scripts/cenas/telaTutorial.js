class TelaTutorial {
  constructor(){    
    
  }
  
  keyPressed(key) {
    cenaAtual='telaMission';
    //jogo.restart();
  }

  mousePressed() {
    cenaAtual='telaMission';
    //jogo.restart();
  }
  
  touchStarted() {
    cenaAtual='telaMission';
    //jogo.restart();
    return false;
  }
  
  draw(){
    this._imagemDeFundo();
    this._texto();
  }
  
  _imagemDeFundo(){
    background(color(120, 0, 255));
    image(imagemPersonagem, width/4 - 60, 10, 120, 150, 0, 640, 240, 320);
    image(imagemPersonagem, (width/4 * 3) - 60, 10, 120, 150, 720, 640, 240, 320);
  }
  
  _texto(){
    textFont(fonteTelaInicial);
    textAlign(CENTER);
    fill("#fff");
    strokeWeight(4);
    stroke(51);
    
    textSize(30);
    text("Press Any Key\nor Click/Touch on left side\n\nPressione Qualquer Tecla\nou Clique/Toque no lado esquerdo",width/4,height - 340);
    textSize(30);
    text("Press Down Key\nor Click/Touch on right side\n\nPressione Seta pra Baixo\nou Clique/Toque no lado direito",width/4 * 3,height - 340);
    textSize(40);
    text('Press Key/Click/Touch to Continue',width/2,height - 40);
  }
}