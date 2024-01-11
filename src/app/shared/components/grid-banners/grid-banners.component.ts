import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Language } from 'src/app/models/language.interface';
import { BreakpointService } from 'src/app/services/breakpoint.service';
import { LanguageSelectorService } from 'src/app/services/language-selector.service';
import { Grid } from '../../../models/grid.interface';

@Component({
  selector: 'btc-grid-banners',
  templateUrl: './grid-banners.component.html',
  styleUrls: ['./grid-banners.component.scss'],
})
export class GridBannersComponent implements OnInit {
  viewPage: Language = {
    es: 'Ir al sitio',
    en: 'Go to site',
  };
  isMobile$: Observable<boolean> = this.breakpointService.isMobile$;
  @Input() fromWorks: boolean = false;
  @Input() gridItems: Grid[] = [];
  language$: Observable<string> = this.languageSelectorService.getLanguage();
  constructor(
    private breakpointService: BreakpointService,
    private languageSelectorService: LanguageSelectorService
  ) {}

  ngOnInit(): void {}
}
