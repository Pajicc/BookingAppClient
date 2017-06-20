import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Http, Response } from '@angular/http';
import { HttpRoomReservationService } from "app/services/http.room-reservation.service";
import { RoomReservations } from '../room-reservation/room-reservation.model';
import { HttpAppUserService } from "../services/http.app-user.service";
import { HttpRoomService } from "../services/http.room.service";
import { Room } from "../room/room.model";
import { AppUser } from "../app-user/app-user.model";
import {
  Router,
  ActivatedRoute
} from '@angular/router';
@Component({
  selector: 'app-room-reservation',
  templateUrl: './room-reservation.component.html',
  styleUrls: ['./room-reservation.component.css'],
  providers: [
    HttpRoomReservationService,
    HttpRoomService,
    HttpAppUserService]
})
export class RoomReservationComponent implements OnInit {
  roomRes: RoomReservations;
  roomRess: Object[];
  room: Room;
  rooms: Object[];
  appUser: AppUser;
  appUsers: Object[];

  //id: string = "-1";

  roomResid: number;
  userId: number;
  roomId: number;

   errorMsg: string;

  constructor(//private router: Router, private activatedRoute: ActivatedRoute,
  private httpRoomReservationService: HttpRoomReservationService,
    private httpRoomService: HttpRoomService, private httpAppUserService: HttpAppUserService) { 
       //activatedRoute.params.subscribe(params => {this.id = params["id"]});
    }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.httpRoomReservationService.getRoomResForUser(parseInt(localStorage.getItem('userID'))).subscribe(
      (rr: any) => { this.roomRess = rr; console.log(this.roomRess) },
      error => { alert("Unsuccessful fetch operation!"); console.log(error); }
    );
    /*this.httpRoomService.getRoomsForAcc(parseInt(this.id)).subscribe(
      (ro: any) => { this.rooms = ro; console.log(this.rooms) }
    );*/
    /*this.httpRoomService.getRooms().subscribe(
      (ro: any) => { this.rooms = ro; console.log(this.rooms) }
    );*/
  }

  /*addRoomReservations(newRoomRes: RoomReservations, form: NgForm): void {
    newRoomRes.AppUserId = parseInt(localStorage.getItem('userID')); 
    newRoomRes.Timestamp=null;
    newRoomRes.Canceled = false;
    //newRoomRes.Timestamp = Date.now();

    this.httpRoomReservationService.postRoomReservations(newRoomRes).subscribe(
      (co: any) => { this.ngOnInit() },
      error => { alert("Unsuccessful insert operation!"); console.log(error); }
    );
    form.reset();
  }*/

  deleteRoomRes(): void {
    this.httpRoomReservationService.deleteRoomRes(this.roomResid).subscribe(
      (ro: any) => { this.getAll() },
      
      (error: any) => {
        this.errorMsg = error.json().Message;
        console.log(error);
      }
    );
  }

  editRoomRes(): void {
    this.httpRoomReservationService.updateRoomRes(this.roomRes).subscribe(
      (ro: any) => { this.getAll() },
      error => { alert("Unsuccessful edit!"); console.log(error); }
    );
  }

  setId(id: number) {
    this.roomResid = id;
  }

  setRoomRes(rr: RoomReservations) {
    this.roomRes = rr;
  }

  onPost(res: any): void {
    alert("Post!");
    console.log(res.json());
  }
}
