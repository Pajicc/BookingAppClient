import { Component, OnInit } from '@angular/core';
import { HttpAccomodationService } from "app/services/http.accomodation.service";
import { Http, Response } from '@angular/http';
import { Accomodation } from "app/accomodation/accomodation.model";
import { NgForm } from '@angular/forms';
import { Place } from "../place/place.model";
import { AppUser } from "../app-user/app-user.model";
import { AccType } from "../accomodation-type/accomodation-type.model";
import { HttpPlaceService } from "../services/http.place.servise";
import { HttpAppUserService } from "../services/http.app-user.service";
import { HttpAccTypeService } from "../services/http.accType.service";
import { AuthService } from "../services/auth.service";
import { HttpRegionService } from '../services/http.region.service';
import { HttpCountryService } from '../services/http.country.service';
import { SearchService } from '../services/search-odata-service';
import { SearchModel } from '../accomodation/search.model';
import { MapInfo } from "../map/map-info.model";


@Component({
  selector: 'app-accomodation',
  templateUrl: './accomodation.component.html',
  styleUrls: ['./accomodation.component.css'],
  styles: ['agm-map {height: 300px; width: 500px;}'],
  providers: [
    HttpAccomodationService,
    HttpPlaceService,
    HttpAppUserService,
    HttpAccTypeService,
    HttpRegionService,
    HttpCountryService,
    AuthService,
    SearchService
  ]
})
export class AccomodationComponent implements OnInit {

  approved: boolean;
  accom: Accomodation;
  accoms: Accomodation[];
  place: Place;
  places: Object[];
  appUser: AppUser;
  appUsers: Object[];
  accType: AccType;
  accTypes: Object[];

  count: number = 0;
  skip: number = 0;
  searchParamsSave;
  entitiesPerPage = 1;

  regions: AccType[];
  countries: AccType[];


  imgUrl: string;

  id: number;
  accName: string;
  show: boolean;
  mapInfo: MapInfo;

  constructor(
    private httpAccomodationService: HttpAccomodationService,
    private httpPlaceService: HttpPlaceService,
    private httpAppUserService: HttpAppUserService,
    private httpAccTypeService: HttpAccTypeService,
    private regionService: HttpRegionService,
    private countryService: HttpCountryService,
    private authService: AuthService,
    private searchODataService: SearchService) {
    this.imgUrl = "";
    this.mapInfo = {} as MapInfo;
  }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.httpAccomodationService.getAccomodation().subscribe(
      (am: any) => { this.accoms = am; console.log(this.accoms) },
      error => { alert("Unsuccessful accomodation fetch operation!"); console.log(error); }
    );
    this.httpPlaceService.getPlaces().subscribe(
      (pl: any) => { this.places = pl; console.log(this.places) }
    );
    this.countryService.getCountries().subscribe(
      (c: any) => { this.countries = c; console.log(this.countries) }
    );
    this.regionService.getRegions().subscribe(
      (r: any) => { this.regions = r; console.log(this.regions) }
    );
    this.httpAccTypeService.getAccTypes().subscribe(
      (acc: any) => { this.accTypes = acc; console.log(this.accTypes) }
    );
  }

  addAccomodation(newAccom: Accomodation, form: NgForm): void {
    newAccom.ImageURL = this.imgUrl;
    newAccom.Approved = this.approved;

    this.mapInfo = new MapInfo(newAccom.Latitude, newAccom.Longtitude,

      "assets/ftn.png",
      newAccom.Name, newAccom.Address, "http://ftn.uns.ac.rs/691618389/fakultet-tehnickih-nauka");

    newAccom.Map = this.mapInfo;
    newAccom.AppUserId = parseInt(localStorage.getItem('userID'));
    
    this.httpAccomodationService.postAccomodation(newAccom).subscribe(
      (co: any) => { this.getAll() },
      error => { alert("Unsuccessful insert operation!"); console.log(error); }
    );
    form.reset();


  }

  deleteAcc(): void {
    this.httpAccomodationService.deleteAccomodation(this.id).subscribe(
      (at: any) => { this.getAll() },
      error => { alert("Unsuccessful delete!"); console.log(error); }
    );
  }

  editAcc(): void {
    this.httpAccomodationService.updateAccomodation(this.accom).subscribe(
      (at: any) => { this.getAll() },
      error => { alert("Unsuccessful edit!"); console.log(error); }
    );
  }

  setId(id: number) {
    this.id = id;
  }

  setAcc(acc: Accomodation) {
    this.accom = acc;
  }


  chk(e) {
    if (e.target.checked) {
      this.approved = true
    }
    else {
      this.approved = false
    }
  }
  imageUploaded(e) {
    console.log(e);
    this.imgUrl = "http://localhost:54042/Content/AccImages/" + e.file.name;
  }
  imageRemoved(e) {
    console.log("Image removed!");
  }

  isAdmin(): boolean {
    return this.authService.isUserAdmin();
  }

  isManager(): boolean {
    return this.authService.isUserManager();
  }

  searchAccomodations(searchParams: SearchModel, form: NgForm) {
    //this.searchParamsSave = new SearchModel(searchParams.Name,searchParams.Country,searchParams.Region,searchParams.Place,searchParams.AccomodationType,searchParams.BedCount,searchParams.Grade,searchParams.PriceMin,searchParams.PriceMax);
    this.searchODataService.generateQuery(searchParams).subscribe(x => this.oDataResponseParser(x));
    form.reset();
  }

  ///isPending(){

  //}

  /*showAdd(): boolean{
    if(parseInt(localStorage.getItem('appUserID'))==this.accom.AppUserId)
    {
      this.show=true;   //ako je manager i ako je njegov smestaj
    }
    return (this.authService.isUserManager && (this.show));
  }*/

  oDataResponseParser(x: any) {
    //this.count = x["odata.count"];
    this.accoms = x as Accomodation[]
  }
}
