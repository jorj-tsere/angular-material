import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { CustomerSupportComponent } from './customer-support/customer-support.component';
import { HomeComponent } from './home/home.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from 'app/@shared/shared.module';

const MaterialModules = [MatIconModule, MatFormFieldModule, MatInputModule, MatButtonModule];

@NgModule({
  declarations: [CustomerSupportComponent, HomeComponent],
  imports: [...MaterialModules, SharedModule, CommonModule, PagesRoutingModule],
  exports: [...MaterialModules],
})
export class PagesModule {}
