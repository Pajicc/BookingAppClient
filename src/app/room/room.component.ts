import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Http, Response } from '@angular/http';
import { HttpRoomService } from "app/services/http.room.service";
import { Room } from '../room/room.model';


@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css'],
  providers: [
  HttpRoomService]
})
export class RoomComponent implements OnInit {

  room: Room;
  rooms: Object[];


  constructor(
    private httpRoomService: HttpRoomService) { }

  ngOnInit() {
    this.httpRoomService.getRooms().subscribe(
      (ro: any) => { this.rooms = ro; console.log(this.rooms) },
      error => { alert("Unsuccessful fetch operation!"); console.log(error); }
    );
  
  }

  addRoom(newRoom: Room, form: NgForm): void {
    this.httpRoomService.postRoom(newRoom).subscribe(
      (co: any) => {this.ngOnInit() },
      error => { alert("Unsuccessful insert operation!"); console.log(error);}
    );
    form.reset();
  }

  onPost(res: any): void {
    alert("Post!");
    console.log(res.json());
  }
}
