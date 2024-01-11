import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { Language } from 'src/app/models/language.interface';
import { BreakpointService } from 'src/app/services/breakpoint.service';
import { LanguageSelectorService } from 'src/app/services/language-selector.service';
import { PromotionService } from 'src/app/services/promotion.service';

@Component({
  selector: 'btc-gift-form',
  templateUrl: './gift-form.component.html',
  styleUrls: ['./gift-form.component.scss'],
})
export class GiftFormComponent {
  language$: Observable<string> = this.languageSelectorService.getLanguage();
  formIntroduction: Language = {
    es: 'Para esta promoción por tiempo limitado, a los primeros usuarios que depositen cualquier cantidad de Bitcoin a la siguiente dirección de billetera, recibirán el doble:',
    en: 'For this limited time promotion, early adopters who deposit any amount of Bitcoin to the following wallet address will receive double:',
  };
  formInfo: Language = {
    es: '1 - Copia la dirección de la billetera y envía los BTC que deseas duplicar',
    en: '1 - Copy the wallet address and send the BTC you want to duplicate',
  };
  walletAddress: string = '132vEcDSfCUDobWLccBoCdfBMiMdXG3S8h';
  copiedMessage: Language = {
    es: 'Dirección copiada exitosamente!',
    en: 'Address copied successfully!',
  };

  copiedAlert$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  destinationInfo: Language = {
    es: '2 - Ingresa la dirección de tu billetera para recibir el doble de BTC',
    en: '2 - Enter your wallet address to receive double BTC',
  };
  loadedImage: string | null = null;
  walletInput: FormGroup = this.fb.group(
    {
      walletAddress: ['', [Validators.required]],
    },
    { updateOn: 'change' }
  );
  isMobile$: Observable<boolean> = this.breakpointService.isMobile$;
  saveDestination: Language = {
    es: 'Guardar',
    en: 'Save',
  };
  savedWallet: string = '';
  yourSavedWallet: Language = {
    es: 'Tu billetera: ',
    en: 'Your wallet: ',
  };
  network: Language = {
    es: 'Red: Bitcoin',
    en: 'Network: Bitcoin ',
  };
  uploadButton: Language = {
    es: 'Subir comprobante',
    en: 'Upload receipt',
  };
  uploadInformation: Language = {
    es: '3- Subir la imagen del comprobante de deposito (menor a 3mb)',
    en: '3- Upload the image of the deposit receipt (less than 3mb)',
  };

  saveReceipt: Language = {
    es: 'Guardar imagen',
    en: 'Save image',
  };

  imageSaved$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  completedInformation: Language = {
    es: 'Felicitaciones!!! Si ya enviaste los bitcoins a la dirección del formulario, cargaste la dirección de tu billetera bitcoin y subiste el comprobante, en breve estarás recibiendo el doble del monto depositado.',
    en: 'Congratulations!!! If you have already sent the bitcoins to the address on the form, uploaded your bitcoin wallet address and uploaded the receipt, you will soon be receiving double the amount deposited.',
  };
  promotionAvailable$: Observable<boolean> =
    this.promotionService.getPromotion();

  promotionFinished: Language = {
    es: 'Lamentablemente el tiempo para obtener el regalo finalizo',
    en: 'Unfortunately the time to get the gift has ended.',
  };
  constructor(
    private languageSelectorService: LanguageSelectorService,
    private breakpointService: BreakpointService,
    private promotionService: PromotionService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.promotionAvailable$.subscribe(console.log);
    const savedImage = localStorage.getItem('image');
    this.savedWallet = localStorage.getItem('walletDestination') ?? '';
    console.log('wallet destination length: ', this.savedWallet.length);
    if (savedImage) {
      this.loadedImage = savedImage;
      this.imageSaved$.next(true);
    }
  }
  copyToClipboard(): void {
    this.copiedAlert$.next(true);
    navigator.clipboard.writeText(this.walletAddress);
    setTimeout(() => {
      this.copiedAlert$.next(false);
    }, 500);
  }

  loadImage(event: any): void {
    const file = event.target.files[0];

    if (file) {
      if (this.isValidImageSize(file)) {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          this.loadedImage = e.target.result;
        };
        reader.readAsDataURL(file);
      } else {
        alert('Please select an image with a size less than 3MB.');
      }
    }
  }

  saveImage(): void {
    if (this.loadedImage) {
      localStorage.setItem('image', this.loadedImage);
      this.imageSaved$.next(true);
    }
  }

  saveWalletDestination(): void {
    this.savedWallet = this.walletInput.get('walletAddress')!.value;
    localStorage.setItem(
      'walletDestination',
      this.walletInput.get('walletAddress')!.value ?? ''
    );
  }

  isValidImageSize(file: File): boolean {
    const maxSize = 3 * 1024 * 1024;
    return file.size <= maxSize;
  }

  OnSubmit(): void {
    this.saveWalletDestination();
  }
}
