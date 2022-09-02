import {Component, NgIterable} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculadora';
  input: string = '';

  form: FormGroup;

  get visores() {
    return this.form.get('visores')?.value as (FormArray & NgIterable<FormArray>) | undefined | null
  }

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      "visores": fb.array([])
    })
  }

  btnNumberClicked(evento: string) {
    this.input += evento;
  }

  btnEqualClicked($event: string) {
    let array = this.form.get('visores') as FormArray
    array.push(new FormControl(' '))
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
}
