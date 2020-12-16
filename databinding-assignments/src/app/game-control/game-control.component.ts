import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  counter = 0;
  interval = undefined;
  startDisabled = false;
  stopDisabled = true;
  @Output() newStartEvent = new EventEmitter<{ newItem: number, interval: any}>();
  @Output() newStopEvent = new EventEmitter<{ newItem: number, interval: any}>();
  constructor() {
  }

  ngOnInit(): void {
  }

  countStart(): void {
    this.interval = setInterval(() => {
      ++this.counter;
      const data = {newItem: this.counter, interval: this.interval};
      this.newStartEvent.emit(data);
    }, 1000);
    this.startDisabled = !this.startDisabled;
    this.stopDisabled = !this.stopDisabled;
  }

  countStop(): void {
    console.log('The event is stopped');
    const data = {newItem: this.counter, interval: this.interval};
    this.newStopEvent.emit(data);
    this.startDisabled = !this.startDisabled;
    this.stopDisabled = !this.stopDisabled;
  }

}
