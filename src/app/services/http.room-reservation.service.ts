import { Injectable } from "@angular/core"
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {RoomReservations} from '../room-reservation/room-reservation.model';

import 'rxjs/add/operator/map';

@Injectable()
export class HttpRoomReservationService{
    roomRes:RoomReservations;

     constructor(private http:Http){

    }

    getRoomReservations():Observable<any>{
        return this.http.get("http://localhost:54042/api/RoomReservations").map(this.extractData);
    }
     private extractData(res: Response) {
        let body = res.json();
        return body || [];
    }

    postRoomReservations(roomRes):Observable<any>{
        const headers: Headers = new Headers();
        headers.append('Accept', 'applicaton/json');
        headers.append('Content-type', 'application/json');

        const opts: RequestOptions = new RequestOptions();
        opts.headers = headers;

         return this.http.post(
        'http://localhost:54042/api/RoomReservations',
        JSON.stringify({
            StartDate: roomRes.StartDate
        }), opts);
    }
}
