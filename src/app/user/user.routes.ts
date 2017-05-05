import {UserInfoComponent} from "./user-info/user-info.component";
export const userRoutes = [
  {
    path:"",
    component:UserInfoComponent,
    children: [
      { path: '', redirectTo:'login',pathMatch:'full'}]}
      // { path: 'write', component: WritePostComponent },
      // { path: 'posttable/page/:page', component: PostTableComponent },
      // { path: 'commenttable/page/:page', component: CommentTableComponent },
      // { path: 'profile', component: UserProfileComponent },
      // { path:'**', redirectTo:'write' }

]
