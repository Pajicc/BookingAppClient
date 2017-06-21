import { Component, OnInit } from '@angular/core';
import { Country } from './country.model'
import { Http, Response } from '@angular/http';
import { HttpCountryService } from '../services/http.country.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css'],
  providers: [HttpCountryService]
})
export class CountryComponent implements OnInit {
errorMsg:string;
  countries: Object[];
  country: Country;
  id: number;
  constructor(private httpCountryService: HttpCountryService) { }


  ngOnInit() {
    this.httpCountryService.getCountries().subscribe(
      (at: any) => { this.countries = at; console.log(this.countries) },//You can set the type to Product.
      error => { alert("Unsuccessful fetch operation!"); console.log(error); }
    );
  }

  addCountry(newCountry: Country, form: NgForm): void {

    if(!form.valid){
      return;
    }
    this.httpCountryService.postCountry(newCountry).subscribe(
      (co: any) => { this.ngOnInit() },
     (error:any) =>{ this.errorMsg = error.json().Message;
        console.log(error); }
    );

    form.reset();
  }

  deleteCountry(): void {
    this.httpCountryService.deleteCountry(this.id).subscribe(
      (co: any) => { this.ngOnInit() },
      error => { alert("Unsuccessful delete!"); console.log(error); }
    );
  }

  editCountry(): void {
   
    this.httpCountryService.updateCountry(this.country).subscribe(
      (co: any) => { this.ngOnInit() },
       (error:any) =>{ this.errorMsg = error.json().Message;
        console.log(error); }
    );
  }

  setId(id: number) {
    this.id = id;
  }

  setCountry(co: Country) {
    this.country = co;
  }


  onPost(res: any): void {
    alert("Post!");
    console.log(res.json());
  }

  clicked(country: Country): void {
    //alert(country.Name);
  }

}
