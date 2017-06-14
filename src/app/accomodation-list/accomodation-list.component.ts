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
  selector: 'app-accomodation-list',
  templateUrl: './accomodation-list.component.html',
  styleUrls: ['./accomodation-list.component.css']
})
export class AccomodationListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
