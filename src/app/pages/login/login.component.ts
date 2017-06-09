import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import {NgForm} from '@angular/forms';
import { LoginModel } from './login.model';
import {
  Router,
  ActivatedRoute
} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ AuthService ]
})
export class LoginComponent implements OnInit {

 constructor(private authService: AuthService){

 }
  
  logIn(loginUser: LoginModel, form: NgForm) : void{
      this.authService.logIn(loginUser).subscribe(this.onLogin);
    form.reset();
  }

  onLogin(){
    
   alert("Uspesno logovan!");
 }

  logOut(){
    this.authService.logOut();
  }

  isLoggedIn() : boolean{
    return this.authService.isLoggedIn();
  }

  ngOnInit() {
  }

}
