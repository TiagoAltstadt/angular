import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment2',
  templateUrl: './assignment2.component.html',
  styleUrls: ['./assignment2.component.css']
})
export class Assignment2Component{

  allowUsername = false;
  username = '';

  constructor() { }

  ngOnInit(): void {
  }

  //-----New User-----
  onUpdateUsername(event: any){
    this.username = (<HTMLInputElement>event.target).value;
  }
  onResetUsername(){
    this.username = '';
  } 
}
