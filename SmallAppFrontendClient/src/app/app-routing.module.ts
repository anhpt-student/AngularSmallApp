import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsListComponent } from './products-list/products-list.component';
import { CreateProductComponent } from './create-product/create-product.component';

const routes: Routes = [
  {path: '', redirectTo: 'product', pathMatch: 'full'},
  {path:'viewproduct', component: ProductsListComponent},
  {path: 'addproduct', component: CreateProductComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
