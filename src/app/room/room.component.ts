import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Http, Response } from '@angular/http';
import { HttpRoomService } from "app/services/http.room.service";
import { Room } from '../room/room.model';
import { Accomodation } from "../accomodation/accomodation.model";
import { HttpAccomodationService } from "../services/http.accomodation.service";


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
  id: number;

  constructor(
    private httpRoomService: HttpRoomService, private httpAccomodationService: HttpAccomodationService) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.httpRoomService.getRooms().subscribe(
      (ro: any) => { this.rooms = ro; console.log(this.rooms) },
      error => { alert("Unsuccessful fetch operation!"); console.log(error); }
    );
    this.httpAccomodationService.getAccomodation().subscribe(
      (acc: any) => { this.accoms = acc; console.log(this.accoms) }
    );
  }

  addRoom(newRoom: Room, form: NgForm): void {
    this.httpRoomService.postRoom(newRoom).subscribe(
      (co: any) => { this.ngOnInit() },
      error => { alert("Unsuccessful insert operation!"); console.log(error); }
    );
    form.reset();
  }

  deleteRoom(): void {
    this.httpRoomService.deleteRoom(this.id).subscribe(
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
    this.id = id;
  }

  setRoom(rr: Room) {
    this.room = rr;
  }

  onPost(res: any): void {
    alert("Post!");
    console.log(res.json());
  }
}
