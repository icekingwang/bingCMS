import {Injectable} from '@angular/core';
import {User} from "../model/user-model";
import {Http, Response} from "@angular/http";
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class UserLoginService {

  public userLoginUrl = "http://localhost:3003/users";
  public subject: Subject<User> = new Subject<User>();

  constructor(public http: Http) {}

  public get currentUser():Subject<User>{
    return this.subject;
  }

  public login(user: User) {
    console.log(user);
    let userLoginPUrl = this.userLoginUrl + "?userName=" + user.userName + "#password=" + user.password;
    this.http
      .get(userLoginPUrl).map(
      (response: Response) => {
        console.log(response);
        let user = response.json();
        console.log(user);
        console.log(this.subject);
        if(user){
          localStorage.setItem("currentUser",JSON.stringify(user));
          this.subject.next(Object.assign({},user));
        }

        return response;
      })
      .subscribe(data=>console.log(data),
        error => console.log(error)
      );
  }

}
