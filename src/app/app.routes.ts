// 1.import RouterModule
import {RouterModule} from "@angular/router";
import {UserLoginComponent} from "./user/user-login/user-login.component"
import {UserRegisterComponent} from "./user/user-register/user-register.component"


export const appRoutes = [
  {
    path:'',
    redirectTo:'posts',
    pathMatch:'full'
  },
  {
    path:"login",
    component:UserLoginComponent
  },
  {
    path:"register",
    component:UserRegisterComponent
  }
];
