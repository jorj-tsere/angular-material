import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee, Customer } from '../../models';
import { TablesService } from '../../services/table.service';

@Component({
  selector: 'app-tables-page',
  templateUrl: './tables-page.component.html',
  styleUrls: ['./tables-page.component.scss']
})
export class TablesPageComponent implements OnInit {

  public employeeTableData$: Observable<Employee[]>
  public materialTableData$: Observable<Customer[]>

  constructor(private tableService: TablesService) {
    this.employeeTableData$ = tableService.loadEmployeeTableData();
    this.materialTableData$ = tableService.loadMaterialTableData();
  }

  ngOnInit(): void {
  }

}
