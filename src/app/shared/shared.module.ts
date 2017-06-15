import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
// import { SidebarDirective } from './sidebar.directive';
// import { AsideDirective } from './aside.directive';
// import { NavDropdownDirective } from './nav-dropdown.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CommonModule,
    FormsModule
  ]
})
export class SharedModule { }
