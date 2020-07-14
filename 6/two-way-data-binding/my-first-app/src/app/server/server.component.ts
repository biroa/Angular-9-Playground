// We need to import to component to make the component understandable
import {Component} from '@angular/core';

// Add decorator to enhance our code
@Component({
  selector: 'app-server', // it should be a unique
  templateUrl: './server.component.html'
})
export class ServerComponent {
  serverID = 10;
  serverStatus = 'active';
  // tslint:disable-next-line:typedef
  getServerStatus() {
    return this.serverStatus;
  }
}
