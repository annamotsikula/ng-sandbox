import { AbstractControl, ValidationErrors } from "@angular/forms";

export function passwordValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;

    if (value) {
        const length = value.length >= 8;
        const lowerCase = /[a-z]/.test(value);
        const upperCase = /[A-Z]/.test(value);
        const numberChar = /[0-9]/.test(value);
        const symbolChar = /[@!#$%^&*(),.?":{}|<>]/.test(value);

        const valid = !length && !lowerCase && !upperCase && !numberChar && !symbolChar

        if(!valid) {
            return {
                minlength: !length,
                hasLowerCase: !lowerCase,
                hasUpperCase: !upperCase,
                numberChar: !numberChar,
                symbolChar: !symbolChar
            }
        }
    }

    return null

}