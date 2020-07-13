import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'interpolation-play';
  serverID = 10;
  serverStatus = 'active';
  // tslint:disable-next-line:typedef
  getServerStatus() {
    return this.serverStatus;
  }

}
