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

  accTypeName: string;   //za edit i delete
  accType: AccType;   
  accTypes : Object []; //iz get metode - iz baze
  id: number;
 
  constructor(private httpAccTypeService: HttpAccTypeService) { }
  
 getAll(){
  this.httpAccTypeService.getAccTypes().subscribe(
      (at: any) => {this.accTypes = at; console.log(this.accTypes) },
      error => {alert("Unsuccessful fetch operation!"); console.log(error);}
    );
 }


  ngOnInit() {
      this.getAll();
    }

  addAccType(newAccType: any, form: NgForm) : void{
      this.httpAccTypeService.postAccType(newAccType).subscribe(
        (at: any) => {this.getAll() },
         error => {alert("Unsuccessful added accomodation type!"); console.log(error);}
      );
      form.reset();
     
    }    

  onPost(res : any) : void{
      alert("Post!");
      console.log(res.json());
    }

    deleteAccType() : void{
       this.httpAccTypeService.deleteAccType(this.id).subscribe(
        (at: any) => {this.getAll() },
         error => {alert("Unsuccessful delete!"); console.log(error);}
      );
    }

    editAccType() : void{
      this.httpAccTypeService.updateAccType(this.accType).subscribe(
        (at: any) => {this.getAll() },
         error => {alert("Unsuccessful edit!"); console.log(error);}
      );
    }

    setId(id: number){
      this.id = id;
    }

    setAccType(accType: AccType){
      this.accType = accType;
    }

    getById(){
       this.httpAccTypeService.getById(this.id).subscribe(x =>  this.accType = x[0] as AccType);
    }

  }