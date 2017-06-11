import { Injectable } from "@angular/core"
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { RegUser } from '../pages/register/register.model';

@Injectable()
export class RegisterService{

    constructor (private http: Http){
        
    }

     register(regUser: RegUser): Observable<any>  {
        const headers: Headers = new Headers();
        //headers.append('Accept', 'application/json');
        headers.append('Content-type', 'application/json');

        const opts: RequestOptions = new RequestOptions();
        opts.headers = headers;

        return this.http.post(
        'http://localhost:54042/api/Account/Register',
        JSON.stringify(regUser), opts);
  }
  
}