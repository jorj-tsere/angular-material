import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env';
import { AddCompanyRequest } from '@pages/companies/models';
import { Observable, of } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';

const userApiEndPint = '/api/company';

@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  constructor(private http: HttpClient) { }

  public _getCompanyList(): Observable<any> {
    return this.http.get<any>(
      `${environment.baseUrl}/api/copmany/getCompanyList`
    );
  }

  private randomDate(start, end) {
    return new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    );
  }

  public getCompanyList(): Observable<any> {
    return of([
      {
        id: uuidv4(),
        name: 'company 1',
        status: 'active',
        statusID: 1,
        registration_date: this.randomDate(new Date(2012, 0, 1), new Date()),
        country: 'USA',
        countryID: 1,
      },
      {
        id: uuidv4(),
        name: 'company 2',
        status: 'active',
        registration_date: this.randomDate(new Date(2012, 0, 1), new Date()),
        country: 'USA',
        countryID: 1,
      },
      {
        id: uuidv4(),
        name: 'company 3',
        status: 'block',
        statusID: 0,
        registration_date: this.randomDate(new Date(2014, 0, 1), new Date()),
        country: 'USA',
        countryID: 1,
      },
      {
        id: uuidv4(),
        name: 'company 4',
        status: 'block',
        statusID: 0,
        registration_date: this.randomDate(new Date(2015, 0, 1), new Date()),
        country: 'USA',
        countryID: 1,
      },
      {
        id: uuidv4(),
        name: 'company 5',
        status: 'active',
        statusID: 1,
        registration_date: this.randomDate(new Date(2013, 0, 1), new Date()),
        country: 'USA',
        countryID: 1,
      },
    ]);
  }


  public addCompany(payload: AddCompanyRequest) {
    return of({
      response: 'ok', payload: {
        branch: {
          id: uuidv4(),
          name: 'company 6',
          status: 'active',
          statusID: 1,
          registration_date: this.randomDate(new Date(2013, 0, 1), new Date()),
          country: 'USA',
          countryID: 1,
        }
      }
    });

    return this.http.post<any>(
      `${environment.baseUrl}/api/copmany/create`,
      payload
    );
  }
}
