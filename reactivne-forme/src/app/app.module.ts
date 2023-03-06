import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{ReactiveFormsModule}from'@angular/forms';
import { AppComponent } from './app.component';
// import{HttPModule}from'@angular/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
