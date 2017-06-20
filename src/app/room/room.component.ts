import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Http, Response } from '@angular/http';
import { HttpRoomService } from "app/services/http.room.service";
import { Room } from '../room/room.model';
import { Accomodation } from "../accomodation/accomodation.model";
import { HttpAccomodationService } from "../services/http.accomodation.service";
import {
  Router,
  ActivatedRoute
} from '@angular/router';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css'],
  providers: [
    HttpRoomService, HttpAccomodationService]
})
export class RoomComponent implements OnInit {

  room: Room;
  rooms: Object[];
  accom: Accomodation;
  accoms: Object[];
  roomId: number;
  id: string = "-1";

  constructor(
    private httpRoomService: HttpRoomService, private httpAccomodationService: HttpAccomodationService,
    private router: Router, private activatedRoute: ActivatedRoute) { 
    activatedRoute.params.subscribe(params => {this.id = params["id"]}); }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.httpRoomService.getRoomsForAcc(parseInt(this.id)).subscribe(
      (co: any) => { this.rooms = co; },
      error => { alert("Unsuccessful insert operation!"); console.log(error); }
    );
    this.httpAccomodationService.getApprovedAccomodations().subscribe(
      (acc: any) => { this.accoms = acc; console.log(this.accoms) }
    );
  }

  addRoom(newRoom: Room, form: NgForm): void {

    newRoom.AccomodationId = parseInt(this.id);

    this.httpRoomService.postRoom(newRoom).subscribe(
      (co: any) => { this.ngOnInit() },
      error => { alert("Unsuccessful insert operation!"); console.log(error); }
    );
    form.reset();
  }

  deleteRoom(): void {
    this.httpRoomService.deleteRoom(this.roomId).subscribe(
      (ro: any) => { this.getAll() },
      error => { alert("Unsuccessful delete!"); console.log(error); }
    );
  }

  editRoom(): void {
    this.httpRoomService.updateRoom(this.room).subscribe(
      (ro: any) => { this.getAll() },
      error => { alert("Unsuccessful edit!"); console.log(error); }
    );
  }

  setId(id: number) {
    this.roomId = id;
  }

  setRoom(rr: Room) {
    this.room = rr;
  }

  onPost(res: any): void {
    alert("Post!");
    console.log(res.json());
  }
}
