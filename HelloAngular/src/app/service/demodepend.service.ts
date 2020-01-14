import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemodependService {
  value = "Hello World";
  constructor() { }
  giveValue(): string {
    return this.value;
  }
}
