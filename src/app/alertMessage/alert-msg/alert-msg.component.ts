import { Component, OnInit, Input, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { AdItem } from 'src/app/ad-banner/ad-item';
import { AlertMsgDirective } from '../alert-msg.directive';
import { AlertMessageInterface } from '../alertMessage.interface';

@Component({
  selector: 'app-alert-msg',
  templateUrl: './alert-msg.component.html',
  styleUrls: ['./alert-msg.component.scss']
})
export class AlertMsgComponent implements OnInit {

  @Input() getMessage: AdItem[]
  interval: any;
  currentAdIndex = -1;
  @ViewChild(AlertMsgDirective) appAlertMsg: AlertMsgDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.getMessageList();
    console.log('this is a message=>', this.getMessage)
  }
  ngOnDestroy() {
    clearInterval(this.interval);
  }
  getMessageList() {
    this.interval = setInterval(() => {
      this.loadComponent();
    }, 3000);
  }
  loadComponent() {
    this.currentAdIndex = (this.currentAdIndex + 1) % this.getMessage.length;
    let adItem = this.getMessage[this.currentAdIndex];

    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component);

    let viewContainerRef = this.appAlertMsg.viewContainerRef;
    viewContainerRef.clear();

    let componentRef = viewContainerRef.createComponent(componentFactory);
    (<AlertMessageInterface>componentRef.instance).data = adItem.data;
  }
}
