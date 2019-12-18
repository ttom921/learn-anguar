import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'form-quick-start',
  templateUrl: './form-quick-start.component.html',
  styleUrls: ['./form-quick-start.component.scss']
})
export class FormQuickStartComponent implements OnInit {
  userName: string;
  constructor() { }

  ngOnInit() {
  }
  userNameChange(event) {
    this.userName = event.target.value;
  }
}
