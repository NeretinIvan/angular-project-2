import { Injectable } from '@angular/core';

@Injectable()
export class TimerService {
  constructor() {}

  public start() {
    const timerOutputElement = document.querySelector('#timer-output');
    let counter: number = 0;
    setInterval(() => {
      timerOutputElement.innerHTML = `${counter++}`;
    }, 1000);
  }
}
