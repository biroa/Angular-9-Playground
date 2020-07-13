// We need to import to component to make the component understandable
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  templateUrl: './warning-alert.component.html',
  styleUrls: ['./warning-alert.component.css']
})

export class WarningAlertComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
