import { Component, OnInit } from '@angular/core';
import {Country} from './country.model'
import {CountryData} from '../services/country-data.service'

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css'],
  providers: [CountryData]
})
export class CountryComponent implements OnInit {

  countries: Country[];

  constructor(private countriesData: CountryData) { }

  /*constructor() {
  
    this.countries = [
        new Country(1, "Srbija", "SRB"),
         new Country(1, "Hrvatska", "HR")
    ]
  }*/

  ngOnInit() {
      this.countries = this.countriesData.fetchData();
  }

  addCountry(newCountry: Country) : void{
      this.countries.push(newCountry);
  }

  clicked(country: Country): void {
    alert(country.Name);
  }

}
