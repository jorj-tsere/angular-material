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
import { environment } from '@env';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService
  ) {}

  login(credentials: IAuthRequest): Observable<ICredentials> {
    // return this.getUser();

    console.log('credentials', credentials);

    return this.http.post<ICredentials>(
      environment.baseUrl + '/api/auth/getAccessToken',
      credentials
    );
  }

  register(registerPayload: any): Observable<any> {
    return this.http.post(
      environment.baseUrl + '/api/adminRegistration/register',
      registerPayload
    );
  }

  logout(): Observable<any> {
    return this.http.get(`/api/auth/logout`);
  }

  validateAcceessToken(): Observable<IValidateAccessTokenResponse> {
    const mlToken = this.localStorageService.getObject('ml_token') as any;
    console.log('accessToken', mlToken)
    const queryString = buildQueryString({ accessToken: mlToken.accessToken });
    console.log('queryString', queryString)
    return this.http.get<IValidateAccessTokenResponse>(
      `${environment.baseUrl}/api/auth/validateAccessToken?${queryString}}`
    );
  }

  // public getUser(): Observable<IUser> {
  //   return of({
  //     id: 123123,
  //     username: 'jogn',
  //     email: 'jorj.tsere@gmail.com',
  //     is_admin: true,
  //     name: 'John',
  //     lastName: 'Smith',
  //   });
  // }

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
