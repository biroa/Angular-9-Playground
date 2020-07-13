import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  /**
   * Options1:
   * styles: [`
   * h3{
   *   color:dodgerblue;
   * }
   * `]
   * * Options2:
   */
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-app';
}
