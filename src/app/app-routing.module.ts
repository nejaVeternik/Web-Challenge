import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { UsersComponent } from './users/users.component';
import { CartsComponent } from './carts/carts.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

const routes: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: 'users', component: UsersComponent},
  { path: 'carts', component: CartsComponent},
  { path: 'products/:id', component: ProductDetailComponent},
  { path: 'users/:id', component: UserDetailComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
