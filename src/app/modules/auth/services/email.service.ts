import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IEmail } from '../models';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  constructor() {}

  public loadEmails(): Observable<IEmail[]> {
    return of([
      { name: 'Jane Hew', time: '9:32', message: 'Hey! How is it going?' },
      {
        name: 'Lloyd Brown',
        time: '9:18',
        message: 'Check out my new Dashboard',
      },
      {
        name: 'Mark Winstein',
        time: '9:15',
        message: 'I want rearrange the appointment',
      },
      {
        name: 'Liana Dutti',
        time: '9:09',
        message: 'Good news from sale department',
      },
    ]);
  }
}
