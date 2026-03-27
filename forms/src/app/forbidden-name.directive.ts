import { Directive, forwardRef, input } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from "@angular/forms";

export function forbiddenNameValidator(name: RegExp) : ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const forbidden = name.test(control.value);
        return forbidden ? { forbiddenName: {value: control.value}} : null;
    }
}

@Directive({
    selector: '[appForbiddenName]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: forwardRef(() => ForbiddenValidatorDirective),
        multi: true
    }]
})
export class ForbiddenValidatorDirective implements Validator {

    readonly forbiddenName = input<string>('', {alias: 'appForbiddenName'});

    validate(control: AbstractControl): ValidationErrors | null {
        return this.forbiddenName ? forbiddenNameValidator(new RegExp(this.forbiddenName(), 'i'))(control) : null;
    }
    
}