function preload(){  
  imagemCenario = loadImage('imagens/cenario/cenario1.png');
  imagemCenario2 = loadImage('imagens/cenario/cenario2.png');
  imagemCenario3 = loadImage('imagens/cenario/fundo1.png');
  imagemCenario4 = loadImage('imagens/cenario/cenario4.png');
  imagemCenario5 = loadImage('imagens/cenario/fundo5.png');
  imagemCenario6 = loadImage('imagens/cenario/frente.png');
  imagemGold = loadImage('imagens/assets/gold.png');
  imagemVida = loadImage('imagens/assets/vida.png');
  imagemPersonagem = loadImage('imagens/personagem/higgins.png');
  imagemInimigo = loadImage('imagens/inimigos/armadilha.png');
  imagemInimigoGrande = loadImage('imagens/inimigos/pedra.png');
  imagemInimigoVoador = loadImage('imagens/inimigos/tronco.png');
  imagemItemGold = loadImage('imagens/assets/gold.png');
  imagemTitulo = loadImage('imagens/assets/titulo.png');
  imagemGameOver = loadImage('imagens/assets/game-over.png');
  somDoJogo = loadSound('sons/trilha_jogo.mp3');
  somDoPulo = loadSound('sons/jump.mp3');
  somDoHit = loadSound('sons/hit.mp3');
  somDoItem = loadSound('sons/collect.mp3');
  fita = loadJSON('cartuchos/fita.json');
  listaInimigos = loadJSON('cartuchos/inimigos.json');
    
  imagemTelaInicial = loadImage('imagens/cenario/tela_inicial.png');
  fonteTelaInicial = loadFont('imagens/assets/yikes.ttf');
  
  inimigosSprites.push(imagemInimigo);
  inimigosSprites.push(imagemInimigoGrande);
  inimigosSprites.push(imagemInimigoVoador);
  inimigosSprites.push(imagemItemGold);
}