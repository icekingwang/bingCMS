import { Component } from '@angular/core';
import {UserLoginService} from "./user/user-login/user-login.service";
import {User} from "./user/model/user-model";
import {RouterState, RouterStateSnapshot, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  count = 0;
  	public currentUser : User;


  constructor(public userLoginService:UserLoginService,
              public router: Router,
  ){
  }
  ngOnInit(){
    this.currentUser = JSON.parse(localStorage.getItem("currentUser"));


    console.log(this.userLoginService.currentUser);
    this.userLoginService.currentUser.subscribe(
      next=>{
        this.currentUser = next;
        this.count++;
        console.log("运行第"+ this.count + "次+++++++++++++++++++++++/n");

        let routerState: RouterState = this.router.routerState;
        let routerStateSnapshot: RouterStateSnapshot = routerState.snapshot;
        if(routerStateSnapshot.url.indexOf("/login")!=-1){
          this.router.navigateByUrl("/home");
        }
      },
      error=>{}

    )
  }
}
