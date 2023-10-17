import { Component } from '@angular/core';
//import { AppComponent } from '../app.component';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-counter',
  template: `
  <h3>
  Counter: {{ counter }}
</h3>

<button (click)="increaseBy(+1)">+1</button>
<button (click)="resetNumber(10)">Reset</button>
<button (click)="decreaseBy(-1)">-1</button>

  `
})

export class CounterComponent {
  public counter: number = 10;

  increaseBy( value: number ):void {
    this.counter += value;
  }

  decreaseBy( value: number ):void {
    this.counter += value;
  }

  resetNumber( value: number ):void {
    this.counter = value;
  }

}
