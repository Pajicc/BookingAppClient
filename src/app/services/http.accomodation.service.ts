import { Injectable } from "@angular/core"
import { Accomodation } from "app/accomodation/accomodation.model";
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from "rxjs/Observable";

import 'rxjs/add/operator/map';

@Injectable()
export class HttpAccomodationService{

    accom: Accomodation;

    constructor(private http:Http){

    }

    getAccomodation():Observable<any>{
        return this.http.get("http://localhost:54042/api/Accomodations").map(this.extractData);

    }

    private extractData(res:Response){
        let body = res.json();
        return body || [];
    }

    postAccomodation(accom):Observable<any>{
        const headers : Headers = new Headers();
        headers.append('Accept', 'applicaton/json');
        headers.append('Content-type', 'application/json');

        const opts: RequestOptions = new RequestOptions();
        opts.headers = headers;

        return this.http.post(
        'http://localhost:54042/api/Accomodations',
        JSON.stringify({
            Name: accom.Name,
            Description: accom.Description,
            Address: accom.Address, 
            AverageGrade: accom.AverageGrade,
            Latitude: accom.Latitude,
            Longtitude: accom.Longtitude,
            ImageURL: accom.ImageURL,
            Approved: accom.Approved,
            PlaceId: accom.PlaceId,
            AppUserId: accom.AppUserId,
            AccomodationTypeId: accom.AccomodationTypeId
        }), opts);
    }

    deleteAccomodation(id: number): Observable<any>
    {
        let header = new Headers();
        //header.append('Authorization', 'Bearer ' + localStorage.getItem('token'));

        let opts = new RequestOptions();
        opts.headers = header;

        return this.http.delete(`http://localhost:54042/api/Accomodations/${id}`, opts);
    }

    updateAccomodation(acc: Accomodation) : Observable<any>{

        const headers: Headers = new Headers();
        headers.append('Accept', 'application/json');
        headers.append('Content-type', 'application/json');
        //headers.append('Authorization', 'Bearer ' + localStorage.getItem('token'));

        const opts: RequestOptions = new RequestOptions();
        opts.headers = headers;

       return this.http.put(`http://localhost:54042/api/Accomodations/${acc.Id}`,  
       JSON.stringify(acc), opts);
    }
}