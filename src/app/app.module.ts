import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CountryComponent } from './country/country.component';

import { CountryData } from "./services/country-data.service"

@NgModule({
  declarations: [
    AppComponent,
    CountryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [CountryData],
  bootstrap: [AppComponent]
})
export class AppModule { }
