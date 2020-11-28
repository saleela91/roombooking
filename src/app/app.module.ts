import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoomCardComponent } from './room/room-card/room-card.component';
import { RoomListComponent } from './room/room-list/room-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {HousingService} from './service/housing.service';
import { AddRoomComponent } from './room/add-room/add-room.component';
import {Routes, RouterModule} from '@angular/router';
import { CancelComponent } from './room/cancel/cancel.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import{ BrowserAnimationsModule} from '@angular/platform-browser/animations';
import{FormsModule, ReactiveFormsModule} from '@angular/forms';
import { StoreModule } from '@ngrx/store';


const appRoutes: Routes=[
  {path:'', component:RoomListComponent},
  {path:'add-room/:Name', component:AddRoomComponent},
  {path:'cancel/:Name', component:CancelComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    RoomCardComponent,
    RoomListComponent,
    NavBarComponent,
    AddRoomComponent,
    CancelComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({}, {})
  ],
  providers: [
    HousingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
