import { Injectable } from "@angular/core"
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Place } from '../place/place.model';

import 'rxjs/add/operator/map';

@Injectable()
export class HttpPlaceService {

    place: Place;

    constructor(private http: Http) {

    }

    getPlaces(): Observable<any> {
        return this.http.get("http://localhost:54042/api/Places").map(this.extractData);

    }

    private extractData(res: Response) {
        let body = res.json();
        return body || [];
    }

    postPlace(place): Observable<any> {
        const headers: Headers = new Headers();
        headers.append('Accept', 'applicaton/json');
        headers.append('Content-type', 'application/json');
        headers.append('Authorization', 'Bearer ' +localStorage.getItem('token'));

        const opts: RequestOptions = new RequestOptions();
        opts.headers = headers;

        return this.http.post(
        'http://localhost:54042/api/Places',
        JSON.stringify({
            Name: place.Name,
            RegionId: place.RegionId
        }), opts);
    }

     deletePlace(id: number): Observable<any>
    {
        let header = new Headers();
        header.append('Authorization', 'Bearer ' + localStorage.getItem('token'));

        let opts = new RequestOptions();
        opts.headers = header;

        return this.http.delete(`http://localhost:54042/api/Places/${id}`, opts);
    }

    updatePlace(pl: Place) : Observable<any>{

        const headers: Headers = new Headers();
        headers.append('Accept', 'application/json');
        headers.append('Content-type', 'application/json');
        headers.append('Authorization', 'Bearer ' + localStorage.getItem('token'));

        const opts: RequestOptions = new RequestOptions();
        opts.headers = headers;

       return this.http.put(`http://localhost:54042/api/Places/${pl.Id}`,  
       JSON.stringify(pl), opts);
    }
}