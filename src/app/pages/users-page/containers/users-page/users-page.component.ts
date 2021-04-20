import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppState } from 'app/store';
import { Observable } from 'rxjs';
import { Customer, Employee } from '../../models';
import { UsersService } from '../../services/users.service';

import * as fromUsersPageSelectors from '../../state/selectors/users-page.selectors';
import * as fromUsersPageActions from '../../state/actions/users-page.actions';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss'],
})
export class UsersPageComponent implements OnInit {
  // public employeeTableData$: Observable<Employee[]>;
  // public materialTableData$: Observable<Customer[]>;


  public vm$: Observable<any>;

  constructor(private store: Store<AppState>) {
    this.store.dispatch(fromUsersPageActions.loadUsersPage());
    this.vm$ = this.store.pipe(select(fromUsersPageSelectors.selectUsersPageViewModel));
    // this.employeeTableData$ = tableService.loadEmployeeTableData();
    // this.materialTableData$ = tableService.loadMaterialTableData();

    console.log('private service: TablesService');
  }

  ngOnInit(): void {}
}
