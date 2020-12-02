import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
  ElementRef
} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
// @ts-ignore
export class CockpitComponent implements OnInit {
  // Set Listenable with @Output
  // @ts-ignore
  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  // tslint:disable-next-line:no-output-rename
  @Output('bpCreated') blueprintCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
     // If you want use the Two-Way Data binding approach comment it out
     // But we converted the code to a local reference approach
     // newServerName = '';
     // newServerContent = '';
    @ViewChild('serverContentInput', {static: true}) serverContentInput: ElementRef;

  constructor() {
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  onAddServer(serverNameInput: HTMLInputElement) {
    this.serverCreated.emit({
        serverName: serverNameInput.value,
        serverContent: this.serverContentInput.nativeElement.value
      }
    );
  }
  // tslint:disable-next-line:typedef
  onAddBlueprint(serverNameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
        serverName: serverNameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
      }
    );
  }

}
