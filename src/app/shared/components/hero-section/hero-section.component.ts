import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Hero } from 'src/app/models/hero.interface';
import { BreakpointService } from '../../../services/breakpoint.service';
import { LanguageSelectorService } from '../../../services/language-selector.service';
interface Resume {
  first: string;
  name: string;
  position: string;
  resume: Item;
  callToAction: string;
  imageUrl: string;
}
interface Item {
  [key: string]: string;
}
@Component({
  selector: 'btc-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss'],
})
export class HeroSectionComponent {
  isMobile$: Observable<boolean> = this.breakpointService.isMobile$;

  heroInfo: Hero = {
    first: { es: 'Descubre el', en: 'Explore the' },
    name: { es: 'Fascinante Mundo del', en: 'Fascinating World of' },
    position: { es: 'Halving de Bitcoin.', en: 'Bitcoin Halving' },
    resume: {
      es: `¡Bienvenido a nuestro portal dedicado al fascinante mundo del Halving de Bitcoin! Sumérgete en la historia que hay detrás de este fenómeno único que redefine la dinámica de la criptomoneda líder. Explora las ganancias extraordinarias generadas en eventos pasados y prepárate con entusiasmo para el próximo Halving en 2024, anticipando las posibles ventajas que podría traer para inversores y entusiastas. Únete a nosotros en este viaje emocionante hacia el futuro de las criptomonedas.`,
      en: `Welcome to our dedicated portal to the fascinating world of Bitcoin Halving! Immerse yourself in the history behind this unique phenomenon that redefines the dynamics of the leading cryptocurrency. Explore the extraordinary gains generated in past events and get ready with excitement for the upcoming Halving in 2024, anticipating the potential advantages it could bring for investors and enthusiasts. Join us on this thrilling journey towards the future of cryptocurrencies.`,
    },
    callToAction: { es: 'Explorar', en: 'Explore' },
    imageUrl: '../../../../assets/images/profile.png',
  };

  language$: Observable<string> = this.languageSelectorService.getLanguage();

  constructor(
    private breakpointService: BreakpointService,
    private languageSelectorService: LanguageSelectorService,
    private router: Router
  ) {}

  navigateByUrl(url: string) {
    this.router.navigateByUrl(url);
  }
}
