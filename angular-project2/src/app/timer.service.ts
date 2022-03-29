import { Injectable, Inject } from '@angular/core';
import { DOCUMENT, SET_INTERVAL_FUNCTION } from './app.module';

export interface DocumentInterface {
  querySelector(tag: string);
}
export type SetIntervalFunction = (callback: () => void, ms: number, ...args: any[]) => any;

@Injectable()
export class TimerService {
  constructor(
    @Inject(DOCUMENT) private document: DocumentInterface,
    @Inject(SET_INTERVAL_FUNCTION) public setInterval: SetIntervalFunction
  ) {}

  public start() {
    const timerOutputElement = this.document.querySelector('#timer-output');
    let counter: number = 0;
    this.setInterval(() => {
      timerOutputElement.innerHTML = `${counter++}`;
    }, 1000);
  }
}
