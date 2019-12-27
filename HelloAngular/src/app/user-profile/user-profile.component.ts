import { Component, OnInit, Input } from '@angular/core';
import { FieldBase, Textbox, TextArea, Image } from './dynamic-form/form-field';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  @Input() fields: FieldBase<any>[] = [
    new Image({
      src: "assets/imgs/1.jpg",
      key: "imge"
    }),
    new Textbox({
      label: "頭像：",
      placeholder: "上傳頭像",
      type: "file",
      key: "headimg"
    }),
    new Textbox({
      label: "常用郵箱",
      placeholder: "常用郵箱",
      key: "email",
    }),
    new Textbox({
      label: "密碼",
      placeholder: "密碼至少8位",
      type: "password",
      key: "password",
    }),
    new Textbox({
      label: "重覆密碼",
      placeholder: "重覆密碼",
      type: "password",
      key: "repassword",
    }),
    new TextArea({
      label: "個人簡介",
      placeholder: "個人簡介，最多140字，不能放鏈接",
      rows: 3,
      key: "resume"
    }),
  ];
  form: FormGroup
  error: Error;
  // srcList: any[] = [
  //   {
  //     roleId: "1",
  //     roleName: "系統管理員"
  //   },
  //   {
  //     roldeId: "2",
  //     roleName: "簽約作者"
  //   }
  // ];
  // selectedList: any[] = [
  //   {
  //     roldeId: "2",
  //     roleName: "默認權限"
  //   }
  // ];
  constructor() { }

  ngOnInit() {
    this.form = this.toFromGrop(this.fields);
  }
  toFromGrop(fields: FieldBase<any>[]): any {
    let group: any = {};
    fields.forEach(field => {
      group[field.key] = new FormControl(field.value || "");
    });
    return new FormGroup(group);
  }
  save() {
    //console.log(this.form);
    console.log(this.form.value);
  }
}
