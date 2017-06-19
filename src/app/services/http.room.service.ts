import { Injectable } from "@angular/core"
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {Room} from '../room/room.model';

import 'rxjs/add/operator/map';

@Injectable()
export class HttpRoomService{
    room: Room;

    constructor(private http:Http){

    }

    getRooms():Observable<any>{
        return this.http.get("http://localhost:54042/api/Rooms").map(this.extractData);

    }

    private extractData(res: Response) {
        let body = res.json();
        return body || [];
    }

    postRoom(room):Observable<any>{
        const headers: Headers = new Headers();
        headers.append('Accept', 'applicaton/json');
        headers.append('Content-type', 'application/json');
        headers.append('Authorization', 'Bearer ' +localStorage.getItem('token'));

        const opts: RequestOptions = new RequestOptions();
        opts.headers = headers;

         return this.http.post(
        'http://localhost:54042/api/Rooms',
        JSON.stringify({
            RoomNumber: room.RoomNumber,
            BedCount: room.BedCount,
            Description: room.Description,
            PricePerNight: room.PricePerNight,
            AccomodationId: room.AccomodationId
        }), opts);
    }

     deleteRoom(id: number): Observable<any>
    {
        let header = new Headers();
        header.append('Authorization', 'Bearer ' + localStorage.getItem('token'));

        let opts = new RequestOptions();
        opts.headers = header;

        return this.http.delete(`http://localhost:54042/api/Rooms/${id}`, opts);
    }

    updateRoom(ro: Room) : Observable<any>{

        const headers: Headers = new Headers();
        headers.append('Accept', 'application/json');
        headers.append('Content-type', 'application/json');
        headers.append('Authorization', 'Bearer ' + localStorage.getItem('token'));

        const opts: RequestOptions = new RequestOptions();
        opts.headers = headers;

       return this.http.put(`http://localhost:54042/api/Rooms/${ro.Id}`,  
       JSON.stringify(ro), opts);
    }
}