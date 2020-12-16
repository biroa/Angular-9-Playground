import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numbers = [];

  isOdd( num ): boolean {
    return num % 2 === 0;
  }

  counterStart(event): void{
    this.numbers.push(event.newItem);
  }
  counterStop(event): void{
    clearInterval(event.interval);
  }

}
