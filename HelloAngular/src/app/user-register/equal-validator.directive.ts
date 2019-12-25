import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[validateEqual]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: EqualValidator, multi: true }
  ]
})
export class EqualValidator implements Validator {
  @Input() validateEqual: string;
  @Input() reverse: boolean;

  validate(control: AbstractControl): ValidationErrors {
    let selfValue = control.value;
    let targetControl = control.root.get(this.validateEqual);
    if (targetControl && selfValue !== targetControl.value) {
      if (!this.reverse) {
        return {
          validateEqual: false
        }
      } else {
        targetControl.setErrors({
          validateEqual: false
        })
      }
    } else {
      targetControl.setErrors(null);
    }
    return null;
  }
  constructor() { }
}
