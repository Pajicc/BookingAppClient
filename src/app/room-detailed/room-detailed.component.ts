import { Component, OnInit,Input } from '@angular/core';
import { Room } from '../room/room.model';

@Component({
  selector: 'app-room-detailed',
  templateUrl: './room-detailed.component.html',
  styleUrls: ['./room-detailed.component.css']
})
export class RoomDetailedComponent implements OnInit {

  @Input() room: Room;

  constructor() { }

  ngOnInit() {
  }

}
