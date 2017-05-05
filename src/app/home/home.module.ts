import {NgModule} from '@angular/core';
import {OnlineContactComponent} from './online-contact/online-contact.component';
import {SocialChannelComponent} from './social-channel/social-channel.component';
import {HomeComponent} from "./home.component";
import {SharedModule} from "../shared/shared.module";
import {RouterModule} from "@angular/router";
import {homeRoutes} from "./home.routes";

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(homeRoutes),
  ],
  declarations: [
    HomeComponent,
    OnlineContactComponent,
    SocialChannelComponent
  ]
})
export class HomeModule {
}
