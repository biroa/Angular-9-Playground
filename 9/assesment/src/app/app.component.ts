import {Component} from '@angular/core';
import {outputPath} from "@angular-devkit/build-angular/src/test-utils";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assesment';
  secretPassword = "tuna";
  passwordVisibility = 'visible';
  logs = [];

  // tslint:disable-next-line:typedef
  toggle() {
    //  this.passwordVisibility = !this.passwordVisibility;
    this.passwordVisibility =  (this.passwordVisibility === 'visible') ? 'hidden' : 'visible';
    this.logs.push({time: new Date().toLocaleString()});
    console.log(this.logs);
  }
}
