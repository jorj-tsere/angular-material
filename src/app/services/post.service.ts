import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Post, PostResult } from '../models';
@Injectable({
  providedIn: 'root'
})
export class PostService {
  private API_BASE_URL = 'http://localhost:3001';
  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    console.log('executed');
    return this.http
      .get<PostResult>(`${this.API_BASE_URL}/posts`)
      .pipe(map(result => {
        return result.value
      }));
  }

  getPostsByCategory(category: string): Observable<Post[]> {
    return this.http
      .get<PostResult>(
        `${this.API_BASE_URL}/posts`
      )
      .pipe(map(result => result.value));
  }
}