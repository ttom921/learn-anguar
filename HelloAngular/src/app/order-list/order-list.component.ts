import { Component, OnInit } from '@angular/core';
import { UserListService } from '../service/user-list.service';

@Component({
  selector: 'order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss'],
  providers: [UserListService]//如果你在這里提供了providers配置，UserListService就不是全局單例了
})
export class OrderListComponent implements OnInit {
  userList: Array<any>;
  constructor(
    private userListService: UserListService
  ) { }

  ngOnInit() {
    this.getList();
  }
  getList() {
    this.userList = this.userListService.getUserList();
  }
}
