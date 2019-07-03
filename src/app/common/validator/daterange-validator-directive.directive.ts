import { Directive, Input } from '@angular/core';
import { Validator, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

@Directive({
  selector: '[appDaterangeValidatorDirective]'
})
export class DaterangeValidatorDirectiveDirective implements Validator {

  @Input('appDateRange') dateRange: Date;

  validate(c: AbstractControl): ValidationErrors {
    throw new Error("Method not implemented.");
    //this.validator = dateRangeValidator(emailBlackList);
  }
  registerOnValidatorChange?(fn: () => void): void {
    throw new Error("Method not implemented.");
  }

}

export function dateRangeValidator(startDate: Date, endDate: Date): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    var valid = true;
    if (startDate.getTime() >= endDate.getTime()) {
      valid = false;
    }
    return valid ? { 'dateRange': { value: control.value } } : null;
  };
}
