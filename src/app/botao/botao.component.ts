import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-botao',
  templateUrl: './botao.component.html',
  styleUrls: ['./botao.component.css']
})
export class BotaoComponent {

  @Input('escrito') simbolo!: string;
  @Output('saida') valor: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }


  clicked() {
    this.valor.emit(this.simbolo);
  }
}
