import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Http, Response } from '@angular/http';
import { HttpRoomService } from "app/services/http.room.service";
import { Room } from '../room/room.model';
import {
  Router,
  ActivatedRoute
} from '@angular/router';

@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.css'],
  providers:[ HttpRoomService ]
})
export class AddRoomComponent implements OnInit {

  id: string = "-1";
  rooms: Room[];

  constructor( private httpRoomService: HttpRoomService,
  private router: Router, private activatedRoute: ActivatedRoute) { 
    activatedRoute.params.subscribe(params => {this.id = params["id"]});
  }

  getRooms(){
    this.httpRoomService.getRoomsForAcc(parseInt(this.id)).subscribe(
      (co: any) => { this.rooms = co; },
      error => { alert("Unsuccessful insert operation!"); console.log(error); }
    );
  }

  ngOnInit() {
    this.getRooms();
  }

  addRoom(newRoom: Room, form: NgForm): void {

    newRoom.AccomodationId = parseInt(this.id);

    this.httpRoomService.postRoom(newRoom).subscribe(
      (co: any) => { this.getRooms() },
      error => { alert("Unsuccessful insert operation!"); console.log(error); }
    );
    form.reset();
  }
}
