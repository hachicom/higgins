let imagemCenario;
let imagemCenario2;
let imagemCenario3;
let imagemCenario4;
let imagemCenario5;
let imagemCenario6;
let imagemPersonagem;
let imagemVida;
let imagemInimigo;
let imagemInimigoGrande;
let imagemInimigoVoador;
let imagemGameOver;
let imagemTitulo;
let imagemTelaInicial;
let fonteTelaInicial;
let somDoPulo;
let somDoHit;
let somDoItem;

let cenario;
let cenario2;
let cenario3;
let cenario4;
let cenario5;
let cenario6;
let somDoJogo;
let personagem;
let inimigo;
let inimigoGrande;
let inimigoVoador;
let pontuacao;
let vida;
let telaInicial;
let jogo;
let botaoGerenciador;
let botaoRestart;

let cenaAtual = 'telaInicial';
let cenas;
let fita;
let listaInimigos;

const matrizPersonagem = [
  [0, 0], 
  [0, 0], 
  [240, 0], 
  [240, 0], 
  [480, 0], 
  [480, 0], 
  [720, 0], 
  [720, 0], 
  [0, 320], 
  [0, 320], 
  [240, 320], 
  [240, 320], 
  [480, 320], 
  [480, 320], 
  [720, 320], 
  [720, 320], 
  //[0, 640], 
  //[0, 640], 
  //[240, 640],
  //[240, 640],
];

const matrizPersonagemPulando = [[0, 640]];
const matrizPersonagemCaindo = [[240, 640]];
const matrizPersonagemMorrendo = [[480, 640]];

const matrizFramesInimigos = [[
  [0, 0], [186, 0], [372, 0], [558, 0], [0, 120], [186, 120], [372, 120], [0, 0], [186, 0], [372, 0], [558, 0], [0, 120], [186, 120], [372, 120], [558, 120], [0, 240], [186, 240], [372, 240], [558, 240]
],[
  [0, 0], [320, 0], [640, 0], [960, 0],
],[
  [0,0],
],[
  [0,0],
]];

const inimigos = [];
const inimigosSprites = [];

const chao  = 60;