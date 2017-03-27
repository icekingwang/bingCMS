import { Injectable } from '@angular/core';
import {User} from "../model/user-model";
import {Http} from "@angular/http";

@Injectable()
export class UserLoginService {

  public userLoginUrl = "http://localhost:3003/users";

  constructor(public http:Http) {

  }

  public login(user:User){
      console.log(this.http)
      console.log(this)
    this.http.get(this.userLoginUrl).subscribe(data=>console.log(data));
  }

}
