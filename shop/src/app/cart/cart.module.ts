import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "../shared/material.module";
import { CartComponent, CartListComponent } from "./components";
import { SharedModule } from "../shared/shared.module";



@NgModule({
  declarations: [
    CartListComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
  ],
  providers: [],
  exports: [
    CartListComponent,
    CartComponent
  ]
})
export class CartModule {}
