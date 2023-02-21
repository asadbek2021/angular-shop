import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent, CartListComponent } from './cart/components';
import { ProductModule } from './product/product.module';

@NgModule({
  declarations: [
    AppComponent,
    CartListComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
