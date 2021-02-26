import { Component } from '@angular/core';
import { setClassMetadata } from '@angular/core/src/r3_symbols';
@Component({
  selector: 'app-create-server',
  templateUrl: './create-server.component.html',
  styleUrls: ['./create-server.component.css']
})
export class CreateServerComponent{

  enableServerName = false;
  allowNewServer = false;

  servers = ['TestServer'];
  serverCreationStatus = 'No server was created';
  serverName =  '';
  serverStatus1 = 'loading...';
  serverStatus2 = 'loading...';

  constructor() {
    this.serverStatus1 = Math.random() > 0.5 ? 'online' : 'offline';
    this.serverStatus2 = Math.random() > 0.5 ? 'online' : 'offline';
    setTimeout(() => {
      this.allowNewServer = true;
      
    }, 2000)
   }

  ngOnInit(): void {}

//------New Server-----

onCreateServer(){
  this.enableServerName = true;
  this.servers.push(this.serverName);
  this.serverCreationStatus = 'Server successfully created, name is ' + this.serverName;
}
onUpdateServerName(event: any){
  this.serverName = (<HTMLInputElement>event.target).value;
}

getColor1(){
  return this.serverStatus1 === 'online' ? 'rgba(172, 255, 47, 0.63)' : 'mistyrose'; 
}
getColor2(){
  return this.serverStatus2  === 'online' ? 'rgba(172, 255, 47, 0.63)' : 'mistyrose'; 
}
}
