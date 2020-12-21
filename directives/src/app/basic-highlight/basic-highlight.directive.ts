import {Directive, ElementRef, OnInit} from "@angular/core";

@Directive({
  selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit {
  constructor(private elementRef: ElementRef) {
  }
  ngOnInit() {
    // This is not an ideal approach to directly access Dom Element This Way
    this.elementRef.nativeElement.style.backgroundColor = 'red';
    this.elementRef.nativeElement.style.color = 'white';
    this.elementRef.nativeElement.style.fontWeight = 'bold';
  }
}
