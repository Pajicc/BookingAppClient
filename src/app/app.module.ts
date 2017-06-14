import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';

import { AccomodationTypeComponent } from './accomodation-type/accomodation-type.component';
import { AccomodationComponent } from './accomodation/accomodation.component';
import { CommentComponent } from './comment/comment.component';
import { CountryComponent } from './country/country.component';
import { PlaceComponent } from './place/place.component';
import { RegionComponent } from './region/region.component';
import { RoomComponent } from './room/room.component';
import { RoomReservationComponent } from './room-reservation/room-reservation.component';
import { AppUserComponent } from './app-user/app-user.component';

import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { Comment } from './comment/comment.model';
import { AdminComponent } from './pages/admin/admin.component';
import { LogoutComponent } from './logout/logout.component';
import { AccomodationListComponent } from './accomodation-list/accomodation-list.component';

/*const ChildRoutes = [
   {path: "country", component: CountryComponent},
   {path: "accTypes", component: AccomodationTypeComponent},
   {path: "appUser", component: AppUserComponent},
   {path: "appUser", component: AppUserComponent},
   {path: "appUser", component: AppUserComponent},
]*/

const Routes = [
 // { path: '', redirectTo: '/home', pathMatch: 'full'},  //ako je prazno, redirectuj na home
  { path: "home", component: HomeComponent},
  { path: "login", component: LoginComponent},
  { path: "register", component: RegisterComponent},
  { path: "admin", component: AdminComponent},
  { path: "countries", component: CountryComponent},
  { path: "places", component: PlaceComponent},
  { path: "accTypes", component: AccomodationTypeComponent},
  { path: "acc", component: AccomodationComponent},
  { path: "comments", component: CommentComponent},
  { path: "regions", component: RegionComponent},
  { path: "appUsers", component: AppUserComponent},
  { path: "rooms", component: RoomComponent},
  { path: "roomReservations", component: RoomReservationComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    CountryComponent,
    HomeComponent,
    AccomodationTypeComponent,
    AccomodationComponent,
    CommentComponent,
    PlaceComponent,
    RegionComponent,
    RoomComponent,
    RoomReservationComponent,
    AppUserComponent,
    LoginComponent,
    RegisterComponent,
    AdminComponent,
    LogoutComponent,
    AccomodationListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(Routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
