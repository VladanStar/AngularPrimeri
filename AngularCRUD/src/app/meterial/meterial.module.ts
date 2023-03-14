import { NgModule } from '@angular/core';
import{MatToolbarModule}from"@angular/material/toolbar";

const materialComponennts: any = [
MatToolbarModule
];

@NgModule({
  declarations: [],
  imports: [materialComponennts],
  exports: [materialComponennts],
})
export class MeterialModule {}
