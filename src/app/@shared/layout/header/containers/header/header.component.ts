import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { Email, User } from '../../../../pages/auth/models';

import { IUser } from 'app/modules/auth/modals/user';
import { routes } from 'app/consts/routes';
import { AuthService } from 'app/modules/auth/services/auth.service';
import { EmailService } from 'app/modules/auth/services/email.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() isMenuOpened: boolean;
  @Output() isShowSidebar = new EventEmitter<boolean>();
  public user$: Observable<IUser>;
  public emails$: Observable<Email[]>;
  public routers: typeof routes = routes;

  constructor(
    private authService: AuthService,
    private emailService: EmailService,
    private router: Router
  ) {
    this.user$ = this.authService.getUser();
    this.emails$ = this.emailService.loadEmails();
  }

  ngOnInit(): void {}

  public openMenu(): void {
    this.isMenuOpened = !this.isMenuOpened;

    this.isShowSidebar.emit(this.isMenuOpened);
  }

  public signOut(): void {
    console.log('signOut');
    // this.userService.signOut();

    // this.router.navigate([this.routers.LOGIN]);
  }
}
