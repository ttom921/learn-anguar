import { Injectable, Inject } from '@angular/core';
import { UUID } from 'angular2-uuid';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserListService {
  private _id: string;
  get id(): string {
    return this._id;
  }
  constructor(@Inject(HttpClient) private http) {
    this._id = UUID.UUID();
  }
  getUserlist(): Array<any> {
    return [
      { userName: "大漠窮秋", age: 18 },
      { userName: "大漠窮秋", age: 18 },
      { userName: "大漠窮秋", age: 18 },
      { userName: "大漠窮秋", age: 18 },
      { userName: "大漠窮秋", age: 18 },
      { userName: "大漠窮秋", age: 18 }
    ];
  }

}
