import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css']
})
export class EvenComponent implements OnInit {

  constructor() { }
  @Input('num') number;
  @Input('iterator') i;
  ngOnInit(): void {
  }

}
