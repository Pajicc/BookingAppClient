import { Component } from '@angular/core';
import { AuthService } from 'app/services/auth.service';
import { Router, ActivatedRoute } from "@angular/router";
import { MapInfo } from "./map/map-info.model"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthService]
})
export class AppComponent {
  title = 'app';
  mapInfo: MapInfo;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private authService: AuthService) {
    this.mapInfo = new MapInfo(45.242268, 19.842954,
      "assets/ftn.png",
      "Jugodrvo", "", "http://ftn.uns.ac.rs/691618389/fakultet-tehnickih-nauka");
  }

  ngOnInit() {
    //this.router.navigate(['/home']);
  }

  isUserLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }
  isAdmin(): boolean {
    return this.authService.isUserAdmin();
  }
  isAppUser(): boolean {
    return this.authService.isUserAppUser();
  }
  isManager(): boolean {
    return this.authService.isUserManager();
  }
  userLogout() {
    this.authService.logOut().subscribe(x => { localStorage.clear(); this.router.navigate(['/home']); });
  }

}