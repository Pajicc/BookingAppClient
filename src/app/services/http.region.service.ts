import { Injectable } from "@angular/core"
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {Region } from '../region/region.model';
import {Country } from '../country/country.model';

 import 'rxjs/add/operator/map';

@Injectable()
export class HttpRegionService{
    region: Region;

    constructor(private http:Http){

    }

    getRegions():Observable<any>{
        return this.http.get("http://localhost:54042/api/Regions").map(this.extractData);

    }

     private extractData(res: Response) {
        let body = res.json();
        return body || [];
    }

    postRegion(region):Observable<any>{
        const headers: Headers = new Headers();
        headers.append('Accept', 'applicaton/json');
        headers.append('Content-type', 'application/json');
        headers.append('Authorization', 'Bearer ' +localStorage.getItem('token'));  

        const opts: RequestOptions = new RequestOptions();
        opts.headers = headers;

        return this.http.post(
        'http://localhost:54042/api/Regions',
        JSON.stringify({
            Name: region.Name,
            CountryId: region.CountryId
        }), opts);
    }

     deleteRegion(id: number): Observable<any>
    {
        let header = new Headers();
        header.append('Authorization', 'Bearer ' + localStorage.getItem('token'));

        let opts = new RequestOptions();
        opts.headers = header;

        return this.http.delete(`http://localhost:54042/api/Regions/${id}`, opts);
    }

    updateRegion(reg: Region) : Observable<any>{

        const headers: Headers = new Headers();
        headers.append('Accept', 'application/json');
        headers.append('Content-type', 'application/json');
        headers.append('Authorization', 'Bearer ' + localStorage.getItem('token'));

        const opts: RequestOptions = new RequestOptions();
        opts.headers = headers;

       return this.http.put(`http://localhost:54042/api/Regions/${reg.Id}`,  
       JSON.stringify(reg), opts);
    }
}