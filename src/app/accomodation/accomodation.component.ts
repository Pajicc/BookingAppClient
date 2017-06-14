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

@Component({
  selector: 'app-accomodation',
  templateUrl: './accomodation.component.html',
  styleUrls: ['./accomodation.component.css'],
  providers: [
    HttpAccomodationService,
    HttpPlaceService,
    HttpAppUserService,
    HttpAccTypeService
    ]
})
export class AccomodationComponent implements OnInit {

  approved: boolean;
  accom: Accomodation;
  accoms: Object[];
  place: Place;
  places: Object[];
  appUser: AppUser;
  appUsers: Object[];
  accType: AccType;
  accTypes: Object[];

  constructor(
    private httpAccomodationService: HttpAccomodationService,
    private httpPlaceService: HttpPlaceService,
    private httpAppUserService: HttpAppUserService,
    private httpAccTypeService: HttpAccTypeService) { }

  ngOnInit() {
    this.httpAccomodationService.getAccomodation().subscribe(
      (am: any) => { this.accoms = am; console.log(this.accoms) },
      error => { alert("Unsuccessful accomodation fetch operation!"); console.log(error); }
    );
    this.httpPlaceService.getPlaces().subscribe(
      (pl: any) => {this.places = pl; console.log(this.places)}
    );
    this.httpAppUserService.getAppUsers().subscribe(
      (au: any) => {this.appUsers = au; console.log(this.appUsers)}
    );
     this.httpAccTypeService.getAccTypes().subscribe(
      (acc: any) => {this.accTypes = acc; console.log(this.accTypes)}
    );
  }

  addAccomodation(newAccom: Accomodation,  form: NgForm): void {
    newAccom.Approved = this.approved;
    this.httpAccomodationService.postAccomodation(newAccom).subscribe(
      (co:any) => {this.ngOnInit()},
      error => { alert("Unsuccessful insert operation!"); console.log(error);}
    );
    form.reset();
  }

  onPost(res: any): void {
    alert("Post!");
    console.log(res.json());
  }

  chk(e) {
    if (e.target.checked) {
      this.approved = true
    }
    else {
      this.approved = false
    }
  }
}
