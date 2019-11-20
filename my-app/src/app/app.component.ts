import { Component } from '@angular/core';

enum Rafed1 {
  chaewon = 2,
  maxime = 3,
  leon = 'string',
  dusing = 'string2'
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'my-app';
  rafed: Rafed1;
  constructor() { }
  math: BigInteger;
  //rafed = '';

  public method() {
    this.rafed.toString();
  }
}
