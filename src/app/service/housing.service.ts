import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { IRoom } from '../room/IRoom.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http:HttpClient) { }
  getAllProperties():Observable<IRoom[]>{
    return this.http.get('data/room.json').pipe(
      map(data=>{
        const roomsArray:Array<IRoom>=[];
        for(const id in data){
          if(data.hasOwnProperty(id)){
            roomsArray.push(data[id]);
          }
         
        }return roomsArray;
      }
      )
    )
  }
}
