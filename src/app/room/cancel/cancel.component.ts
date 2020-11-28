import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as alertify from 'alertifyjs';

@Component({
  selector: 'app-cancel',
  templateUrl: './cancel.component.html',
  styleUrls: ['./cancel.component.css']
})
export class CancelComponent implements OnInit {
  public roomNam: string;

 

  headers=["Date","Time"]
  rows=[
    {
      
      "Date" : "05-12-2020",
      "Time" : "12.00 PM"
    },
    {
      
      "Date" : "24-11-2020",
      "Time" : "04.00 PM"
    },

    {
     
      "Date" : "30-11-2020",
      "Time" : "10.00 AM"
    }

  ]
  onCancel(){
    console.log("button was clicked");
  }
  cancel()
  {
   
    alertify
    .alert("Your cancellation has been completed", function(){
      alertify.message('OK');
    });
  }
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.roomNam=this.route.snapshot.params['Name'];
    
  }


}
