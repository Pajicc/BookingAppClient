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
import { AppUserComponent } from './app-user/app-user.component'

const ChildRoutes = [
   {path: "country", component: CountryComponent},
   {path: "accTypes", component: AccomodationTypeComponent},
  ]

const Routes = [
 // { path: '', redirectTo: '/home', pathMatch: 'full'},  //ako je prazno, redirectuj na home
  { path: "home", component: HomeComponent, children: ChildRoutes},
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
    AppUserComponent
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
