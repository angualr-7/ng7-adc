import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appAlertMsg]'
})
export class AlertMsgDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
