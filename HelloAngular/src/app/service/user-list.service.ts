import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserListService {

  constructor() { }
  getUserList(): Array<any> {
    return [
      { userName: '大漠窮秋', age: 18 },
      { userName: '大漠窮秋', age: 18 },
      { userName: '大漠窮秋', age: 18 },
      { userName: '大漠窮秋', age: 18 },
      { userName: '大漠窮秋', age: 18 },
      { userName: '大漠窮秋', age: 18 },
    ];
  }

}
