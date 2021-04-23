import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { fader, openClose } from '@shared/animations/animation';
@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss'],
  animations: [
    fader,
  ]
})
export class UsersPageComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}

  prepareRoute(outlet: RouterOutlet){
      // tslint:disable-next-line:no-string-literal
      // console.log(outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'])
      // tslint:disable-next-line:no-string-literal
      return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
