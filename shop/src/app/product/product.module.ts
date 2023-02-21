import { NgModule } from "@angular/core";
import { ProductComponent, ProductListComponent } from "./components";
import { CommonModule } from "@angular/common";


@NgModule({
  declarations: [
    ProductComponent,
    ProductListComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [],
  exports: [
    ProductComponent,
    ProductListComponent
  ]
})
export class ProductModule {}
