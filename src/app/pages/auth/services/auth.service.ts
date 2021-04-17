import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ILoginCredentials } from '../models/login-credentials';
import { IUser } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // tslint:disable-next-line:no-inferrable-types
  baseUrl: string = 'http://localhost:3000/users/';
  private userSource = new BehaviorSubject<IUser>({
    id: null,
    username: null,
    email: null,
    is_admin: false,
  });


  user = this.userSource.asObservable();

  constructor(private http: HttpClient) {}

  login(credentials: ILoginCredentials): Observable<any> {
    return this.http.get(this.baseUrl + '?username=' + credentials.username).pipe(
      switchMap((users) => {
        const user = users[0];
        if (user) {
          return of(user);
        } else {
          return throwError('Unable to login');
        }
      })
    );
  }



  /// temp
  // public login(): void {
  //   localStorage.setItem('token', 'token');
  // }

  public sign(): void {
    localStorage.setItem('token', 'token');
  }

  public signOut(): void {
    localStorage.removeItem('token');
  }

  public getUser(): Observable<IUser> {
    return of({
      id: 123123,
      username: 'jogn',
      email: 'jorj.tsere@gmail.com',
      is_admin: true,
      name: 'John',
      lastName: 'Smith'
    });
  }
}
