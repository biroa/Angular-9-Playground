# My Angular 9 Playground

13.07.2020

## Installation

The installation guide to install AngularCLI & serve the project  

```bash
sudo npm install -g @angular/cli@latest // Install Angular Globally
ng serve // Serve the Application
```

## Notes
##### 1, Create Angular Components

##### 2, String Interpolation [branch:2_project](//github.com/biroa/Angular-9-Playground/tree/2_project)

* The String Interpolation rule is that the output has to be convertible to String
```typescript
  serverID = 10;
  serverStatus = 'active';
  getServerStatus() {
    return this.serverStatus;
```
```angular2html
  <!-- String Interpolation -->
  <p>{{'Server'}} with ID {{ serverID }} is {{getServerStatus()}} </p>
```

##### 3, Property Bindings [branch:3_project](//github.com/biroa/Angular-9-Playground/tree/3_project)

```typescript
export class ServersComponent implements OnInit {
  allowNewServers = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServers = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

}
```

```angular2html
<!-- Square Brackets is the property binding notation -->
<!-- You can bind directives, own components, HTML attributes -->
<button
  class="btn btn-primary"
  [disabled]="!allowNewServers">Add Servers</button>
```

##### 4, Property Binding vs. String Interpolation [branch:4_project](//github.com/biroa/Angular-9-Playground/tree/4_project)

```angular2html
<button
  class="btn btn-primary"
  [disabled]="!allowNewServers">Add Servers</button>
  <h4>String interpolation</h4>
  <p style="color: red">{{allowNewServers}}</p>
  <h4>Property Binding</h4>
  <p [innerHTML]="allowNewServers" style="color: darkred"></p>
```

##### 5, Event Binding [branch:5_project](//github.com/biroa/Angular-9-Playground/tree/5_project)

```typescript
serverCreationStatus = 'No Server was Created!';
onCreateServer = function(){
    this.serverCreationStatus = 'Server was Created!';
};
```

  _We can use event binding in the following way: (event)='method_call() or set a variable'_

```angular2html
<button
  class="btn btn-primary"
  [disabled]="!allowNewServers"
  (click)="onCreateServer()">Add Servers</button>
  <h4>String interpolation</h4>
  <p style="color: red">{{allowNewServers}}</p>
  <h4>Property Binding</h4>
  <p [innerHTML]="allowNewServers" style="color: darkred"></p>
  <p>{{serverCreationStatus}}</p>
```