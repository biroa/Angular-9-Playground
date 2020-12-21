import {
  Directive,
  OnInit,
  ElementRef,
  Renderer2,
  HostListener,
  HostBinding
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2 // https://angular.io/api/core/Renderer2
  ) {
  }
  ngOnInit(){
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

  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';
  @HostBinding('style.color') color: string;

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
    this.backgroundColor = 'black';
    this.color = 'white';
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
    this.backgroundColor = 'transparent';
    this.color = 'black';

  }

}
