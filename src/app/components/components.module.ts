import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';
import { PageNotFoundComponent } from '../shared/page-not-found/page-not-found.component';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'products',
    component: ProductsComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];

@NgModule({
  declarations: [DashboardComponent, ProductsComponent, LoginComponent],
  imports: [CommonModule, RouterModule.forChild(routes), PageNotFoundComponent],
  exports: [RouterModule],
})
export class ComponentsModule {}
