import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatBadgeModule } from '@angular/material/badge';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';

import { UserComponent, EmailComponent } from './components';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { SearchComponent } from './components/search/search.component';
import { ShortNamePipe } from './pipes';
import { HeaderComponent } from './containers';


export const MaterialModules = [
  MatIconModule,
  MatMenuModule,
  MatButtonModule,
  MatInputModule,
  MatBadgeModule,
  MatToolbarModule,
  MatFormFieldModule
]


@NgModule({
  declarations: [
    HeaderComponent,
    UserComponent,
    SearchComponent,
    NotificationsComponent,
    EmailComponent,
    ShortNamePipe
  ],
  exports: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    ...MaterialModules,
  ]
})
export class HeaderModule { }
