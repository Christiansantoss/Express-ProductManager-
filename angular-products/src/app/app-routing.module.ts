import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsEditComponent } from './products-edit/products-edit.component';
import { ProductsHomeComponent} from './products-home/products-home.component';
import {ProductsNewComponent} from './products-new/products-new.component';
import {ProductsListComponent} from './products-list/products-list.component';

const routes: Routes = [
  {path: 'products/edit/:id', component: ProductsEditComponent},
  {path: '', pathMatch: 'full', component: ProductsHomeComponent},
  {path: 'products/new', component: ProductsNewComponent},
  {path: 'products/list', component: ProductsListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
