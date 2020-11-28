import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { IRoom } from '../IRoom.interface';

@Component({
  selector: 'app-room-card',
  templateUrl: './room-card.component.html',
  styleUrls: ['./room-card.component.css']
})
export class RoomCardComponent  {

  @Input() room:IRoom;
  
 sub(){
  console.log('booking');
 }
  canc(){
    console.log('cancelling');
  }

}
