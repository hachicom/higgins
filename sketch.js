function setup() {
  createCanvas(960, 540);
  telaInicial = new TelaInicial();
  telaTutorial = new TelaTutorial();
  telaMission = new TelaMission();
  jogo = new Jogo();
  jogo.setup();
  
  //frameRate(30);
  cenas = {
    jogo,
    telaInicial,
    telaTutorial,
    telaMission
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

