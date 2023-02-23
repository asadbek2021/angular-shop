import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "../shared/material.module";
import { HeaderComponent } from "./header/header.component";



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  providers: [],
  exports: [HeaderComponent]
})
export class LayoutModule {}
