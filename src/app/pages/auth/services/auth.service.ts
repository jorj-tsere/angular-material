import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { buildQueryString } from 'app/@shared/helpers/functions';
import axios from 'axios';
import * as moment from 'moment';
import { Observable, of } from 'rxjs';
import { IAuthResponse, IValidateAccessTokenResponse } from '../models';
import { IAuthRequest } from '../models/auth-request';
import { IRegisterRequest } from '../models/register-request';
import { IUser } from '../models/user';

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

  constructor(private http: HttpClient) {}

  // login(credentials: IAuthRequest): Observable<IAuthResponse> {

  //   return this.getUser();

  //   // return this.http.post<IAuthResponse>(
  //   //   this.baseUrl + '/api/auth/getAccessToken',
  //   //   credentials
  //   // );
  // }

  login(credentials: IAuthRequest): Observable<any> {

    return this.getUser();

    // return this.http.post<IAuthResponse>(
    //   this.baseUrl + '/api/auth/getAccessToken',
    //   credentials
    // );
  }

  register(registerPayload: IRegisterRequest): Observable<any> {
    return this.http.post(
      this.baseUrl + '/api/adminRegistration/register',
      registerPayload
    );
  }

  validateAcceessToken(): Observable<IValidateAccessTokenResponse> {
    const accessToken = JSON.parse(localStorage.getItem('ml_token'));
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
  private setSession(authResult) {
    const expiresAt = moment().add(authResult.expiresIn, 'second');
    console.log(moment(expiresAt).format());

    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
  }
  // not working
  public isLoggedIn() {
    return moment().isBefore(this.getExpiration());
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  getExpiration() {
    const expiration = localStorage.getItem('expires_at');
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }
}
