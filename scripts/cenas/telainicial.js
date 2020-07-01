class TelaInicial {
  constructor(){    
    botaoGerenciador.botao.hide();   
    botaoRestart.botao.hide();
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
    //this._botao();
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
    text('Press any key\nClick/Touch to Play',width/2,height - 80);
  }
  
  _botao(){
    botaoGerenciador.draw();    
  }
}