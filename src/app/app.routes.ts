// 1.import RouterModule
import {RouterModule, Router, Routes} from "@angular/router";
import {UserLoginComponent} from "./user/user-login/user-login.component";
import {UserRegisterComponent} from "./user/user-register/user-register.component";
// import {UserRegisterComponent} from "./user/user-register/user-register.component"

export const appRoutes:Routes = [
  {
    path:'',
    redirectTo:'posts',
    pathMatch:'full'
  },
  {
    path:'home',
    loadChildren:'./home/home.module#HomeModule'
  },
  {
    path:'posts',
    loadChildren:'./home/home.module#HomeModule'
  },
  {
    path:"login",
    component:UserLoginComponent
  },
  {
    path:"register",
    loadChildren:'./home/home.module#HomeModule'
  }
];
