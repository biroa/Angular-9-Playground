import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None
})
// @ts-ignore
export class ServerElementComponent implements OnInit {
  // TypeScript typehint
  // Binding to Custom Properties
  // @Input() element: { type: string, name: string, content: string };

  // Binding data to custom properties with Alias
  // @ts-ignore
  @Input('servElement') element: { type: string, name: string, content: string };

  constructor() {
  }

  ngOnInit(): void {
  }

}
