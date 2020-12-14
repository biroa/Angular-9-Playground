import {
  Component,
  Input,
  OnChanges,
  OnInit,
  ViewEncapsulation,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewChecked,
  AfterViewInit,
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None
})
// @ts-ignore
export class ServerElementComponent
  implements OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewChecked,
    AfterViewInit,
    OnDestroy{
  // TypeScript typehint
  // Binding to Custom Properties
  // @Input() element: { type: string, name: string, content: string };

  // Binding data to custom properties with Alias
  // @ts-ignore
  // tslint:disable-next-line:no-input-rename
  @Input('servElement') element: { type: string, name: string, content: string };
  @Input() name: string;
  @ViewChild('heading', {static: true}) header: ElementRef;
  @ContentChild('contentParagraph', {static: true}) paragraph: ElementRef;

  constructor() {
    console.log('the constructor is called');
  }

  ngOnInit(): void {
    console.log('ngInit is called');
    console.log('textContent', this.header.nativeElement.textContent);
    console.log('Text Content Of Paragraph', this.paragraph.nativeElement.textContent);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngChange is called');
    console.log(changes);
  }
  ngDoCheck(): void {
    console.log('NgDoCheck call');
  }

  ngAfterContentInit(): void {
    console.log('AfterContentInit called');
    console.log('Text Content Of Paragraph', this.paragraph.nativeElement.textContent);
  }

  ngAfterContentChecked(): void {
    console.log('AfterContentChecked is called');
  }

  // tslint:disable-next-line:typedef
  ngAfterViewChecked() {
    console.log('AfterViewChecked is called');
  }

  // tslint:disable-next-line:typedef
  ngAfterViewInit() {
    console.log('AfterViewInit is called');
    console.log('textContent',this.header.nativeElement.textContent);
  }

  ngOnDestroy(): void {
    console.log('We destroyed the code');
  }

}
