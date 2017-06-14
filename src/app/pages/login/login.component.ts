import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { NgForm } from '@angular/forms';
import { LoginModel } from './login.model';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { AdminComponent } from '../admin/admin.component';

import {
  Router,
  ActivatedRoute
} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {
  model: any = {};
 
  constructor(
    private router: Router,
    private authService: AuthService,
    private http: Http
  ) { }

  logIn(loginUser: LoginModel, form: NgForm): void {
    this.authService.logIn(loginUser).subscribe(x => { 
      this.onLogin(x); 
      this.router.navigate(['/home']); },
       x => alert('Failed to login!'));
       
    /*if(localStorage.getItem("role")=="Admin")
    {
       this.router.navigate(['/admin']);
    } */
  }

 onLogin(response: Response) : void {

        let response_json = response.json();
        let access_token = response_json['access_token'];
        console.log(access_token);      
        let role = response.headers.get('Role');
        console.log(role);
        let appUserID = response.headers.get('appUserID');
        console.log(appUserID);
        localStorage.setItem('token',access_token);
        localStorage.setItem('role',role);      
        localStorage.setItem('appUserID',appUserID);     
    }

  logOut() {
    this.authService.logOut();
  }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  ngOnInit() {
  }

}
