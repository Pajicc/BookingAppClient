import { Component, OnInit } from '@angular/core';
import {
  Router,
  ActivatedRoute
} from '@angular/router';
import { NgForm } from '@angular/forms';
import { Http, Response } from '@angular/http';
import { HttpRoomReservationService } from "app/services/http.room-reservation.service";
import { RoomReservations } from '../room-reservation/room-reservation.model';
import { HttpRoomService } from "../services/http.room.service";
import { Room } from "../room/room.model";

@Component({
  selector: 'app-add-room-reservation',
  templateUrl: './add-room-reservation.component.html',
  styleUrls: ['./add-room-reservation.component.css'],
   providers: [
    HttpRoomReservationService,
    HttpRoomService]
})
export class AddRoomReservationComponent implements OnInit {

  id: string = "-1";
  rooms: Room[];
  room: Room;
  errorMsg: string;

 constructor(private router: Router, private activatedRoute: ActivatedRoute,
    private httpRoomReservationService: HttpRoomReservationService,
    private httpRoomService: HttpRoomService) {

      activatedRoute.params.subscribe(params => {this.id = params["id"]});
   }

  ngOnInit() {
     this.httpRoomService.getRoomsForAcc(parseInt(this.id)).subscribe(
      (ro: any) => { this.rooms = ro; console.log(this.rooms) }
    );
  }

  addRoomReservations(newRoomRes: RoomReservations, form: NgForm): void {
    newRoomRes.AppUserId = parseInt(localStorage.getItem('userID')); 
    newRoomRes.Timestamp=null;
    newRoomRes.Canceled = false;
    //newRoomRes.Timestamp = Date.now();

    this.httpRoomReservationService.postRoomReservations(newRoomRes).subscribe(
      (co: any) => { alert("Successfully reserved") },
      
      (error: any) => {
        this.errorMsg = error.json().Message;
        console.log(error);
      }
    );
    form.reset();
  }

  loadRoom(roomId: number){
    this.httpRoomService.getRoomById(roomId).subscribe(
      (ro: any) => { this.room = ro; console.log(this.room) }
    );
  }

}
