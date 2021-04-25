import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  IAuthRequest,
  ICredentials,
  IUser,
  IValidateAccessTokenResponse,
} from '@auth-module-models-barrel';
import { LocalStorageService } from './local-storage.service';
import { buildQueryString } from '@shared/helpers/functions';
import * as moment from 'moment';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // tslint:disable-next-line:no-inferrable-types
  // baseUrl: string = 'http://68.183.115.254:8081'; // 'http://127.0.0.1:4200';
  // tslint:disable-next-line:no-inferrable-types
  baseUrl: string = '';
  // tslint:disable-next-line:no-inferrable-types
  // baseUrl: string = 'http://68.183.115.254:8081';

  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService
  ) {}

  login(credentials: IAuthRequest): Observable<ICredentials> {
    // return this.getUser();

    return this.http.post<ICredentials>(
      this.baseUrl + '/api/auth/getAccessToken',
      credentials
    );
  }

  register(registerPayload: any): Observable<any> {
    return this.http.post(
      this.baseUrl + '/api/adminRegistration/register',
      registerPayload
    );
  }

  logout(): Observable<any> {
    return this.http.get(`/api/auth/logout`);
  }

  validateAcceessToken(): Observable<IValidateAccessTokenResponse> {
    const accessToken = this.localStorageService.getObject('ml_token');
    const queryString = buildQueryString({ accessToken });
    return this.http.get<IValidateAccessTokenResponse>(
      `${this.baseUrl}/api/auth/validateAccessToken?${queryString}}`
    );
  }

  public getUser(): Observable<IUser> {
    return of({
      id: 123123,
      username: 'jogn',
      email: 'jorj.tsere@gmail.com',
      is_admin: true,
      name: 'John',
      lastName: 'Smith',
    });
  }

  // not working
  // private setSession(authResult) {
  //   const expiresAt = moment().add(authResult.expiresIn, 'second');
  //   console.log(moment(expiresAt).format());

  //   local_Storage.setItem('id_token', authResult.idToken);
  //   local_Storage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
  // }

  // getExpiration() {
  //   const expiration = local_Storage.getItem('expires_at');
  //   const expiresAt = JSON.parse(expiration);
  //   return moment(expiresAt);
  // }
}
