import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { JokesComponent } from './jokes.component';

@Injectable({
  providedIn: 'root'
})
export class JokesGuard implements CanDeactivate<any> {
  canDeactivate(component: JokesComponent) {
    console.log(component);
    if (!component.saved) {
      return window.confirm("確定不保存嗎？");
    }
    return true;
  }

}
