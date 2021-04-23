import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { Employee } from 'users-page/models';
import { Observable } from 'rxjs';
import { AppState } from '@store-barrel';
import { select, Store } from '@ngrx/store';
import { selectLookupViewModel } from '@store/selectors/lookup.selectors';
import { loadAdminRoles } from '@store/actions/lookup.actions';

export interface AdminRole {
  id: number;
  name: string;
}

export interface Lookups {
  adminRoles: AdminRole[];
}





@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.scss'],
})
export class EmployeeTableComponent implements OnInit, OnChanges {
  constructor(private store: Store<AppState>) {}

  @Input() employeeTableData: Employee[];
  lookupViewModel$: Observable<any>;
  public displayedColumns: string[] = [
    'select',
    'name',
    'surname',
    'mail',
    'role',
    'status',
    'registration date',
    'actions',
  ];
  public dataSource: MatTableDataSource<Employee>;
  public selection = new SelectionModel<Employee>(true, []);



  public lookups: any = [];

  public isShowFilterInput = false;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  ngOnInit(): void {
    this.store.dispatch(loadAdminRoles());
    this.lookupViewModel$ = this.store.pipe(select(selectLookupViewModel));
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.employeeTableData.currentValue) {
      this.dataSource = new MatTableDataSource<Employee>(
        changes.employeeTableData.currentValue
      );
      this.dataSource.paginator = this.paginator;
    }
  }

  /** Whether the number of selected elements matches the total number of rows. */
  public get isAllSelected(): boolean {
    // console.log();
    const numSelected =
      this.selection && this.selection.selected
        ? this.selection.selected.length
        : 0;
    const numRows =
      this.dataSource && this.dataSource.data ? this.dataSource.data.length : 0;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  public masterToggle(): void {
    this.isAllSelected
      ? this.selection.clear()
      : this.dataSource.data.forEach((row) => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  public checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${
      row.position + 1
    }`;
  }

  public applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  public showFilterInput(): void {
    this.isShowFilterInput = !this.isShowFilterInput;
    this.dataSource = new MatTableDataSource<Employee>(this.employeeTableData);
  }
}
