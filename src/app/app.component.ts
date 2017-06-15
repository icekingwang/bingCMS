import { Component } from '@angular/core';
import {UserLoginService} from "./user/user-login/user-login.service";
import {User} from "./user/model/user-model";
import {RouterState, RouterStateSnapshot, Router} from "@angular/router";

@Component({
  selector: 'body',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent {
  	public currentUser : User;


  constructor(public userLoginService:UserLoginService,
              public router: Router,
  ){
  }
  ngOnInit(){
    this.currentUser = JSON.parse(localStorage.getItem("currentUser"));

    this.userLoginService.currentUser.subscribe(
      next=>{
        this.currentUser = next;

        let routerState: RouterState = this.router.routerState;
        let routerStateSnapshot: RouterStateSnapshot = routerState.snapshot;
        if(routerStateSnapshot.url.indexOf("/login")!=-1){
          this.router.navigateByUrl("/");
        }
      },
      error=>{}

    )
  }
}
