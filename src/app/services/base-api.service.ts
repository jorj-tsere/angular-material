import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BaseAPIService {
  constructor(public http: HttpClient) {}

  get(url: string) {
    return this.http.get(url);
  }
}
