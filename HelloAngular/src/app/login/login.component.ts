import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DemoService } from '../service/demo.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  title = '標題';
  formModel: FormGroup;
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
  onSubmit(e) {
    if (this.formModel.valid) {
      this.userInfo = this.formModel.value;
      if (this.demo.isAuthenticated()) {
        alert('login success');
      } else {
        alert('login failed');
      }
    }
    //console.log(this.userInfo);
  }
}
