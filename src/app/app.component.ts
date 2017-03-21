import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  active = 'wenzhang';
  routerLinkActive = 'wenzhang';

  checkTab(t){
    return t===this.active;
  }

  clickTabFun(t){
    this.active=t;
  }
}
