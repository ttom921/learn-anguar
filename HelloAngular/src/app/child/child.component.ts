import { Component, OnInit, Self } from '@angular/core';
import { UserListService } from '../user-list/service/user-list.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  providers: [UserListService]
})
export class ChildComponent implements OnInit {

  constructor(
    @Self() private userListService: UserListService,
  ) { }

  ngOnInit() {
  }

}
