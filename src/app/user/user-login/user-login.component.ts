import { Component, OnInit } from '@angular/core';
import {User} from '../model/user-model';


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  title="登陆";
  public user:User = new User();
  public error:Error;

  constructor() {

  }

  ngOnInit() {

  }

  doLogin(){
    console.log("doLogin");
    return false;
  }

}
