import { Component, OnInit } from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  Roles: any = ['Admin', 'Author', 'Reader'];

  media$: Observable<MediaChange[]>;

  constructor(private media: MediaObserver) {
    this.media$ = media.asObservable();
  }

  ngOnInit(): void {
  }

}
