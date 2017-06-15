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

@Component({
  selector: 'app-accomodation',
  templateUrl: './accomodation.component.html',
  styleUrls: ['./accomodation.component.css'],
  providers: [
    HttpAccomodationService,
    HttpPlaceService,
    HttpAppUserService,
    HttpAccTypeService,
    AuthService
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

  imgUrl: string;

  id: number;
  accName: string; 
  show: boolean;

  constructor(
    private httpAccomodationService: HttpAccomodationService,
    private httpPlaceService: HttpPlaceService,
    private httpAppUserService: HttpAppUserService,
    private httpAccTypeService: HttpAccTypeService,
    private authService: AuthService) {
      this.imgUrl = "";
     }

  ngOnInit() {
    this.getAll();
  }

  getAll(){
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
    newAccom.ImageURL = this.imgUrl;
    newAccom.Approved = this.approved;
    this.httpAccomodationService.postAccomodation(newAccom).subscribe(
      (co:any) => {this.getAll()},
      error => { alert("Unsuccessful insert operation!"); console.log(error);}
    );
    form.reset();
  }

   deleteAcc() : void{
       this.httpAccomodationService.deleteAccomodation(this.id).subscribe(
        (at: any) => {this.getAll() },
         error => {alert("Unsuccessful delete!"); console.log(error);}
      );
    }

    editAcc() : void{
      this.httpAccomodationService.updateAccomodation(this.accom).subscribe(
        (at: any) => {this.getAll() },
         error => {alert("Unsuccessful edit!"); console.log(error);}
      );
    }

    setId(id: number){
      this.id = id;
    }

    setAcc(acc: Accomodation){
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
  imageUploaded(e){
    console.log(e);
    this.imgUrl = "http://localhost:54042/Content/AccImages/"+e.file.name;
  }
  imageRemoved(e){
     console.log("Image removed!");
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
}
