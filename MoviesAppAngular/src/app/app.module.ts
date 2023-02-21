import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolBarComponent } from './components/tool-bar/tool-bar.component';
import { AddMoviesComponent } from './components/add-movies/add-movies.component';
import { MoviesHomeComponent } from './components/movies-home/movies-home.component';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolBarComponent,
    AddMoviesComponent,
    MoviesHomeComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
