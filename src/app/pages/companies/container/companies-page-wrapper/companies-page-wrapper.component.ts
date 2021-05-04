import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { fadeInOut, fader } from '@shared/animations/animation';

@Component({
  selector: 'app-companies-page-wrapper',
  templateUrl: './companies-page-wrapper.component.html',
  styleUrls: ['./companies-page-wrapper.component.scss'],
  animations: [fader, fadeInOut],
})
export class CompaniesPageWrapperComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      // tslint:disable-next-line:no-string-literal
      outlet.activatedRouteData.animation
    );
  }
}
