import { Component, OnInit } from '@angular/core';
import { RegUser } from './register.model';
import { RegisterService } from "../../services/register.service";
import { FormGroup } from "@angular/forms/forms";
import { Router } from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [RegisterService]
})
export class RegisterComponent implements OnInit {
errorMsg:string;
  role: string;
  isChecked : boolean;
  toggledManager: boolean;
  toggledUser: boolean;

  constructor(private router: Router, private registerService: RegisterService) { 
    this.role = "AppUser";
  }

  ngOnInit() {
  }

 register(regDTO: RegUser, form: FormGroup)
  {
    form.reset();
    regDTO.Role = this.role;
    this.registerService.register(regDTO).subscribe(x => { console.log(x); this.router.navigate(['/home']); error=> {alert(error); console.log(error)}})
  }

  chkManager(e) 
  {
    if(e.target.checked)
    { 
      this.role = "Manager";
    }
    else
    {
       this.role = "";
    }
  }
  
  chkUser(e) 
  {
    if(e.target.checked)
    {     
      this.role = "AppUser";
    }
    else
    {
       this.role = "";
    }
  }
}
