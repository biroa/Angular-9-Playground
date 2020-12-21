import {
  Directive,
  OnInit,
  ElementRef,
  Renderer2,
  HostListener,
  HostBinding,
  Input
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlightWithProperties]'
})
export class BetterHighlightWithPropertiesDirective implements OnInit {
  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2 // https://angular.io/api/core/Renderer2
  ) {
  }

  @Input() defaultColor: string   = 'transparent';
  @Input('appBetterHighlightWithProperties') highlightColor: string = 'blue';
  @HostBinding('style.backgroundColor') backgroundColor: string;
  @HostBinding('style.color') color: string;

  ngOnInit(){
    this.backgroundColor = this.defaultColor;
/*
      this.renderer.setStyle(
      this.elRef.nativeElement,
      'background-color',
      'black'
    );
    this.renderer.setStyle(
      this.elRef.nativeElement,
      'color',
      'white'
    );
*/
  }


  @HostListener('mouseenter') mouseover(eventData: Event) {
/*    this.renderer.setStyle(
      this.elRef.nativeElement,
      'background-color',
      'black'
    );
    this.renderer.setStyle(
      this.elRef.nativeElement,
      'color',
      'white'
    );
*/
    this.backgroundColor = this.highlightColor;
    this.color = 'black';
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    /*
    this.renderer.setStyle(
      this.elRef.nativeElement,
      'background-color',
      'transparent'
    );
    this.renderer.setStyle(
      this.elRef.nativeElement,
      'color',
      'black'
    );
  */
    this.backgroundColor = this.defaultColor;
    this.color = 'white';

  }

}
