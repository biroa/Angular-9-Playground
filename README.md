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

##### 2, String Interpolation
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
