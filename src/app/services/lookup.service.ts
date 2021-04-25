import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class LookupService {

  constructor(private http: HttpClient) { }

  getAdminRoles(): Observable<any> {
    return this.http.get(`${environment.baseUrl}/api/lookup/getAdminRoleList`);
  }
}
