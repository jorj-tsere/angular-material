import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import axios from 'axios';
import { Observable, of } from 'rxjs';
import { ILoginCredentials } from '../models/login-credentials';
import { IRegisterRequest } from '../models/register-request';
import { IUser } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // tslint:disable-next-line:no-inferrable-types
  baseUrl: string = 'http://68.183.115.254:8081'; // 'http://127.0.0.1:4200';
  // tslint:disable-next-line:no-inferrable-types
  // baseUrl: string = 'http://68.183.115.254:8081';

  constructor(private http: HttpClient) {}

  login(credentials: ILoginCredentials): Observable<any> {

    axios('http://68.183.115.254:8081/api/auth/getAccessToken', {
      method: 'POST',
      data: credentials,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
      withCredentials: ,
      credentials: 'same-origin',
    }).then(response => {
    })

    axios
      .post('http://68.183.115.254:8081/api/auth/getAccessToken', credentials, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
      })
      .then((resp) => console.log)
      .catch((error) => console.log);

    const observable$ = Observable.create((observer) => {
      axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
          observer.next(response.data);
          observer.complete();
        })
        .catch((error) => {
          observer.error(error);
        });
    });
    return observable$;
    // axios.post(this.baseUrl + '/api/auth/getAccessToken', credentials);

    // let observable$ = Observable.create((observer) => {});

    // return observable$;

    // const body = JSON.stringify(
    // {
    // title: "data"
    // });
    // headers.append('Access-Control-Allow-Origin', '*');

    // return this.http.post(this.baseUrl + '/api/auth/getAccessToken', credentials, { headers: header })
  }

  register(registerPayload: IRegisterRequest): Observable<any> {
    return this.http.post(
      this.baseUrl + '/api/adminRegistration/register',
      registerPayload
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
}
