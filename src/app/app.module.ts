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
import { FullLayoutComponent } from './full-layout/full-layout.component';
import {NAV_DROPDOWN_DIRECTIVES} from "./shared/nav-dropdown.directive";
import {BreadcrumbsComponent} from "./shared/breadcrumb.component";
import {SIDEBAR_TOGGLE_DIRECTIVES, SidebarDirective} from "./shared/sidebar.directive";
import {AsideToggleDirective, AsideDirective} from "./shared/aside.directive";
import { TabsModule } from 'ngx-bootstrap/tabs';
import { TinymceComponent } from './tinymce/tinymce.component';

@NgModule({
  imports: [
    BrowserModule,
    SharedModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    TabsModule.forRoot()
  ],
  declarations: [
    AppComponent,
    UserLoginComponent,
    UserRegisterComponent,
    FullLayoutComponent,
    NAV_DROPDOWN_DIRECTIVES,
    BreadcrumbsComponent,
    SIDEBAR_TOGGLE_DIRECTIVES,
    AsideToggleDirective,
    TinymceComponent,
    SidebarDirective,
    AsideDirective
  ],
  providers: [UserLoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
