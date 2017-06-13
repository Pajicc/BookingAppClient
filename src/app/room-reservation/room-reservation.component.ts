import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Http, Response } from '@angular/http';
import { HttpRoomReservationService } from "app/services/http.room-reservation.service";
import { RoomReservations } from '../room-reservation/room-reservation.model';

@Component({
  selector: 'app-room-reservation',
  templateUrl: './room-reservation.component.html',
  styleUrls: ['./room-reservation.component.css']
})
export class RoomReservationComponent implements OnInit {
  roomRes: RoomReservations;
  roomRess: Object[];

  constructor(private httpRoomReservationService: HttpRoomReservationService) { }

  ngOnInit() {
    this.httpRoomReservationService.getRoomReservations().subscribe(
      (rr: any) => { this.roomRess = rr; console.log(this.roomRess) },
      error => { alert("Unsuccessful fetch operation!"); console.log(error); }
    );
  }

  addRoomReservations(newRoomRes: RoomReservations, form: NgForm): void {
    this.httpRoomReservationService.postRoomReservations(newRoomRes).subscribe(this.onPost);
    form.reset();
  }
  onPost(res: any): void {
    alert("Post!");
    console.log(res.json());
  }
}
