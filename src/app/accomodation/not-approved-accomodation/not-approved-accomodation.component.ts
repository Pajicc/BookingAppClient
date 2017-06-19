import { Component, OnInit } from '@angular/core';
import { Accomodation } from "app/accomodation/accomodation.model";
import { HttpAccomodationService } from "app/services/http.accomodation.service";


@Component({
  selector: 'app-not-approved-accomodation',
  templateUrl: './not-approved-accomodation.component.html',
  styleUrls: ['./not-approved-accomodation.component.css'],
  providers: [
    HttpAccomodationService]
})
export class NotApprovedAccomodationComponent implements OnInit {

 accoms : Accomodation[];

  constructor( private httpAccomodationService: HttpAccomodationService) { }

  getNotApprovedAccs(){
    this.httpAccomodationService.getNotApprovedAccomodations().subscribe(
      (am: any) => { this.accoms = am; console.log(this.accoms) },
      error => { alert("Unsuccessful accomodation fetch operation!"); console.log(error); }
    );
  }

  ngOnInit() {
    this.getNotApprovedAccs();
  }

approveAccomodation(acc: Accomodation) {

    acc.Approved = true;

    this.httpAccomodationService.updateAccomodation(acc).subscribe(
      (at: any) => { this.getNotApprovedAccs() },
      error => { alert("Unsuccessfully approved!"); console.log(error); }
    );
  }

}
