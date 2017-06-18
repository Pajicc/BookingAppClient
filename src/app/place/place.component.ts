import { Component, OnInit } from '@angular/core';
import { HttpPlaceService } from "app/services/http.place.servise";
import { Place } from "app/place/place.model";
import { NgForm } from '@angular/forms';
import { Http, Response } from '@angular/http';
import { Region } from "../region/region.model";
import { HttpRegionService } from "../services/http.region.service";

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css'],
  providers: [HttpPlaceService, HttpRegionService]
})
export class PlaceComponent implements OnInit {
errorMsg:string;
  place: Place;
  places: Object[];
  region: Region;
  regions: Object[];
  id: number;
  regionId: number;

  constructor(private httpPlaceService: HttpPlaceService,
    private httpRegionService: HttpRegionService) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.httpPlaceService.getPlaces().subscribe(
      (pl: any) => { this.places = pl; console.log(this.places) },
      error => { alert("Unsuccessful fetch operation!"); console.log(error); }
    );
    this.httpRegionService.getRegions().subscribe(
      (reg: any) => {this.regions = reg; console.log(this.regions)}
    );
  }

  addPlace(newPlace: Place, form: NgForm): void {
    
    if(!form.valid){
      return;
    }
    this.httpPlaceService.postPlace(newPlace).subscribe(
      (co: any) => { this.ngOnInit() },
      (error:any) =>{ this.errorMsg = error.json().Message;
        console.log(error); }
    );
    form.reset();
  }

  deletePlace() : void{
       this.httpPlaceService.deletePlace(this.id).subscribe(
        (pl: any) => {this.getAll() },
         error => {alert("Unsuccessful delete!"); console.log(error);}
      );
    }

    editPlace() : void{
      this.httpPlaceService.updatePlace(this.place).subscribe(
        (pl: any) => {this.getAll() },
         error => {alert("Unsuccessful edit!"); console.log(error);}
      );
    }

    setId(id: number){
      this.id = id;
    }

    setPlace(pl: Place){
      this.place = pl;
    }

  onPost(res: any): void {
    alert("Post!");
    console.log(res.json());
  }
}
