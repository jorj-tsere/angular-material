import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const lookupApi = '/api/lookup';

@Injectable({
  providedIn: 'root'
})
export class LookupService {

  constructor(private http: HttpClient) { }

  getAdminRoles(): Observable<any> {
    return this.http.get(`${lookupApi}/getAdminRoleList`);
  }
}
