import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of  } from 'rxjs';
import { ILoginCredentials } from '../models/login-credentials';
import { IRegisterRequest } from '../models/register-request';
import { IUser } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // baseUrl: string = 'http://localhost:3000';
  // tslint:disable-next-line:no-inferrable-types
  baseUrl: string = 'http://68.183.115.254:8081';

  constructor(private http: HttpClient) { }

  login(credentials: ILoginCredentials): Observable<any> {
    
    const header = new HttpHeaders();
    header.set('Access-Control-Allow-Origin', '*');
    header.set('asdas', 'sada');
    // const body = JSON.stringify(
    // {
    // title: "data" 
    // });
    // headers.append('Access-Control-Allow-Origin', '*');


    return this.http.post(this.baseUrl + '/api/auth/getAccessToken', credentials, { headers: header })
  }

  register(registerPayload: IRegisterRequest): Observable<any> {
    return this.http
      .post(this.baseUrl + '/api/adminRegistration/register', registerPayload);
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
}
