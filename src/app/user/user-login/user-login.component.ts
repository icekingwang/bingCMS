import { Component, OnInit } from '@angular/core';
import {User} from '../model/user-model';
import {UserLoginService} from './user-login.service';


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  title="登陆";
  public user:User = new User();
  public error:Error;

  constructor(public userLoginService:UserLoginService) {
    ()=>console.log(this.user);
  }

  ngOnInit() {

  }

  doLogin(){
    console.log(this);
    console.log(this.user);
    console.log("doLogin");
    this.userLoginService.login(this.user);
    return false;
  }

}
