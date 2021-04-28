import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env';
import { AdminUser } from '@pages/users-page/models/admin-user';
import { UpdateAdminUserRequest } from '@pages/users-page/models/update-admin-user-request';
import { Observable, throwError } from 'rxjs';
import { of } from 'rxjs';
import {
  Customer,
  Employee,
  IRegisterRequest,
} from '../pages/users-page/models';

const userApiEndPint = '/api/user';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  // public loadEmployeeTableData(): Observable<Employee[]> {
  //   return of([
  //     {
  //       id: 1,
  //       name: 'giorgi',
  //       surname: 'tsereteli',
  //       mail: 'jorj.tsere@gmail.com',
  //       role: 'admin',
  //       status: 'active',
  //       registrationDate: '2021-01-01',
  //     },
  //   ]);
  // }

  public getUserList(): Observable<any> {
    return this.http.get<any>(
      `${environment.baseUrl}/api/adminUser/getUserList`
    );
  }

  public getUserDetails(id: number): Observable<any> {
    return this.http.get<any>(
      `${environment.baseUrl}/api/adminUser/getUserDetails?id=${id}`
    );
  }



  public createAdminUser(newUser: IRegisterRequest): Observable<any> {
    return this.http.post<any>(
      `${environment.baseUrl}/api/adminUser/createUser`,
      newUser
    );
  }

  public updateUserDetails(payload: any) {
    console.log('updateUserDetails', payload);
    return this.http.post(
      `${environment.baseUrl}/api/adminUser/updateUserDetails`,
      payload
    );
  }

  public loadMaterialTableData(): Observable<Customer[]> {
    return of([
      {
        name: 'Mark Otto',
        email: 'ottoto@wxample.com',
        product: 'ON the Road',
        price: '$25 224.2',
        date: '11 May 2017',
        city: 'Otsego',
        status: 'send',
      },
      {
        name: 'Jacob Thornton',
        email: 'thornton@wxample.com',
        product: 'HP Core i7',
        price: '$1 254.2',
        date: '4 Jun 2017',
        city: 'Fivepointville',
        status: 'send',
      },
      {
        name: 'Larry the Bird',
        email: 'bird@wxample.com',
        product: 'Air Pro',
        price: '$1 570.0',
        date: '27 Aug 2017',
        city: 'Leadville North',
        status: 'pending',
      },
      {
        name: 'Joseph May',
        email: 'josephmay@wxample.com',
        product: 'Version Control',
        price: '$5 224.5',
        date: '19 Feb 2018',
        city: 'Seaforth',
        status: 'declined',
      },
      {
        name: 'Peter Horadnia',
        email: 'horadnia@wxample.com',
        product: 'Lets Dance',
        price: '$43 594.7',
        date: '1 Mar 2018',
        city: 'Hanoverton',
        status: 'send',
      },
    ]);
  }

  // return of([
  //   {
  //     id: 1,
  //     name: 'giorgi',
  //     surname: 'tsereteli',
  //     mail: 'jorj.tsere@gmail.com',
  //     role: 'admin',
  //     status: 'active',
  //     registrationDate: '2021-01-01',
  //   },
  // ]);
}
