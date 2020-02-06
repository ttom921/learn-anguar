import { Component, OnInit } from '@angular/core';
import { UserListService } from './service/user-list.service';
import { LiteralService } from './service/literal.service';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  userList: Array<any>;
  constructor(
    private userListService: UserListService,
    private literalService: LiteralService
  ) { }

  ngOnInit() {
    this.userList = this.userListService.getUserlist();
  }

}
