import { Injectable } from "@angular/core"
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AccType } from '../accomodation-type/accomodation-type.model';

import 'rxjs/add/operator/map';

@Injectable()
export class HttpAccTypeService {

    constructor(private http: Http) {

    }

    getAccTypes(): Observable<any> {

        return this.http.get("http://localhost:54042/api/AccomodationTypes").map(this.extractData);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body || [];
    }

    postAccType(accType): Observable<any> {
        const headers: Headers = new Headers();
        headers.append('Accept', 'application/json');
        headers.append('Content-type', 'application/json');

        const opts: RequestOptions = new RequestOptions();
        opts.headers = headers;

        return this.http.post(
            'http://localhost:54042/api/AccomodationTypes',
            JSON.stringify({
                Name: accType.Name
            }), opts);
    }

    deleteAccType(id: number): Observable<any>
    {
        let header = new Headers();
        //header.append('Authorization', 'Bearer ' + localStorage.getItem('token'));

        let opts = new RequestOptions();
        opts.headers = header;

        return this.http.delete(`http://localhost:54042/api/AccomodationTypes/${id}`, opts);
    }

    updateAccType(accType: AccType) : Observable<any>{

        const headers: Headers = new Headers();
        headers.append('Accept', 'application/json');
        headers.append('Content-type', 'application/json');
        //headers.append('Authorization', 'Bearer ' + localStorage.getItem('token'));

        const opts: RequestOptions = new RequestOptions();
        opts.headers = headers;

       return this.http.put(`http://localhost:54042/api/AccomodationTypes/${accType.Id}`,  
       JSON.stringify(accType), opts);
    }

    getById(id: number) : Observable<any> {
        
        return this.http.get('http://localhost:54042/api/AccomodationTypes$(id)').map(this.extractData);
    }
    
}