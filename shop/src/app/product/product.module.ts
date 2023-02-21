import { NgModule } from "@angular/core";
import { ProductComponent, ProductListComponent } from "./components";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "../shared/material.module";


@NgModule({
  declarations: [
    ProductComponent,
    ProductListComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  providers: [],
  exports: [
    ProductComponent,
    ProductListComponent
  ]
})
export class ProductModule {}
