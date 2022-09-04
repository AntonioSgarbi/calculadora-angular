import {Component} from '@angular/core';

class Sentence {
  input: string;
  output: number;

  constructor(input: string, output: number) {
    this.input = input;
    this.output = output;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculadora';
  input: string = '';

  results: Sentence[] = [];

  constructor() { }

  btnNumberClicked(target: any) {
    console.log(target.innerHTML)
    this.input += target.innerHTML;
  }

  btnEqualsClicked() {
    let entradas = this.input.split(' ');
    let result = this.calculate(parseFloat(entradas[0]), parseFloat(entradas[2]), entradas[1]);
    this.results.push(new Sentence(this.input, result));

    this.input = '';
  }

  calculate(first: number, second: number, action: string): number {

    switch (action) {
      case '+':
        return first + second;
      case '-':
        return first - second;
      case '*':
        return first * second;
      case '/':
        return first / second;
      case '⌫':
        this.input = this.input.substring(0, this.input.length - 1);
        break;
    }

    return 0;
  }

  btnActionClicked(target: any) {
    switch (target.innerHTML) {
      case '+':
        this.input += ' + '
        break;
      case '-':
        this.input += ' + '
        break;
      case '*':
        this.input += ' + '
        break;
      case '/':
        this.input += ' + '
        break;
      case '%':
        this.input += ' + '
        break;
      case 'x²':
        this.input += ' + '
        break;
      case '√':
        this.input += ' + '
        break;
      case '⌫':
        this.input = this.input.substring(0, this.input.length - 1);
        break;
    }

  }

  btnClearClicked() {
    this.results = [];
    this.input = '';
  }
}
