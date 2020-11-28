import { style } from '@angular/animations';
import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import * as alertify from 'alertifyjs';
import { __values } from 'tslib';

@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.css']
})
export class AddRoomComponent implements OnInit {
  bookingForm:FormGroup;
  

public roomName: string;
public hall: string;




  constructor(private route:ActivatedRoute, private fb:FormBuilder) { }

  ngOnInit(): void {
    this.roomName=this.route.snapshot.params['Name'];
 
  
    /*this.bookingForm=new FormGroup({
      date:new FormControl(),
      time:new FormControl(),
  })*/
  this.createBookingForm();
}
  createBookingForm(){
    this.bookingForm=this.fb.group({
      date:[],
      time:[]
     
    })
  }
  
get date(){
  return this.bookingForm.get('date') as FormControl;
}
get time(){
  return this.bookingForm.get('time') as FormControl;
}
 
  onSubmit(){ 
  }
  add(){
    this.hall=Object.assign({},this.roomName,this.bookingForm.value);

    let halls:String;

    console.log(this.hall);
    halls=localStorage.getItem('Halls');
  
   for(let i=0; i<localStorage.length; i++ ){


  if(halls==this.hall){
    
    alertify
    .alert("Selected slot is already booked", function(){
      alertify.message('OK');
    });
    this.bookingForm.reset();
  }
  
  
   
   else{
    
   
    alertify
  .alert("Congratulations, Your booking has been confirmed", function(){
    alertify.message('OK');
  });
  
  
 
  this.addHall(this.hall);
 
   
this.bookingForm.reset();

} 
}}

  addHall(hall){
    let halls=[];
    console.log(1,hall)
    if(localStorage.getItem('Halls')){
      halls=JSON.parse(localStorage.getItem('Halls'));
      
      
      halls=[hall,...halls];
    }	
    else{
      halls=[hall];
    }
    localStorage.setItem('Halls',JSON.stringify(halls));

}


    
  







}
