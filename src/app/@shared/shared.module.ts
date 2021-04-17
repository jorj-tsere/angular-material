import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './layout/footer/footer.component';
import { MaterialModule } from './material/material.module';
import { HeaderModule } from './layout/header/header.module';
import { LayoutComponent } from './layout/layout.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DateMenuComponent, SettingsMenuComponent } from './ui-elements';

@NgModule({
  declarations: [
    FooterComponent,
    LayoutComponent,
    SidebarComponent,
    DateMenuComponent,
    SettingsMenuComponent,
  ],
  imports: [CommonModule, FormsModule, MaterialModule, HeaderModule],
  exports: [FormsModule, MaterialModule, ReactiveFormsModule],
})
export class SharedModule {}
