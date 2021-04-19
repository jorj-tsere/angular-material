import { AbstractControl } from '@angular/forms';

export function mailValidator(
    control: AbstractControl
): { [key: string]: any } | null {
    const ctonrol_value = control.value || '';
    const mailValidatorRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const is_valid = mailValidatorRegex.test(String(ctonrol_value).toLowerCase());
    if (is_valid) {
        return null;
    }
    return { invalid_format: 'ivalid mail format' };
}
