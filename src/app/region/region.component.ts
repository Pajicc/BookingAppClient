import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Http, Response } from '@angular/http';
import { HttpRegionService } from "app/services/http.region.service";
import { Region } from "app/region/region.model";
import { Country } from "../country/country.model";
import { HttpCountryService } from "../services/http.country.service";

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css'],
  providers: [HttpRegionService,
    HttpCountryService
  ]
})
export class RegionComponent implements OnInit {
errorMsg:string;
  region: Region;
  regions: Object[];
  country: Country;
  countries: Object[];
id:number;
  constructor(private httpRegionService: HttpRegionService,
    private httpCountryService: HttpCountryService) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.httpRegionService.getRegions().subscribe(
      (reg: any) => { this.regions = reg; console.log(this.regions) },
      error => { alert("Unsuccessful regions fetch operation!"); console.log(error); }
    );
    this.httpCountryService.getCountries().subscribe(
      (co: any) => { this.countries = co; console.log(this.countries) },
      error => { alert("Unsuccessful countries fetch operation!"); console.log(error); }
    )
  }

  addRegion(newRegion: Region, form: NgForm): void {
    this.httpRegionService.postRegion(newRegion).subscribe(
      (co: any) => { this.ngOnInit() },
      (error:any) =>{ this.errorMsg = error.json().Message;
        console.log(error); }
    );
    form.reset();
  }

  deleteRegion(): void {
    this.httpRegionService.deleteRegion(this.id).subscribe(
      (pl: any) => { this.getAll() },
      error => { alert("Unsuccessful delete!"); console.log(error); }
    );
  }

  editRegion(): void {
    this.httpRegionService.updateRegion(this.region).subscribe(
      (reg: any) => { this.getAll() },
      error => { alert("Unsuccessful edit!"); console.log(error); }
    );
  }

  setId(id: number) {
    this.id = id;
  }

  setRegion(reg: Region) {
    this.region = reg;
  }

  onPost(res: any): void {
    alert("Post!");
    console.log(res.json());
  }
}
