import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  canLoad(): boolean {
    //Http調用後端服務檢查授權
    return true;
  }
  canActivate(): boolean {
    //Http調用後端服務檢查授權
    return true;
  }
}
