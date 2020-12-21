import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  /*
    With the usage of the set keyword we want to execute the setter method
    of the property. When changes happens we want to execute
    the method
  */

  @Input() set appUnless(condition: boolean) {
    if (!condition) {
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      this.vcRef.clear();
    }
  }

  /**
   *
   * @param templateRef - What we render
   * @param vcRef - Where we render it
   * @param ViewContainerRef
   */
  constructor(
    private templateRef: TemplateRef<any>,
    private vcRef: ViewContainerRef) {

  }

}
