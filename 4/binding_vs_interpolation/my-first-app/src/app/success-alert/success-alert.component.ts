// We need to import to component to make the component understandable
import {Component, OnInit} from '@angular/core';

// Add decorator to enhance our code
@Component({
  selector: '.app-success-alert', // it should be a unique
  templateUrl: './success-alert.component.html',
  styleUrls: ['./success-alert.component.css']
})
export class SuccessAlertComponent implements OnInit{
  constructor() {
  }

  ngOnInit(): void {
  }

}
