import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { MaterialModule } from './material/material.module';
import { HeaderModule } from './header/header.module';
import { LayoutComponent } from './layout/layout.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DateMenuComponent, SettingsMenuComponent } from './ui-elements';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    FooterComponent,
    LayoutComponent,
    SidebarComponent,
    DateMenuComponent,
    SettingsMenuComponent,
  ],
  imports: [CommonModule, FormsModule, MaterialModule, HeaderModule, RouterModule],
  exports: [
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    SettingsMenuComponent,
    FooterComponent,
    LayoutComponent,
  ],
})
export class SharedModule {}
