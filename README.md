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

###### Square Brackets is the property binding notation eg: [disabled]="!allowNewServers"

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

##### 6, All available type of bindings & interpolation [branch:6_project](//github.com/biroa/Angular-9-Playground/tree/6_project)

  _All type of Angular bindings & interpolation is available in this section!_
  
  > For the Two-Way data binding we need to import the FormsModule in the app.module.ts file =>
  > import {FormsModule} from "@angular/forms"; 
  
  * Event Binding 
    * _notation_ => (click)
  * Listening to Events
  * Click event
    * _notation_ => (click)
  * String Interpolation
    * _notation_ => {{interpolateME}}
  * Output
  * Property Binding
    * notation => [disabled] = 'true' 
  * Two-Way data binding
    * _notation_ => [(ngModel)] = "variable"



```typescript
export class ServersComponent implements OnInit {
  allowNewServers = false;
  serverCreationStatus = 'No Server was Created!';
  serverName = '';

  constructor() {
    setTimeout(() => {
      this.allowNewServers = true;
    }, 2000);
  }

  onCreateServer = function(){
    this.serverCreationStatus = 'Server was Created! Name is' + this.serverName;
  };

  // tslint:disable-next-line:typedef
  onUpdateServerName(event: Event){
    this.serverName = (event.target as HTMLInputElement).value;
  }

  ngOnInit(): void {
  }

}
```


```angular2html
<label>Server Name</label>
 <input
   type="text"
   class="form-control"
  (input)="onUpdateServerName($event)">
<p>{{serverName}}</p>

<input
  type="text"
  class="form-control"
  [(ngModel)]="serverName">

<!-- Square Brackets is the property binding notation -->
<!-- You can bind directives, own components, HTML attributes -->
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
