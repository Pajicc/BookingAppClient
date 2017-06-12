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
    this.authService.logIn(loginUser).subscribe(this.onLogin,
      error => {
        alert(error.text());
        console.log(error.text());
      });
    form.reset();
    
    if(localStorage.getItem("role")=="Admin")
    {
       this.router.navigate(['/admin']);
    }
  }

  onLogin(response: any) {


    localStorage.setItem('token_id', response.json().access_token);
    localStorage.setItem('role', response.headers.get('Role'));

    console.log(response.json());

    //this.router.navigate([`/home`]);

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
