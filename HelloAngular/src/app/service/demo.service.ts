import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { DemodependService } from './demodepend.service';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DemoService {
  protected value = "Hi Clover";
  constructor(private depServ: DemodependService) { }
  getValue() { return this.value; }
  getObservableValue() { return of('observable Clover'); }
  getPromiseValue() { return Promise.resolve("promise value"); }
  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }
  /**
   * show DemodependService value.
   */
  showDepValue() {
    return this.depServ.giveValue();
  }
  //rxjs style
  asyncAuthecticated(): Observable<boolean> {
    return of(!!localStorage.getItem('token'))
      .pipe(delay(3000));
  }
}
