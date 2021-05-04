import { AbstractControl } from '@angular/forms';
import { HttpResponseMessage } from '@shared/models/http-response-message';

/**
 *
 * @param {AbstractControl} control
 * @returns {object || null} returns invalid object key or null if valid
 */
export function mailValidator(
  control: AbstractControl
): { [key: string]: any } | null {
  const ctonrolValue = control.value || '';
  const mailValidatorRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const isValid = mailValidatorRegex.test(String(ctonrolValue).toLowerCase());
  if (isValid) {
    return null;
  }
  return { invalid_format: 'ivalid mail format' };
}

export function messageTranslator(messageType: number): string {
  const messageTypes = {
    1: 'success',
    2: 'warning',
    3: 'info',
    4: 'error',
  };

  return messageTypes[messageType] || null;
}
