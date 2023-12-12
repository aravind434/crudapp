import { Component } from '@angular/core';

@Component({
  selector: 'app-tabledata',
  templateUrl: './tabledata.component.html',
  styleUrls: ['./tabledata.component.css']
})
export class TabledataComponent {

  StudentData:any[] = [
    {
      fname : "aravind",
      lname : "mekala",
      fullname : function(){
        return this.fname + " " +this.lname;
      },
      email : "aravind@gmail.com",
      phoneNo : '1234567890'
    },
    {
      fname : "prashanth",
      lname : "mekala",
      fullname : function(){
        this.fname + " " +this.lname;
      },
      email : "prashanth@gmail.com",
      phoneNo : '087654321'
    },
    {
      fname : "Fazil",
      lname : "syed",
      fullname : function(){
        this.fname + " " +this.lname;
      },
      email : "fazil@gmail.com",
      phoneNo : '5432167890'
    },
    {
      fname : "charan",
      lname : "kodeti",
      fullname : function(){
        this.fname + " " +this.lname;
      },
      email : "charan@gmail.com",
      phoneNo : '6789012345'
    },
  ];
  
}
