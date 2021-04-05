import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, shareReplay, tap } from 'rxjs/operators';
import * as moment from 'moment';


export interface User {
    email: string;
    password: string;
}

export interface RegisterUser {
    email: string;
    password: string;
    name: string;
}



@Injectable({
    providedIn: 'root'
})
export class AuthService {
    public getLoggedUser;


    public baseUrl = 'http://localhost/jwt/public';
    private loggedUserSubject: BehaviorSubject<any>;
    public loggedInUser: Observable<any>;

    constructor(private http: HttpClient) { }

    login(email: string, password: string) {
        return this.http.post<User>(this.baseUrl + '/authenticate.php', { email, password }).pipe(
            tap({
                next: this.setSession,
                error: error => {
                    console.log('on error', error.message);
                },
                complete: () => console.log('on complete')
            }),
            shareReplay()
        )
    }

    register(registerUser: RegisterUser){
        return this.http.post<RegisterUser>(this.baseUrl + '/authenticate.php', registerUser).pipe(
            tap({
                next: this.setSession,
                error: error => {
                    console.log('on error', error.message);
                },
                complete: () => console.log('on complete')
            })
        );
    }

    getData() {
        return this.http.get(this.baseUrl + '/resource.php').pipe(
            tap({
                next: (data) => {
                    console.log(data);
                },
                error: error => {
                    console.log('on error', error.message);
                },
                complete: () => console.log('on complete')
            }),
            shareReplay()
        )
    }

    private setSession(authResult) {
        const expiresAt = moment().add(authResult.expiresIn, 'second');
        console.log(moment(expiresAt).format())

        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
    }

    logout() {
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
    }

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

