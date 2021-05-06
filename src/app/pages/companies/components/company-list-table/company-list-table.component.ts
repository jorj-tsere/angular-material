import { SelectionModel } from '@angular/cdk/collections';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { select, Store } from '@ngrx/store';
import { Company } from '@pages/companies/state/company.model';
import { Employee } from '@pages/users-page/models';
import { AppState } from '@store-barrel';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-company-list-table',
  templateUrl: './company-list-table.component.html',
  styleUrls: ['./company-list-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CompanyListTableComponent implements OnInit, OnChanges {
  constructor(private store: Store<AppState>) {}

  @Input() companies: Company[];
  lookupViewModel$: Observable<any>;
  public displayedColumns: string[] = [
    'select',
    'name',
    'status',
    'registrationDate',
    'country',
    'actions',
  ];
  public dataSource: MatTableDataSource<Company>;
  public selection = new SelectionModel<Company>(true, []);

  public isShowFilterInput = false;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.companies.currentValue) {
      this.dataSource = new MatTableDataSource<Company>(
        changes.companies.currentValue
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
    this.dataSource = new MatTableDataSource<Company>(this.companies);
  }
}
