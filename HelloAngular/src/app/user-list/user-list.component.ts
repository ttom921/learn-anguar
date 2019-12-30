import { Component, OnInit } from '@angular/core';
import { UserListService } from '../service/user-list.service';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  userList: Array<any>;
  constructor(
    private userListService: UserListService
  ) { }

  ngOnInit() {
    this.userList = this.userListService.getUserList();
  }
  setList() {
    let data: Array<any> = [
      { userName: '大漠穷秋', age: 18 },
      { userName: '大漠穷秋', age: 18 },
      { userName: '大漠穷秋', age: 18 },
      { userName: '大漠穷秋', age: 18 },
      { userName: '大漠穷秋', age: 18 },
    ];
    this.userList = data;
    this.userListService.setUserList(data);
  }

}
