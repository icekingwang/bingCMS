import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import {UserLoginService} from "./user/user-login/user-login.service";
import {UserLoginComponent} from "./user/user-login/user-login.component";
// import {UserRegisterComponent} from "./user/user-register/user-register.component";
import {SharedModule} from "./shared/shared.module";
import {appRoutes} from "./app.routes";
import {UserRegisterComponent} from "./user/user-register/user-register.component";

@NgModule({
  imports: [
    BrowserModule,
    SharedModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
  ],
  declarations: [
    AppComponent,
    UserLoginComponent,
    UserRegisterComponent
  ],
  providers: [UserLoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
