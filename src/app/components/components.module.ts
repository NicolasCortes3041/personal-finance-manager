import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

import { PageNotFoundComponent } from '../shared/page-not-found/page-not-found.component';
import { LoginComponent } from './auth/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './auth/register/register.component';
import { AuthHomeComponent } from './auth/auth-home/auth-home.component';
import { IncomeComponent } from './income/income.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TableListComponent } from '../shared/table-list/table-list.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'income',
    component: IncomeComponent,
  },
  {
    path: 'auth',
    outlet: 'auth',
    component: AuthHomeComponent,
  },
];

@NgModule({
  declarations: [
    DashboardComponent,
    IncomeComponent,
    AuthHomeComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    PageNotFoundComponent,
    FontAwesomeModule,
    TableListComponent
  ],
  exports: [RouterModule],
})
export class ComponentsModule {}
