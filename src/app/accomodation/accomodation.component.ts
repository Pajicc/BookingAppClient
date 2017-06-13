import { Component, OnInit } from '@angular/core';
import { HttpAccomodationService } from "app/services/http.accomodation.service";
import { Http, Response } from '@angular/http';
import { Accomodation } from "app/accomodation/accomodation.model";
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-accomodation',
  templateUrl: './accomodation.component.html',
  styleUrls: ['./accomodation.component.css'],
  providers: [HttpAccomodationService]
})
export class AccomodationComponent implements OnInit {

  approved: boolean;
  accom: Accomodation;
  accoms: Object[];

  constructor(private httpAccomodationService: HttpAccomodationService) { }

  ngOnInit() {
    this.httpAccomodationService.getAccomodation().subscribe(
      (am: any) => { this.accoms = am; console.log(this.accoms) },
      error => { alert("Unsuccessful fetch operation!"); console.log(error); }
    );
  }

  addAccomodation(newAccom: Accomodation,  form: NgForm): void {
    newAccom.Approved = this.approved;
    this.httpAccomodationService.postAccomodation(newAccom).subscribe(this.onPost);
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
