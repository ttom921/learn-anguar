import { Component, OnInit, Input } from '@angular/core';
import { FieldBase } from './form-field';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.scss']
})
export class FormControlComponent implements OnInit {

  @Input() field: FieldBase<any>;
  @Input() form: FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
