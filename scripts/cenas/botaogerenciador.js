class BotaoGerenciador{
  constructor(texto,x,y,cena){
    this.texto = texto;
    this.x = x;
    this.y = y;
    this.botao = createButton(this.texto);
    this.botao.mousePressed(() => this._alteraCena(cena));
    this.botao.addClass('botao-tela-inicial');
  }
  
  draw(){    
    this.botao.show();
    this.botao.position(this.x,this.y);
    this.botao.center();
  }
  
  _alteraCena(cena){
    this.botao.hide();
    cenaAtual=cena;
    jogo.restart();
  }
}