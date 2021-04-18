import { Component, OnInit } from '@angular/core';
import { routes } from 'app/consts';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {
  public routes: typeof routes = routes;
  constructor() { }

  ngOnInit(): void {
  }

}
