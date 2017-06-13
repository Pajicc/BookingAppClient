import { Component, OnInit } from '@angular/core';
import { HttpPlaceService } from "app/services/http.place.servise";
import { Place } from "app/place/place.model";
import { NgForm } from '@angular/forms';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css'],
  providers: [HttpPlaceService]
})
export class PlaceComponent implements OnInit {

  place: Place;
  places: Object[];

  constructor(private httpPlaceService: HttpPlaceService) { }

  ngOnInit() {
    this.httpPlaceService.getPlaces().subscribe(
      (pl: any) => { this.places = pl; console.log(this.places) },
      error => { alert("Unsuccessful fetch operation!"); console.log(error); }
    );
  }

  addPlace(newPlace: Place, form: NgForm): void {
    this.httpPlaceService.postPlace(newPlace).subscribe(this.onPost);
    form.reset();
  }
  onPost(res: any): void {
    alert("Post!");
    console.log(res.json());
  }
}
