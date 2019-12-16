import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, CanActivateChild } from '@angular/router';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad, CanActivate, CanActivateChild {
  constructor(private authService: AuthService) {

  }
  /**
   * 驗証是否有權限加載一個異步模塊
   * @returns
   * @memberof AuthGuard
   */
  canLoad() {
    //在真實的應用里面需要寫一個Service到後端去驗証權限
    return this.authService.canLoad();
  }
  /**
   * 驗証路由是否可以激活
   *
   * @returns
   * @memberof AuthGuard
   */
  canActivate() {
    //在真實的應用里面需要寫一個Service到後端去驗証權限
    return this.authService.canActivate();
  }
  /**
   * 驗証子路由是否可以激活
   *
   * @returns
   * @memberof AuthGuard
   */
  canActivateChild() {
    //在真實的應用里面需要寫一個Service到後端去驗証權限
    return true;
  }
}
