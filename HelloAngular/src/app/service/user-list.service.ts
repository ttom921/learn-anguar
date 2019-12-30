import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserListService {
  userList: Array<any>;
  constructor() { }
  getUserList(): Array<any> {
    return this.userList;
  }
  setUserList(newList: Array<any>) {
    this.userList = newList;
  }
}
