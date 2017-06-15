import {Directive, HostListener} from '@angular/core';

@Directive({
  selector: '[appSidebar]'
})
export class SidebarDirective {

  constructor() { }

}

@Directive({
  selector: '[appSidebarToggler]'
})
export class SidebarToggleDirective {
  constructor() { }

  @HostListener('click', ['$event'])
  toggleOpen($event: any) {
    $event.preventDefault();
    document.querySelector('body').classList.toggle('sidebar-hidden');
  }
}



@Directive({
  selector: '[appMobileSidebarToggler]'
})
export class MobileSidebarToggleDirective {
  constructor() { }

  // Check if element has class
  private hasClass(target: any, elementClassName: string) {
    return new RegExp('(\\s|^)' + elementClassName + '(\\s|$)').test(target.className);
  }

  @HostListener('click', ['$event'])
  toggleOpen($event: any) {
    $event.preventDefault();
    document.querySelector('body').classList.toggle('sidebar-mobile-show');
  }
}

export const SIDEBAR_TOGGLE_DIRECTIVES = [
  SidebarToggleDirective,
  MobileSidebarToggleDirective
];
