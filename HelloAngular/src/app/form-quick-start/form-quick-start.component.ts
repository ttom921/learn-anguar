import { Component, OnInit } from '@angular/core';
import { RegisterModel } from './model/register-model';

@Component({
  selector: 'form-quick-start',
  templateUrl: './form-quick-start.component.html',
  styleUrls: ['./form-quick-start.component.scss']
})
export class FormQuickStartComponent implements OnInit {
  regModel: RegisterModel = new RegisterModel();
  constructor() { }

  ngOnInit() {
  }
}
