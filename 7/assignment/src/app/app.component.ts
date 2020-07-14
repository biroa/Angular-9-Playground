import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment';
  myInput = 'I am not a placeholder';

  // tslint:disable-next-line:typedef
  onInputReset(){
    this.myInput = '';
  }
}
