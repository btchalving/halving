import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BreakpointService } from 'src/app/services/breakpoint.service';
import { LanguageSelectorService } from 'src/app/services/language-selector.service';
import { Language } from '../../../models/language.interface';

@Component({
  selector: 'btc-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  name: string = 'BTC Halving';
  date: string = new Date(Date.now()).getFullYear().toString();
  copyright: Language = {
    es: 'Todos los derechos reservados',
    en: 'All rights reserved',
  };
  language$: Observable<string> = this.languageSelectorService.getLanguage();
  isMobile$: Observable<boolean> = this.breakpointService.isMobile$;
  constructor(
    private breakpointService: BreakpointService,
    private languageSelectorService: LanguageSelectorService
  ) {}

  ngOnInit(): void {}
}
