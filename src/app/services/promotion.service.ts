import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PromotionService {
  promotionAvailable$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    true
  );
  viewPromotionForm$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  constructor() {}

  setPromotion(value: boolean) {
    this.promotionAvailable$.next(value);
  }

  getPromotion(): Observable<boolean> {
    return this.promotionAvailable$.asObservable();
  }

  setPromotionFormView(value: boolean): void {
    this.viewPromotionForm$.next(value);
  }

  getPromotionFormView(): Observable<boolean> {
    return this.viewPromotionForm$.asObservable();
  }
}
