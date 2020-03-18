import { Component, OnInit, Optional, Self, SkipSelf } from '@angular/core';
import { UserListService } from '../user-list/service/user-list.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  providers: [UserListService]
})
export class ChildComponent implements OnInit {
  constructor(
    @SkipSelf()
    @Optional()
    private userListService: UserListService,
  ) { }
  ngOnInit() {
  }
}
