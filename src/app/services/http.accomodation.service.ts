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
        return this.http.get("hettp://localhost:54042/api/Accomodations").map(this.extractData);

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
            Longitude: accom.Longitude,
            ImageUrl: accom.ImageUrl,
            Approved: accom.Approved,
            PlaceId: accom.PlaceId,
            AppUserId: accom.AppUserId,
            AccomodationTypeId: accom.AccomodationTypeId
        }), opts);
    }
}