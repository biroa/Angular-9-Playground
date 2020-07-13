# My Angular 9 Playground

13.07.2020

## Installation

Use the package manager [pip](https://pip.pypa.io/en/stable/) to install foobar.

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