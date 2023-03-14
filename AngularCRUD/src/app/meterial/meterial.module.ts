import { NgModule } from '@angular/core';
import{MatToolbarModule}from"@angular/material/toolbar";

const materialComponennts: any = [
MatToolbarModule
];

@NgModule({
  declarations: [materialComponennts],
  imports: [materialComponennts],
  exports: [materialComponennts],
})
export class MeterialModule {}
