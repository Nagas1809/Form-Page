import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {
  public userName ="";
  public phNo ="";
  public emailID ="";
  public message ="";
  

  constructor() {
    
   }
  

  ngOnInit(): void {
    
    
  }


}
