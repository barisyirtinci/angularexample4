import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin/admin.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { AdminCategoriesComponent } from './admin-categories/admin-categories.component';
import { AuthGuard } from '../auth-guard.service';
import { AuthService } from '../auth.service';
import { LoginComponent } from '../login/login.component';


@NgModule({
  declarations: [
    AdminComponent,
    AdminProductsComponent,
    AdminCategoriesComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  providers: [AuthGuard, AuthService, LoginComponent]
})
export class AdminModule { }
