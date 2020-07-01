class Jogo {
  constructor() {
    this.inimigoAtual = 0;
    this.gameover = false;
    this.mapa = fita.level1;
    this.loop = 0;
    this.level = 0;
    this.indice = 0;
    this.qtdInimigos = 0;
    this.tempoReady = 0;
  }

  setup() {
    cenario = new Cenario(imagemCenario, 0);
    cenario2 = new Cenario(imagemCenario2, 2);
    cenario3 = new Cenario(imagemCenario3, 4);
    cenario4 = new Cenario(imagemCenario4, 6);
    cenario5 = new Cenario(imagemCenario5, 8);
    cenario6 = new Cenario(imagemCenario6, 12);
    pontuacao = new Pontuacao();

    personagem = new Personagem(matrizPersonagem, imagemPersonagem, 120, chao, 120, 150, 240, 320, [20, 20, 60, 90]);

    vida = new Vida(fita.configuracoes.vidaMaxima, fita.configuracoes.vidaInicial);

    frameRate(30);
  }

  keyPressed(key) {
    if (!this.gameover) {
      if (key !== 'ArrowDown') {
        personagem.pula();
      }
    }else{
      if (personagem.y > personagem.yInicial)
        this.restart();
    }
  }

  mousePressed() {
    if (!this.gameover) {
      if (mouseX < width/2){
        personagem.pula();
      }
    }else{
      if (personagem.y > personagem.yInicial)
        this.restart();
    }
  }
  
  touchStarted() {
    if (!this.gameover) {
      personagem.pula();
    }else{
      if (personagem.y > personagem.yInicial)
        this.restart();
        //cenaAtual='telaInicial';
    }
    return false;
  }

  criaInimigo(bloco) {
    while (inimigos.length > 0) {
      inimigos.pop();
    }
    
    for(let j=0;j<bloco.inimigo.length;j++){
      const idx = bloco.inimigo[j];
      const velo = bloco.velocidade[j] * this.loop;
      const delay = bloco.delay[j];
      
      const inimigo = new Inimigo(
        matrizFramesInimigos[idx], 
        inimigosSprites[idx], 
        width - listaInimigos[idx]["largura"], listaInimigos[idx]["chao"], 
        listaInimigos[idx]["largura"], listaInimigos[idx]["altura"], 
        listaInimigos[idx]["larguraO"], listaInimigos[idx]["alturaO"], 
        [listaInimigos[idx]["maskX"], listaInimigos[idx]["maskY"], 
         listaInimigos[idx]["maskW"], listaInimigos[idx]["maskH"]], 
        velo, delay, 
        listaInimigos[idx]["tipo"], 
        listaInimigos[idx]["score"]);
      
      inimigos.push(inimigo);
      this.qtdInimigos++;
    }
    //console.log(inimigos);
  }

  draw() {
    //desenhando tela
    cenario.exibe();
    cenario2.exibe();
    cenario3.exibe();
    cenario4.exibe();
    cenario5.exibe();

    inimigos.forEach(inimigo => {
      inimigo.exibe();
    })
    personagem.exibe();
    
    cenario6.exibe();
    
    noStroke();
    fill("#fff");
    rect(0,0, width, 63);
    fill("#949494");
    rect(0,0, width, 60);
    fill("#fff");
    vida.exibe();
    strokeWeight(4);
    stroke(51);
    pontuacao.exibe();
    
    //Movimentação e lógica
    personagem.aplicaGravidade();

    if (keyIsDown(DOWN_ARROW) || (mouseIsPressed && mouseX >= width/2)){
      personagem.rasteja();
    }else{
      personagem.levanta();
    }

    if (!this.gameover) {
      cenario.move(this.loop);
      cenario2.move(this.loop);
      cenario3.move(this.loop);
      cenario4.move(this.loop);
      cenario5.move(this.loop);
      cenario6.move(this.loop);
      //pontuacao.adicionarPonto();
      
      if (this.tempoReady > 0){
        this.tempoReady--;
        textAlign(CENTER);
        text("Round "+this.loop+"-"+this.level+"\nReady",width/2,height/2);
      }else{
        for (let i = 0; i < inimigos.length; i++) {
          inimigos[i].move();

          const inimigoVisivel = (inimigos[i].x >= -inimigos[i].largura);
          if (!inimigoVisivel && !inimigos[i].dead) {
            this.qtdInimigos--;
            inimigos[i].dead = true;
            if(inimigos[i].tipo=="inimigo" && !inimigos[i].hit){
              pontuacao.addPts(inimigos[i].score);
            }
          }

          if (personagem.estaColidindo(inimigos[i])) {
            if(inimigos[i].tipo == "inimigo"){
              vida.perdeVida(1);
              somDoHit.play();
              inimigos[i].hit = true;
              if (vida.vidas <= 0) {
                this.gameover = true;
                personagem.morre();
              } else {
                personagem.ficaInvencivel();
              }
            }else if (!inimigos[i].captured){
              somDoItem.play();
              inimigos[i].captured = true;
              pontuacao.addPts(inimigos[i].score);
            }
          }
        }

        if (this.qtdInimigos <= 0) {
          this.indice++;
          if (this.indice > this.mapa.length - 1) {
            this.changeLoop();
          }

          this.criaInimigo(this.mapa[this.indice]);
        }
      }

    } else {
      image(imagemGameOver, width / 2 - 400, height / 3 - 100);
      somDoJogo.pause();
      if (personagem.y > personagem.yInicial){
        textAlign(CENTER);
        text("Press Any Key to Restart",width/2,height - 50);
      }
      //botaoRestart.draw();
    }

  }
  
  changeLoop(){    
    this.indice = 0;
    this.level += 1;
    if(this.level > parseInt(fita.configuracoes.levels)){
      this.level = 1;
      this.loop++;
    }
    this.mapa = fita["level"+this.level];
    this.tempoReady = 50;
  }

  restart() {
    this.gameover = false;
    vida.defineVida(3);
    this.indice = 0;
    inimigos.forEach(inimigo => {
      inimigo.x = -inimigo.largura;
      inimigo.dead = true;
    });
    this.qtdInimigos = 0;
    pontuacao.restart();
    personagem.restart();
    somDoJogo.loop();  
    this.tempoReady = 50;
    this.loop = 1;    
    this.level = 1;    
    this.mapa = fita["level"+this.level];
    this.criaInimigo(this.mapa[this.indice]);
  }
}