function setup() {
  createCanvas(960, 540);
  botaoGerenciador = new BotaoGerenciador('Iniciar',width/2,height/2,'jogo');
  botaoRestart = new BotaoGerenciador('Recomeçar',width/2,height/2,'jogo');
  telaInicial = new TelaInicial();
  jogo = new Jogo();
  jogo.setup();
  
  //frameRate(30);
  cenas = {
    jogo,
    telaInicial
  };
}

function keyPressed(){
  cenas[cenaAtual].keyPressed(key);
}

function mousePressed() {
  cenas[cenaAtual].mousePressed();
}

function touchStarted() {
  cenas[cenaAtual].touchStarted();
  return false;
}

function draw() {
  cenas[cenaAtual].draw();
}

