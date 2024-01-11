import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable, Subscription, interval } from 'rxjs';
import { LanguageSelectorService } from 'src/app/services/language-selector.service';
import { Language } from '../../models/language.interface';
import { BreakpointService } from '../../services/breakpoint.service';
import { PromotionService } from '../../services/promotion.service';

@Component({
  selector: 'btc-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CurriculumComponent implements OnInit {
  position: Language = {
    es: '¡Aprovecha ahora y duplica tus BTC!',
    en: 'Take advantage now and double your BTC!',
  };
  buttonText: Language = {
    es: '¡Reclamar Regalo!',
    en: 'Claim Gift!',
  };
  language$: Observable<string> = this.languageSelectorService.getLanguage();
  isMobile$: Observable<boolean> = this.breakpointService.isMobile$;
  private readonly COUNTDOWN_DURATION = 12 * 60 * 60;
  private readonly LOCAL_STORAGE_KEY = 'countdownValue';
  private countdownSubscription: Subscription = new Subscription();
  formattedTime: string | null = null;
  isButtonDisabled: boolean = false;
  promotionAvailable$: Observable<boolean> =
    this.promotionService.getPromotion();
  videoUrl: string = '../../../assets/video/btc-video.mp4';

  constructor(
    private languageSelectorService: LanguageSelectorService,
    private breakpointService: BreakpointService,
    private promotionService: PromotionService
  ) {}

  ngOnInit(): void {
    this.startCountdown();
  }

  claimGift(): void {
    this.promotionService.setPromotionFormView(true);
    window.scrollTo({
      top: window.scrollY + 500,
      behavior: 'smooth',
    });
  }

  ngOnDestroy(): void {
    if (this.countdownSubscription) {
      this.countdownSubscription.unsubscribe();
    }
  }

  private startCountdown(): void {
    const storedValue =
      +localStorage.getItem(this.LOCAL_STORAGE_KEY)! || this.COUNTDOWN_DURATION;

    this.countdownSubscription = interval(1000).subscribe((elapsedTime) => {
      const remainingTime = storedValue - elapsedTime;
      this.formattedTime = this.formatTime(remainingTime);

      this.isButtonDisabled = remainingTime <= 0;

      this.promotionService.setPromotion(remainingTime <= 0 ? false : true);
      localStorage.setItem(this.LOCAL_STORAGE_KEY, String(remainingTime));

      if (remainingTime <= 0) {
        this.countdownSubscription.unsubscribe();
      }
    });
  }

  private formatTime(seconds: number): string {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    return `${this.formatNumber(hours)}:${this.formatNumber(
      minutes
    )}:${this.formatNumber(remainingSeconds)}`;
  }

  private formatNumber(value: number): string {
    return value < 10 ? `0${value}` : `${value}`;
  }
}
