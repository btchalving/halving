import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'btc-profile-image',
  templateUrl: './profile-image.component.html',
  styleUrls: ['./profile-image.component.scss'],
})
export class ProfileImageComponent implements OnInit {
  @Input() fromGift: boolean = false;
  profile = {
    imageUrl: !this.fromGift
      ? '../../../../assets/images/profile.webp'
      : '../../../../assets/images/gift.png',
    imageAlt: '',
  };

  constructor() {}

  ngOnInit(): void {
    this.profile = {
      imageUrl: !this.fromGift
        ? '../../../../assets/images/profile.webp'
        : '../../../../assets/images/gift.png',
      imageAlt: !this.fromGift ? 'BTC Halving icon' : 'Gift icon',
    };
  }
}
