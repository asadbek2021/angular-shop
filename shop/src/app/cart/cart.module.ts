import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "../shared/material.module";
import { CartComponent, CartListComponent } from "./components";



@NgModule({
  declarations: [
    CartListComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  providers: [],
  exports: [
    CartListComponent,
    CartComponent
  ]
})
export class CartModule {}
