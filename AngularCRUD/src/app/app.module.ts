import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { MeterialModule } from './meterial/meterial.module';

@NgModule({
  declarations: [AppComponent, MainComponent, EmployeeComponent],
  imports: [BrowserModule, AppRoutingModule, MeterialModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
