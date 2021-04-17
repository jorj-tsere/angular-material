import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routes } from 'app/consts';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss'],
})
export class AuthPageComponent implements OnInit {
  public todayDate: Date = new Date();
  public routers: typeof routes = routes;
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  public sendLoginForm(): void {
    this.authService.login({ username: 'test', password: 'asdas' });

    this.router.navigate([this.routers.DASHBOARD]).then();
  }

  public sendSignForm(): void {
    this.authService.sign();

    this.router.navigate([this.routers.DASHBOARD]).then();
  }
}
