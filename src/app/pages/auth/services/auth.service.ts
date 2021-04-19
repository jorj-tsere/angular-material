import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { catchError, switchMap, tap } from 'rxjs/operators';
import { ILoginCredentials } from '../models/login-credentials';
import { IRegisterRequest } from '../models/register-request';
import { IUser } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // tslint:disable-next-line:no-inferrable-types
  baseUrl: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  login(credentials: ILoginCredentials): Observable<any> {
    return this.http
      .get(this.baseUrl + '/users/?username=' + credentials.username);
  }


  register(registerPayload: IRegisterRequest): Observable<any> {
    return this.http
      .post(this.baseUrl + '/register', registerPayload);
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
