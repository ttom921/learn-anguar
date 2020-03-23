import { Component, OnInit, Optional, Self, SkipSelf, Host } from '@angular/core';
import { UserListService } from '../user-list/service/user-list.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit {
  constructor(
    @Host()
    @Optional()
    private userListService: UserListService,
  ) { }
  ngOnInit() {
  }
}
