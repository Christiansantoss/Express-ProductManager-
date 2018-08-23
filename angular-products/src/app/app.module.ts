import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsHomeComponent } from './products-home/products-home.component';
import { ProductsEditComponent } from './products-edit/products-edit.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsNewComponent } from './products-new/products-new.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsHomeComponent,
    ProductsEditComponent,
    ProductsListComponent,
    ProductsNewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
