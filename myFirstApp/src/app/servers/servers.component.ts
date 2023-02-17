import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent {
  allowNewServer: boolean = false;
  serversCreationStatus: string = 'No Server Was Created';
serverName:string="Test Server";

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

onCreateServer(){
this.serversCreationStatus="Servers Was Created";
}
onUpdateServerName(event:Event){
console.log(event)
this.serverName=(<HTMLInputElement>event.target).value;


}
}
