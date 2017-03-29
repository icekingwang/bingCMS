import {NgModule} from '@angular/core';
import {UserLoginComponent} from './user-login/user-login.component';
import {UserRegisterComponent} from './user-register/user-register.component';
import {FormsModule} from "@angular/forms";
import {SharedModule} from "../shared/shared.module";
import { UserInfoComponent } from './user-info/user-info.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    UserLoginComponent,
    UserRegisterComponent,
    UserInfoComponent
  ]
})
export class UserModule {
}
