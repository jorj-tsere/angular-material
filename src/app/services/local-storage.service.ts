import { Injectable } from '@angular/core';

import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor(public jwtHelper: JwtHelperService) {}

  getItem(localStorageKey: string): string {
    if (typeof localStorageKey !== 'string') {
      throw new Error(
        '[LocalStorageService getObject] parameter localStorageKey must be string type'
      );
    }
    return localStorage.getItem(localStorageKey);
  }

  getObject(localStorageKey: string): object {
    if (typeof localStorageKey !== 'string') {
      throw new Error(
        '[LocalStorageService getObject] parameter localStorageKey must be string type'
      );
    }
    return JSON.parse(localStorage.getItem(localStorageKey));
  }

  readToken() {
    return this.getObject('ml_token') && this.jwtHelper.decodeToken(this.jwtHelper.tokenGetter());
  }

  setItem(
    localStorageKey: string,
    localStorageValue: string,
    forceOverride: boolean = false
  ): void {
    if (localStorage.getItem(localStorageKey) !== null && !forceOverride) {
      throw new Error(
        `[LocalStorageService setItem] parameter ${localStorageKey} already exists. Use [forceOverride] parameter`
      );
    } else if (typeof localStorageValue !== 'string') {
      throw new Error(
        `[LocalStorageService setItem] parameter ${localStorageKey} value is not type of string`
      );
    } else if (!localStorageValue.length) {
      throw new Error(
        `[LocalStorageService setItem] parameter ${localStorageKey} value is empty`
      );
    }

    localStorage.setItem(localStorageKey, localStorageValue);
  }

  setObjectItem(
    localStorageKey: string,
    localStorageValue: object,
    forceOverride: boolean = false
  ): void {
    if (localStorage.getItem(localStorageKey) !== null && !forceOverride) {
      throw new Error(
        `[LocalStorageService setObjectItem] parameter ${localStorageKey} already exists. Use [forceOverride] parameter`
      );
    } else if (typeof localStorageValue !== 'object') {
      throw new Error(
        `[LocalStorageService setObjectItem] parameter ${localStorageKey} value is not type of object`
      );
    }

    localStorage.setItem(localStorageKey, JSON.stringify(localStorageValue));
  }

  removeItem(localStorageKey: string): void {
    if (localStorage.getItem(localStorageKey) === null) {
      throw new Error(
        `[LocalStorageService removeItem] parameter ${localStorageKey} does not exists.`
      );
    }
    localStorage.removeItem(localStorageKey);
  }
}
