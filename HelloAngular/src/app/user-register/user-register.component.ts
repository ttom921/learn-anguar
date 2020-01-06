import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {
  //#region form相關
  formModel: FormGroup;
  userInfo: any = {};
  formErrors = {
    "email": "",
    "password": "",
    "confirmPassword": "",
    "formError": "",
    "vcode": ""
  };
  validationMessages = {
    "email": {
      "required": "郵箱必須輸入",
      "pattern": "請輸入正確的郵箱地址"
    },
    "password": {
      "required": "密碼必須輸入",
      "minlength": "密碼至少要8位"
    },
    "confirmPassword": {
      "required": "重覆密碼必須輸入",
      "minlength": "密碼至少要8位",
      "validateEqual": "兩次輸入的密碼不一樣"
    }
  }

  //#endregion form相關
  constructor(
    private fb: FormBuilder,
    private translate: TranslateService
  ) {
    this.translatevalidationMessagesproc();

  }
  translatevalidationMessagesproc() {
    this.translate.get('validationMessages').subscribe(value => {
      //console.log(value);
      this.validationMessages.email = value.email;
      //this.validationMessages.email.pattern = value.email.pattern;
    });
  }
  ngOnInit() {
    this.BuildForm();
  }
  BuildForm() {
    this.formModel = this.fb.group({
      "email": [
        this.userInfo.email,
        [
          Validators.required,
          Validators.pattern("^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$")
        ]
      ],
      "password": [
        this.userInfo.password,
        [
          Validators.required,
          Validators.minLength(8),
        ]
      ],
      "confirmPassword": [
        this.userInfo.password,
        [
          Validators.required,
          Validators.minLength(8),
        ]
      ],
    });
    this.formModel.valueChanges.subscribe(
      data => this.onValueChange(data)
    );
    this.onValueChange();
  }
  onValueChange(data?: any): void {
    if (!this.formModel) {
      return;
    }
    //檢查是否有錯誤和顯示錯誤訊息
    const form = this.formModel;
    for (const field in this.formErrors) {
      this.formErrors[field] = "";
      const control = form.get(field);
      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + " ";
        }
      }
    }
  }
  onSubmit(e) {
    //e.preventDefault();
    if (this.formModel.valid) {
      console.log('send to server');
      this.userInfo = this.formModel.value;
    } else {
      this.formErrors.formError = "有不合法的輸入";
    }

    console.log(this.userInfo);
  }
}
