import { Component, OnInit, Injector, ReflectiveInjector } from '@angular/core';
import { UserListService } from './service/user-list.service';
import { TestService } from './service/test.service';
@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  userList: Array<any>;
  //這里我們沒有在構建函數里面定義userListService，Angular不會自動注射
  userListService: UserListService;
  private reflectiveInjector: ReflectiveInjector;
  private testService: TestService;
  constructor(
    private injector: Injector
  ) {
    console.log(this.userListService);
    console.log(this.injector);
  }
  ngOnInit() {
    //嘗試自已手動創建userListService實例
    this.userListService = this.injector.get(UserListService);
    console.log(this.userListService);
    this.userListService.getUserlist().subscribe((userList: Array<any>) => {
      this.userList = userList;
    });

    //嘗試自已創建注射器，然後利用注射器自已注射TestService服務實例
    let myInjector = ReflectiveInjector.resolveAndCreate([
      { provide: "TestService", useClass: TestService }
    ]);

    console.log(myInjector);
    this.testService = myInjector.get("TestService");
    console.log(this.testService);
  }
}
