import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {  defer, empty, fromEvent, interval, Observable, of, range, timer } from 'rxjs';
import { catchError, concatAll, debounceTime, exhaust, filter, finalize, first, last, map, mergeAll, mergeMap, scan, skip, switchAll, switchMap, take, tap, windowCount } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

export interface Person {
  name: string;
}

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  time: Observable<string>;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.time = new Observable<string>(observer => {
      setInterval(() => observer.next(new Date().toString()), 1000);
    });
  }
}
