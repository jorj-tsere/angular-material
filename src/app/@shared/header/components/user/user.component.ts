import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { routes } from 'app/consts';
import { IUser } from 'app/pages/auth/models';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  @Input() user: IUser;
  @Output() signOut: EventEmitter<void> = new EventEmitter<void>();
  public routes: typeof routes = routes;
  // tslint:disable-next-line:no-inferrable-types
  public flatlogicEmail: string = 'https://flatlogic.com';

  public signOutEmit(): void {
    this.signOut.emit();
  }
  constructor() {}

  ngOnInit(): void {}
}
