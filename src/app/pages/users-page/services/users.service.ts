import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { Customer, Employee } from '../models';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor() {}

  public loadEmployeeTableData(): Observable<Employee[]> {
    return of([
      {
        id: 1,
        name: 'giorgi',
        surname: 'tsereteli',
        mail: 'jorj.tsere@gmail.com',
        role: 'admin',
        status: 'active',
        registrationDate: '2021-01-01',
      },
    ]);
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
        product: "Let's Dance",
        price: '$43 594.7',
        date: '1 Mar 2018',
        city: 'Hanoverton',
        status: 'send',
      },
    ]);
  }
}
