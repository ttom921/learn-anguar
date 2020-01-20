import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DemoService } from '../service/demo.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formModel: FormGroup;
  isAuthenticated = false;//切換 登入前？登入後 頁面使用
  userInfo: any = {};
  constructor(
    private fb: FormBuilder,
    private demo: DemoService
  ) { }

  ngOnInit() {
    this.BuildForm();
  }
  BuildForm() {
    this.formModel = this.fb.group({
      "email": [
        this.userInfo.email,
        [
          Validators.required,
          Validators.minLength(3),
          Validators.pattern("^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$")
        ]
      ],
      "password": [
        this.userInfo.password,
        [
          Validators.required,
          Validators.minLength(4),
        ]
      ]
    });
  }
  onSubmit() {
    if (this.formModel.valid) {
      localStorage.setItem('token', JSON.stringify({
        email: this.formModel.value.email
      }));
      this.userInfo = this.formModel.value;
      if (this.demo.isAuthenticated()) {
        this.isAuthenticated = true;
      } else {
        this.isAuthenticated = false;
      }
    }
    //console.log(this.userInfo);
  }
  logout() {
    localStorage.removeItem('token');
    this.isAuthenticated = false;
  }
}
