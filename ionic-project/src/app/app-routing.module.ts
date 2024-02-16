import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ChangeProductComponent } from './change-product/change-product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent 
  },
  {
    path: 'product',
    component: ProductComponent
  },
  {
    path: 'change',
    component: ChangeProductComponent 
  },
  {
    path: 'add',
    component: AddProductComponent
  },
  {
    path: 'list',
    component: ProductListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
