
import { Component, OnInit } from '@angular/core';
import { HousingService } from 'src/app/service/housing.service';
import{IRoom} from '../IRoom.interface';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit {

  rooms: Array<IRoom> ;
  constructor(private housingService:HousingService) { }

  ngOnInit(): void {
    this.housingService.getAllProperties().subscribe(
      data=>{
        this.rooms=data;
        console.log(data);

      },
      error=>{
        console.log(error);

      }
    );
    }

}
