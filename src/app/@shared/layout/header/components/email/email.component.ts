import { Component, Input, OnInit } from '@angular/core';
import { IEmail } from 'app/modules/auth/modals';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss'],
})
export class EmailComponent implements OnInit {
  @Input() emails: IEmail[];
  public colors: string[] = ['yellow', 'green', 'blue', 'ping'];
  constructor() {}

  ngOnInit(): void {}
}
