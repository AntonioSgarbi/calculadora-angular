import {Component, NgIterable} from '@angular/core';
import {FormArray, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculadora';
  input: string = '';

  valorVisivel?: string;
  valorCalculado?: string;

  form: FormGroup;

  get historyValues(): string[] {
    return this.form.get('history')?.value
  }

  get historyForms() {
    return this.form.get('history') as (FormArray & NgIterable<FormArray>) | undefined | null
  }

  constructor() {
    this.form = new FormGroup({
      "history": new FormArray(new Array<FormControl>())
    });
  }

  historyValueByIndex(index: number): string {
    return this.form.get(['history', index])!.value
  }

  historyControlByIndex(index: number): FormControl {
    return this.form.get(['history', index]) as FormControl
  }

  btnNumberClicked(evento: string) {
    console.log(this.historyValues)
    this.input += evento;
  }

  btnEqualsClicked() {
    let array = this.historyForms

    this.valorVisivel = this.input;

    this.valorVisivel.concat(this.valorCalculado!)
    this.valorVisivel.concat(' = ')

    if(array?.length == 0) {
      array!.push(new FormControl())
      console.log(array)

      this.historyControlByIndex(0).patchValue(this.valorVisivel)

      console.log(this.historyControlByIndex(0))

    } else {
      array!.push(new FormControl(this.valorVisivel))
    }

    this.input = '';
    this.valorVisivel = '';
  }

  btnActionClicked(action: string) {
    switch (action) {
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
    this.form.reset();
  }
}
