import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { LanguageSelectorService } from 'src/app/services/language-selector.service';
import SwiperCore, { Autoplay, Navigation, SwiperOptions } from 'swiper';
import { Language } from '../../../models/language.interface';

SwiperCore.use([Navigation, Autoplay]);

@Component({
  selector: 'btc-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent implements OnInit {
  @Input() isMobile: boolean = false;
  @Input() fromHome: boolean = false;

  homeTitle: Language = {
    es: 'Información relacionada',
    en: 'Related information',
  };
  viewSite: Language = { es: 'Ver', en: 'View' };
  projects = [
    {
      title: 'Bitcoin Halving: How It Works and Why It Matters',
      principalImage: '../../../../assets/projects-images/btc1.webp',
      url: 'https://www.forbes.com/advisor/investing/cryptocurrency/bitcoin-halving/',
      target: '_blank',
    },
    {
      title: 'Bitcoin halving 2024: what to know',
      principalImage: '../../../../assets/projects-images/btc13.webp',
      url: 'https://www.ig.com/en/bitcoin-btc/bitcoin-halving',
      target: '_blank',
    },
    {
      title: 'What is a Bitcoin halving?',
      principalImage: '../../../../assets/projects-images/btc3.webp',
      url: 'https://www.coinbase.com/es/learn/crypto-basics/what-is-a-bitcoin-halving',
      target: '_blank',
    },
    {
      title: 'When is the best time to invest in crypto?',
      principalImage: '../../../../assets/projects-images/btc4.webp',
      url: 'https://www.coinbase.com/learn/tips-and-tutorials/dollar-cost-averaging',
      target: '_blank',
    },
    {
      title: 'Bitcoin Price (BTC)',
      principalImage: '../../../../assets/projects-images/btc5.webp',
      url: 'https://www.binance.com/en/price/bitcoin',
      target: '_blank',
    },
    {
      title: 'Bitcoin (BTC) price per day',
      principalImage: '../../../../assets/projects-images/btc6.webp',
      url: 'https://www.statista.com/statistics/326707/bitcoin-price-index/',
      target: '_blank',
    },
    {
      title: 'Max Bitcoin Supply',
      principalImage: '../../../../assets/projects-images/btc7.webp',
      url: 'https://www.coingecko.com/research/publications/bitcoin-etfs-btc-holdings',
      target: '_blank',
    },
    {
      title: 'Bitcoin trading',
      principalImage: '../../../../assets/projects-images/btc8.webp',
      url: 'https://www.ig.com/en/bitcoin-btc',
      target: '_blank',
    },
    {
      title: 'Elon Musk won’t be the richest person if Bitcoin goes above $1M',
      principalImage: '../../../../assets/projects-images/btc9.webp',
      url: 'https://es.cointelegraph.com/news/elon-musk-won-t-be-the-richest-person-if-bitcoin-goes-above-1m',
      target: '_blank',
    },
    {
      title:
        'https://cointelegraph.com/news/bitcoin-bull-market-metrics-almost-reset-btc-price-hovers-at-43-k',
      principalImage: '../../../../assets/projects-images/btc10.webp',
      url: 'Bitcoin bull market metrics ‘almost reset’ as BTC price hovers at $43K',
      target: '_blank',
    },
    {
      title:
        'The right to a self-hosted wallet? Crypto laws Congress should pass in 2024',
      principalImage: '../../../../assets/projects-images/btc11.webp',
      url: 'https://cointelegraph.com/news/self-hosted-wallet-crypto-laws-congress-should-pass-2024',
      target: '_blank',
    },
    {
      title: 'Bitcoin (BTC) Price Prediction 2023-2040',
      principalImage: '../../../../assets/projects-images/btc12.webp',
      url: 'https://changelly.com/blog/bitcoin-price-prediction/#:~:text=Having%20analyzed%20Bitcoin%20prices%2C%20cryptocurrency,Bitcoin%20is%20nearly%20%24%2434%2C979.09.',
      target: '_blank',
    },
  ];
  swiperConfig: SwiperOptions = {};

  language$: Observable<string> = this.languageSelectorService.getLanguage();

  constructor(private languageSelectorService: LanguageSelectorService) {}

  ngOnInit(): void {
    this.swiperConfig = {
      slidesPerView: this.fromHome ? 5 : 4,
      spaceBetween: 10,
      pagination: true,
      navigation: true,
      breakpoints: {
        0: {
          slidesPerView: 1,
          slidesPerGroup: 1,
        },
        356: {
          slidesPerView: 2,
          slidesPerGroup: 2,
        },
        526: {
          slidesPerView: 3,
          slidesPerGroup: 3,
        },
        696: {
          slidesPerView: this.fromHome ? 3 : 2,
          slidesPerGroup: this.fromHome ? 3 : 2,
        },
        768: {
          slidesPerView: this.fromHome ? 4 : 3,
          slidesPerGroup: this.fromHome ? 4 : 3,
        },
        1180: {
          slidesPerView: this.fromHome ? 5 : 4,
          slidesPerGroup: this.fromHome ? 5 : 4,
        },
        1600: {
          slidesPerView: this.fromHome ? 6 : 5,
          slidesPerGroup: this.fromHome ? 6 : 5,
        },
      },
    };
  }
}
