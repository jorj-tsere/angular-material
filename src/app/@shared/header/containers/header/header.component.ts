import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from 'app/pages/auth/models/user';
import { EmailService } from 'app/pages/auth/services/email.service';
import { IEmail } from 'app/pages/auth/models';
import { AppState } from 'app/store';
import { select, Store } from '@ngrx/store';
import * as fromAuthSelectors from 'app/pages/auth/state/selectors/auth.selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() isMenuOpened: boolean;
  @Output() isShowSidebar = new EventEmitter<boolean>();
  user$: Observable<IUser>;
  emails$: Observable<IEmail[]>;

  constructor(
    private emailService: EmailService,
    private store: Store<AppState>
  ) {
    this.user$ = this.store.pipe(select(fromAuthSelectors.selectLoggedUser));
    this.emails$ = this.emailService.loadEmails();
  }

  ngOnInit(): void {}

  openMenu(): void {
    this.isMenuOpened = !this.isMenuOpened;
    this.isShowSidebar.emit(this.isMenuOpened);
  }
}
