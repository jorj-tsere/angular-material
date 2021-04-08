import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Joke, JokeResult } from '../models';
@Injectable({
  providedIn: 'root'
})
export class JokeService {
  private API_BASE_URL = 'http://localhost:3001';
  constructor(private http: HttpClient) { }

  getJokes(): Observable<Joke[]> {
    return this.http
      .get<JokeResult>(`${this.API_BASE_URL}/jokes`)
      .pipe(map(result => {
        console.log(result);
        return result.value
      }));
  }

  getJokesByCategory(category: string): Observable<Joke[]> {
    return this.http
      .get<JokeResult>(
        `${this.API_BASE_URL}/jokes`
      )
      .pipe(map(result => result.value));
  }
}