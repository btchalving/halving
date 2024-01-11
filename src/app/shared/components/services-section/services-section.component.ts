import { Component, OnInit } from '@angular/core';
import { BreakpointService } from '../../../services/breakpoint.service';
import { Observable } from 'rxjs';
import { Language } from '../../../models/language.interface';
import { Service } from '../../../models/services.interface';
import { LanguageSelectorService } from 'src/app/services/language-selector.service';

@Component({
  selector: 'btc-services-section',
  templateUrl: './services-section.component.html',
  styleUrls: ['./services-section.component.scss'],
})
export class ServicesSectionComponent implements OnInit {
  serviceTitle: Language = {
    es: 'El Poder de las Criptomonedas: Invirtiendo en el Futuro',
    en: 'The Power of Cryptocurrencies: Investing in the Future',
  };
  serviceIntro: Language = {
    es: 'En el vertiginoso mundo financiero de la era digital, las criptomonedas han emergido como una fuerza transformadora, desafiando las convenciones y ofreciendo nuevas oportunidades de inversión. Este fenómeno revolucionario ha capturado la atención de inversores y entusiastas por igual, creando un paisaje donde el potencial de crecimiento parece ilimitado.',
    en: 'In the fast-paced digital financial world, cryptocurrencies have emerged as a transformative force, challenging conventions and offering new investment opportunities. This revolutionary phenomenon has captured the attention of investors and enthusiasts alike, creating a landscape where the growth potential seems limitless.',
  };
  services: Service[] = [
    {
      title: { es: 'Crecimiento exponencial', en: 'Exponential growth' },
      imgUrl: '../../../../assets/images/achievement.webp',
      text: {
        es: 'Las criptomonedas tienen un potencial de crecimiento exponencial. Su naturaleza descentralizada y la creciente adopción sugieren un futuro significativo en valor y relevancia.',
        en: 'Cryptocurrencies hold potential for exponential growth. Their decentralized nature and increasing adoption point towards a significant future in value and relevance.',
      },
    },
    {
      title: { es: 'Cripto seguridad', en: 'Crypto Security' },
      imgUrl: '../../../../assets/images/security.webp',
      text: {
        es: 'La seguridad en criptomonedas es primordial. La tecnología blockchain y medidas como la autenticación de doble factor y carteras seguras garantizan transacciones seguras, ofreciendo tranquilidad a los usuarios.',
        en: 'Cryptocurrency security is paramount. Blockchain technology and measures like two-factor authentication and secure wallets ensure safe transactions, providing users with peace of mind.',
      },
    },
    {
      title: { es: 'Financiamiento de ideas', en: 'Funding for ideas' },
      imgUrl: '../../../../assets/images/idea.webp',
      text: {
        es: 'Ideas disruptivas encuentran financiamiento a través de criptomonedas, transformando industrias y ofreciendo a inversores acceso directo a futuras tendencias.',
        en: 'Disruptive ideas are funded through cryptocurrencies, transforming industries and offering investors direct access to future trends.',
      },
    },
    {
      title: {
        es: 'Billeteras digitales',
        en: 'Digital wallets',
      },
      imgUrl: '../../../../assets/images/web.webp',
      text: {
        es: 'Las billeteras digitales cripto son tu clave para almacenar y gestionar de forma segura tus activos digitales, permitiéndote transacciones eficientes en el mundo financiero descentralizado.',
        en: 'Crypto digital wallets are your key to securely storing and managing your digital assets, enabling efficient transactions in the decentralized financial world.',
      },
    },
    {
      title: { es: 'Comercio electrónico cripto', en: 'Crypto E-commerce' },
      imgUrl: '../../../../assets/images/commerce.webp',
      text: {
        es: 'Comerciar digitalmente con criptomonedas abre las puertas a transacciones rápidas y seguras. Accede a un mundo de oportunidades financieras descentralizadas mientras controlas tus inversiones desde la comodidad de tu billetera digital.',
        en: 'Digital trading with cryptocurrencies unlocks doors to swift and secure transactions. Access a realm of decentralized financial opportunities while maintaining control of your investments from the convenience of your digital wallet.',
      },
    },
    {
      title: { es: 'Revolución cripto', en: 'Crypto revolution' },
      imgUrl: '../../../../assets/images/team.webp',
      text: {
        es: 'Millones ya usan criptomonedas para inversiones descentralizadas. Únete a la revolución crypto.',
        en: 'Millions are already using cryptocurrencies for decentralized investments. Join the crypto revolution.',
      },
    },
    {
      title: { es: 'Crecimiento sostenido', en: 'Sustained growth' },
      imgUrl: '../../../../assets/images/rocket.webp',
      text: {
        es: 'El crecimiento sostenido de las criptomonedas es innegable, destacando su impacto en la escena financiera global. Con cada día que pasa, más personas reconocen el potencial de estas innovadoras formas de activos digitales.',
        en: 'The sustained growth of cryptocurrencies is undeniable, underscoring their impact on the global financial stage. With each passing day, more individuals recognize the potential of these innovative forms of digital assets.',
      },
    },
    {
      title: {
        es: 'Información descentralizada',
        en: 'Decentralized information',
      },
      imgUrl: '../../../../assets/images/database.webp',
      text: {
        es: 'La información descentralizada de las criptomonedas ofrece transparencia y control directo sobre los activos digitales, eliminando intermediarios y fortaleciendo la seguridad financiera',
        en: 'Decentralized information in cryptocurrencies provides transparency and direct control over digital assets, eliminating intermediaries and enhancing financial security.',
      },
    },
  ];

  isMobile$: Observable<boolean> = this.breakpointService.isMobile$;
  language$: Observable<string> = this.languageSelectorService.getLanguage();
  constructor(
    private breakpointService: BreakpointService,
    private languageSelectorService: LanguageSelectorService
  ) {}

  ngOnInit(): void {}
}
