import { Component, OnInit, Input } from '@angular/core';
import { MapInfo } from "../map/map-info.model";
import { AgmCoreModule } from '@agm/core';
import { Accomodation } from "app/accomodation/accomodation.model";

@Component({
  selector: 'app-accomodation-detailed',
  templateUrl: './accomodation-detailed.component.html',
  styleUrls: ['./accomodation-detailed.component.css']
})
export class AccomodationDetailedComponent implements OnInit {

  @Input() accom: Accomodation;
  hiddenComments: boolean;

  constructor() { 
    this.hiddenComments = false;
  }

  ngOnInit() {
  }

showComments(){

    if(this.hiddenComments === true)
      this.hiddenComments = false;
    else
      this.hiddenComments = true;
  }
}
