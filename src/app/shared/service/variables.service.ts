import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })

export class VariablesService {

  private navBar = new BehaviorSubject<string>('');
  setNavBar$ = this.navBar.asObservable();

  constructor() {}

  changeNavBar(nav: string) {
    this.navBar.next(nav);
  }
}
