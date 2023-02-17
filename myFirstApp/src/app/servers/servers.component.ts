import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent {
  allowNewServer: boolean = false;
  serversCreationStatus: string = 'No Server Was Created';
  serverName: string = 'Test Server';
  serverCreated: boolean = false;
servers=['TestServer1','TestServer2','TestServer3']

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onCreateServer() {
this.serverCreated=true;
this.servers.push(this.serverName)
    this.serversCreationStatus =
      'Servers Was Created Name is ' + this.serverName;
  }
  onUpdateServerName(event: Event) {
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
