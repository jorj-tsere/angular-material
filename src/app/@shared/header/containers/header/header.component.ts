import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


import { IUser } from 'app/pages/auth/models/user';
import { routes } from 'app/consts/routes';
import { AuthService } from 'app/pages/auth/services/auth.service';
import { EmailService } from 'app/pages/auth/services/email.service';
import { IEmail } from 'app/pages/auth/models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() isMenuOpened: boolean;
  @Output() isShowSidebar = new EventEmitter<boolean>();
  public user$: Observable<IUser>;
  public emails$: Observable<IEmail[]>;
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
