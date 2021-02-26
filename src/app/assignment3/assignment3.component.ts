import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styleUrls: ['./assignment3.component.css']
})
export class Assignment3Component implements OnInit {

  displayBoolean = 'none';
  clickLog = [];

  constructor() { }

  ngOnInit(): void {
  }

  onShowDetails(){
    this.displayBoolean === 'block' ? this.displayBoolean = 'none' : this.displayBoolean = 'block'; 
    //this.clickLog.push(this.clickLog.length + 1);    
    this.clickLog.push(new Date());    

  }
  

}
