import { Injectable } from "@angular/core"
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AppUser } from '../app-user/app-user.model';

import 'rxjs/add/operator/map';

@Injectable()
export class HttpAppUserService{
    appUser: AppUser;

    constructor(private http:Http){

    }

    getAppUsers():Observable<any> {
        return this.http.get("http://localhost:54042/api/AppUser").map(this.extractData);
    }

    private extractData(res:Response){
        let body = res.json();
        return body || [];
    }

    getUserbyId(id: number):Observable<any> {
        const headers: Headers = new Headers();
        headers.append('Accept', 'application/json');
        headers.append('Content-type', 'application/json');
        //headers.append('Authorization', 'Bearer ' + localStorage.getItem('token'));
        const opts: RequestOptions = new RequestOptions();
        opts.headers = headers;

        return this.http.get(`http://localhost:54042/api/AppUser/${id}`, opts).map(this.extractData);
    }

    postAppUser(appUser):Observable<any>{
        const headers: Headers = new Headers();
        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/json');
       // headers.append('Authorization', 'Bearer ' + localStorage.getItem('Role'));

        const opts: RequestOptions = new RequestOptions();
        opts.headers = headers;
        
        return this.http.post(
            'http://localhost:54042/api/AppUser',
            JSON.stringify({
                    Userame: appUser.Username,
                    Password: appUser.Password,
                    Email: appUser.Email
            }),opts);
    }
}