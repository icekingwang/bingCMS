import {Directive, HostListener} from '@angular/core';

@Directive({
  selector: '[appAside]'
})
export class AsideDirective {

  constructor() { }

}

/**
 * Allows the aside to be toggled via click.
 */
@Directive({
  selector: '[appAsideMenuToggler]',
})
export class AsideToggleDirective {
  constructor() { }

  @HostListener('click', ['$event'])
  toggleOpen($event: any) {
    $event.preventDefault();
    document.querySelector('body').classList.toggle('aside-menu-hidden');
  }
}
