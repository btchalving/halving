import { Component, OnInit } from '@angular/core';
import { BreakpointService } from '../../../services/breakpoint.service';
import { Observable } from 'rxjs';
import { ScrollLockService } from '../../../services/scroll-lock.service';
import { Header } from '../../../models/header.interface';
import { LanguageSelectorService } from 'src/app/services/language-selector.service';

@Component({
  selector: 'btc-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  showNav: boolean = false;
  isMobile$: Observable<boolean> = this.breakpointService.isMobile$;
  navItems: Header[] = [
    { title: { es: 'Inicio', en: 'Home' }, link: '/' },
    { title: { es: 'Recursos', en: 'Resources' }, link: '/resources' },
    { title: { es: 'Regalo', en: 'Gift' }, link: '/gift' },
  ];
  language$: Observable<string> = this.languageSelectorService.getLanguage();
  constructor(
    private breakpointService: BreakpointService,
    private scrollLockService: ScrollLockService,
    private languageSelectorService: LanguageSelectorService
  ) {}

  ngOnInit(): void {}

  toggleShowNav() {
    this.showNav = !this.showNav;
    if (this.showNav) {
      this.scrollLockService.lock();
    } else {
      this.scrollLockService.unlock();
    }
  }
}
