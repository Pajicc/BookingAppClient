import { Component, OnInit } from '@angular/core';
import {AccType} from './accomodation-type.model';
import { Http, Response } from '@angular/http';
import { HttpAccTypeService } from '../services/http.accType.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-accomodation-type',
  templateUrl: './accomodation-type.component.html',
  styleUrls: ['./accomodation-type.component.css'],
  providers: [HttpAccTypeService]
})
export class AccomodationTypeComponent implements OnInit {

  accType: AccType;   //iz forme
  accTypes : Object []; //iz get metode - iz baze

  constructor(private httpAccTypeService: HttpAccTypeService) { }
  

  ngOnInit() {
    this.httpAccTypeService.getAccTypes().subscribe(
      (at: any) => {this.accTypes = at; console.log(this.accTypes) },
      error => {alert("Unsuccessful fetch operation!"); console.log(error);}
    );
    }

  addAccType(newAccType: AccType, form: NgForm) : void{
      this.httpAccTypeService.postAccType(newAccType).subscribe(
        (at: any) => {this.ngOnInit() },
         error => {alert("Unsuccessful added accomodation type!"); console.log(error);}
      );
      form.reset();
     
    }    

  onPost(res : any) : void{
      alert("Post!");
      console.log(res.json());
    }

    deleteAccType(accTypeName: string) : void{
      alert("Delete invoked!"+accTypeName);
    }

    editAccType(accTypeName: string) : void{
      alert("Edit invoked!"+accTypeName);
    }
  }