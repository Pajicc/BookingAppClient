import { Injectable } from "@angular/core"
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { LoginModel } from '../pages/login/login.model';

@Injectable()
export class AuthService{

    loggedIn : boolean;

    constructor (private http: Http){
        
    }

    logIn(userLogin: LoginModel): Observable<any>{

        //localStorage.setItem("token","myToken");

       let header = new Headers();
        header.append('Content-Type', 'application/x-www-form-urlencoded');

        let opts = new RequestOptions();
        opts.headers = header;
             
        return this.http.post(
        'http://localhost:54042/oauth/token',
        `username=${userLogin.Username}&password=${userLogin.Password}&grant_type=password`,opts);
    }

    logOut() : Observable<any> {
        
        let header = new Headers();
        header.append('Content-type', 'application/x-www-form-urlencoded');
        header.append('Authorization', 'Bearer ' + localStorage.getItem('token'));

        let opts = new RequestOptions();
        opts.headers = header;

        return this.http.post(`http://localhost:54042/api/Account/Logout`, "", opts);
        
    }

    isLoggedIn(): boolean{
        if(localStorage.getItem("token") !== null)
            return true;
        else
            return false;
    }

    isUserAdmin():boolean
    {
        return (localStorage.getItem('role') === 'Admin' )
    }
    
    isUserManager():boolean
    {
        return (localStorage.getItem('role') === 'Manager' )
    }

    isUserAppUser():boolean
    {
        return (localStorage.getItem('role') === 'AppUser' )
    }
}