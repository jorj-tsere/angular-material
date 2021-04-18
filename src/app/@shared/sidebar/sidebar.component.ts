import { Component, OnInit } from '@angular/core';
import { routes } from 'app/consts';



@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public routes: typeof routes = routes;
  public isOpenUiElements = false;
  constructor() { }

  ngOnInit(): void {
  }

  openUiElements() {
    this.isOpenUiElements = !this.isOpenUiElements;
  }

}
