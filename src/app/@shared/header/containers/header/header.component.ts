import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from 'app/pages/auth/models/user';
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

  constructor(
    private store: Store<AppState>
  ) {
    this.user$ = this.store.pipe(select(fromAuthSelectors.selectLoggedUser));
  }

  ngOnInit(): void {}

  openMenu(): void {
    this.isMenuOpened = !this.isMenuOpened;
    this.isShowSidebar.emit(this.isMenuOpened);
  }
}
