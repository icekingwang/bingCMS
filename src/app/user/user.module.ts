import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,FormsModule
  ],
  declarations: [UserLoginComponent, UserRegisterComponent]
})
export class UserModule { }
