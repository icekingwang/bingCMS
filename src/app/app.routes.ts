// 1.import RouterModule
import {RouterModule, Router, Routes} from "@angular/router";
import {UserLoginComponent} from "./user/user-login/user-login.component";
import {UserRegisterComponent} from "./user/user-register/user-register.component";
import {FullLayoutComponent} from "./full-layout/full-layout.component";
import {TinymceComponent} from "./tinymce/tinymce.component";
// import {UserRegisterComponent} from "./user/user-register/user-register.component"

export const appRoutes:Routes = [
  {
    path:'',
    redirectTo:'dashboard',
    pathMatch:'full'
  },
  {
    path: '',
    component: FullLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: './home/home.module#HomeModule'
      },
      {
        path: 'components',
        loadChildren: './home/home.module#HomeModule'
      },
      {
        path: 'icons',
        loadChildren: './home/home.module#HomeModule'
      },
      {
        path: 'tinymce',
        component: TinymceComponent
      },
      {
        path: 'charts',
        loadChildren: './chart/chart.module#ChartModule'
      }
    ]
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
