import { Directive, Input } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[ChineseMobileValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: ChineseMobileValidator,
      multi: true
    }
  ]
})
export class ChineseMobileValidator implements Validator {
  @Input() ChineseMobileValidator: string;
  constructor() { }
  validate(control: AbstractControl): { [error: string]: any } {
    let val = control.value;
    let flag = /^1(3|4|5|6|7|8)\d{9}$/.test(val);
    console.log(flag);
    if (flag) {
      control.setErrors(null);
    } else {
      control.setErrors({ ChineseMobileValidator: false });
      return { ChineseMobileValidator: false };
    }
  }
}
