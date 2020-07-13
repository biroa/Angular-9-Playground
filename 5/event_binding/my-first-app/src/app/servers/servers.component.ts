import { Component, OnInit } from '@angular/core';

@Component({
  // Selector name should unique
  //selector: 'app-servers', // This is selector by tag
  // selector: '[app-servers]', // This is selector by tag
  // tslint:disable-next-line:component-selector
  selector: '.app-servers',
  /* Template or TemplateUrl must be present
  Option 1:
  template: '<app-server></app-server><app-server></app-server>',
  Option 2:
  template:`
    <app-server></app-server>
    <app-server></app-server>
  `,
  Option 3:
  */
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServers = false;
  serverCreationStatus = 'No Server was Created!';

  constructor() {
    setTimeout(() => {
      this.allowNewServers = true;
    }, 2000);
  }

  onCreateServer = function(){
    this.serverCreationStatus = 'Server was Created!';
  };

  ngOnInit(): void {
  }

}
