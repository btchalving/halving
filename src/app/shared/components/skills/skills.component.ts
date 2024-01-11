import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'btc-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  @Input() fromHome: boolean = false;
  skills = [
    {
      icon: '../../../assets/icons/binance.svg',
      alt: 'Binance Icon',
    },
    {
      icon: '../../../assets/icons/nexo.svg',
      alt: 'Nexo Icon',
    },
    {
      icon: '../../../assets/icons/bitcoin.png',
      alt: 'Bitcoin Icon',
    },
    {
      icon: '../../../assets/icons/coinbase.svg',
      alt: 'Coinbase Icon',
    },
    {
      icon: '../../../assets/icons/trust-wallet.svg',
      alt: 'Trust wallet Icon',
    },
    {
      icon: '../../../assets/icons/ripio.svg',
      alt: 'Ripio Icon',
    },
    {
      icon: '../../../assets/icons/metamask.png',
      alt: 'Metamask Icon',
    },
    {
      icon: '../../../assets/icons/lemon.svg',
      alt: 'Lemon Icon',
    },
    {
      icon: '../../../assets/icons/cointracker.svg',
      alt: 'Cointracker Icon',
    },
    {
      icon: '../../../assets/icons/bit2me.svg',
      alt: 'Bit2Me Icon',
    },
    {
      icon: '../../../assets/icons/blink.svg',
      alt: 'Blink Icon',
    },
    {
      icon: '../../../assets/icons/iebs.png',
      alt: 'IEBS Icon',
    },
    {
      icon: '../../../assets/icons/freewallet.svg',
      alt: 'Freewallet Icon',
    },
    {
      icon: '../../../assets/icons/btc-direct.svg',
      alt: 'Btc-direct Icon',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
