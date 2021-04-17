import { Component, EventEmitter, OnInit, Output } from '@angular/core';

enum matSelectedFields {
  daily = 'Daily',
  weekly = 'Weekly',
  monthly = 'Monthly',
}

@Component({
  selector: 'app-date-menu',
  templateUrl: './date-menu.component.html',
  styleUrls: ['./date-menu.component.scss'],
})
export class DateMenuComponent implements OnInit {
  @Output() changeDateType = new EventEmitter<string>();
  public matSelectFields: typeof matSelectedFields = matSelectedFields;
  public selectedMatSelectValue = matSelectedFields.daily;
  constructor() {}

  ngOnInit(): void {}




  public changedMatSelectionValue(dateType: string) {
    this.changeDateType.emit(dateType);
  }
}
