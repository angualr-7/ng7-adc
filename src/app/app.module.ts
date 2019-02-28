import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdDirective } from './ad-banner/ad.directive';
import { AdBannerComponent } from './ad-banner/ad-banner.component';
import { HeroJobAdComponent } from './ad-banner/hero-job-ad/hero-job-ad.component';
import { HeroProfileComponent } from './ad-banner/hero-profile/hero-profile.component';
import { AlertMsgDirective } from './alertMessage/alert-msg.directive';
import { AlertMsgComponent } from './alertMessage/alert-msg/alert-msg.component';
 
@NgModule({
  declarations: [
    AppComponent,
    AdDirective,
    AdBannerComponent,
    HeroJobAdComponent,
    HeroProfileComponent,
    AlertMsgDirective,
    AlertMsgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  entryComponents: [HeroJobAdComponent, HeroProfileComponent],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
