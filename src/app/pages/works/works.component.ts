import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Grid } from 'src/app/models/grid.interface';
import { LanguageSelectorService } from 'src/app/services/language-selector.service';

@Component({
  selector: 'btc-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss'],
})
export class WorksComponent implements OnInit {
  gridItems: Grid[] = [
    {
      title: {
        es: 'El precio de Bitcoin aumenta. Grayscale y BlackRock revelan las tarifas de ETF propuestas.',
        en: 'Bitcoin Price Rises. Grayscale and BlackRock Reveal Proposed ETF Fees.',
      },
      paragraph: {
        es: `Bitcoin estaba subiendo mientras el sector criptográfico sigue en vilo por la posible aprobación de fondos cotizados en bolsa vinculados al comercio al contado de Bitcoin, con una fecha límite regulatoria que se avecina el miércoles.`,
        en: `Bitcoin was rising as the crypto sector remains on tenterhooks over the potential approval of exchange-traded funds tied to spot trading of Bitcoin, with a regulatory deadline looming Wednesday.`,
      },
      imageUrl: '../../../../assets/projects-images/1-btc-halving.webp',
      reverse: false,
      link: 'https://www.barrons.com/articles/bitcoin-crypto-prices-today-64a7193c',
    },
    {
      title: {
        es: '¿Puede Bitcoin estallar a medida que se acerca la fecha límite del ETF?',
        en: 'Can Bitcoin Break Out As ETF Deadline Approaches?',
      },
      paragraph: {
        es: 'El precio de Bitcoin subió por encima de los 44.000 dólares el 5 de diciembre del año pasado como parte de una tendencia alcista mayor. Pero, desde entonces, se movió lateralmente por esta zona. Han pasado 33 días desde que no vimos ninguna acción significativa del precio. Pero ahora que el ETF está a punto de ser aprobado, esto podría ser un catalizador de importantes movimientos de precios.        ¿Sería esto un catalizador positivo que provocaría una ruptura por encima? ¿O la aprobación del ETF ya se ha tenido en cuenta en el mercado, lo que podría conducir a un escenario de “vender las noticias” y desencadenar una recesión?',
        en: 'The price of Bitcoin climbed above $44,000 on December 5 last year as part of a larger uptrend. But, since then, it moved sideways around this area. It has been 33 days since we havent seen some significant price action. But now, as the ETF is on the brink of approval, this could be a catalyst for major price movements. Would this be a positive catalyst causing a breakout above? Or has the approval of the ETF already been factored into the market, potentially leading to a scenario of “selling the news” and triggering a downturn?...',
      },
      imageUrl: '../../../../assets/projects-images/2-btc-halving.webp',
      reverse: true,
      link: 'https://www.ccn.com/analysis/bitcoin-break-out-etf-deadline-approaches/',
    },
    {
      title: {
        es: 'BlackRock y VanEck establecen tarifas bajas para los ETF de bitcoin al contado propuestos',
        en: 'BlackRock, VanEck set low fees for proposed spot bitcoin ETFs',
      },
      paragraph: {
        es: '8 ene (Reuters) - BlackRock (BLK.N), VanEck y Ark/21Shares revelaron el lunes bajas comisiones para sus planes de fondos cotizados en bolsa (ETF) de bitcoin al contado, intensificando la competencia por la cuota de mercado a medida que se acerca la fecha límite para aprobar dichos vehículos de inversión. telares.BlackRock fijó una comisión del 0,30%, mientras que VanEck reveló planes de cobrar una comisión del 0,25%. ARK 21Shares Bitcoin ETF también redujo su tarifa planificada al 0,25% desde el 0,80% anterior. Notablemente más bajas que las cobradas por algunos pares, las tarifas profundizan la competencia entre varios participantes que compiten por una porción del mercado spot de ETF de bitcoin.',
        en: 'Jan 8 (Reuters) - BlackRock (BLK.N), VanEck and Ark/21Shares disclosed low fees on Monday for their planned spot bitcoin exchange-traded funds (ETFs), heating up competition for market share as the deadline to approve such investment vehicles looms. BlackRock set a fee of 0.30%, while VanEck disclosed plans to charge a 0.25% fee. ARK 21Shares Bitcoin ETF also lowered its planned fee to 0.25% from 0.80% earlier.Notably lower than those charged by some peers, the fees deepen competition among several participants vying for a slice of the spot bitcoin ETF market.',
      },
      imageUrl: '../../../../assets/projects-images/3-btc-halving.webp',
      reverse: false,
      link: 'https://www.reuters.com/technology/blackrock-sets-030-fee-proposed-spot-bitcoin-etf-2024-01-08/',
    },
    {
      title: {
        es: 'LA PRÓXIMA REDUCCIÓN A LA MITAD DE BITCOIN PODRÍA SER DEVASTADORA PARA LOS MINEROS, SEGÚN DEFILLAMA',
        en: 'UPCOMING BITCOIN HALVING COULD BE DEVASTATING FOR MINERS, ACCORDING TO DEFILLAMA',
      },
      paragraph: {
        es: 'Históricamente, las reducciones a la mitad han sido precursoras de los mercados alcistas, generando un aumento significativo en el precio de Bitcoin. Sin embargo, esta vez podría ser diferente, ya que algunos expertos advierten sobre posibles dificultades para los mineros, como el último análisis de DefiLlama. La esencia del halving radica en su capacidad para limitar el suministro de Bitcoin, un fenómeno que ha llevado a la apreciación del valor en eventos anteriores.',
        en: 'The next Bitcoin halving, an event that occurs every four years and halves rewards for miners, is about to occur in April, marking a milestone in the evolution of the world’s most famous cryptocurrency.Historically, halvings have been precursors to bull markets, generating a significant increase in the price of Bitcoin. However, this time it could be different, as some experts warn of possible difficulties for miners, such as the latest DefiLlama analysis. The essence of the halving lies in its ability to limit the supply of Bitcoin, a phenomenon that has led to value appreciation in previous events.',
      },
      imageUrl: '../../../../assets/projects-images/4-btc-halving.webp',
      reverse: true,
      link: 'https://crypto-economy.com/upcoming-bitcoin-halving-could-be-devastating/',
    },
  ];

  language$: Observable<string> = this.languageSelectorService.getLanguage();

  constructor(private languageSelectorService: LanguageSelectorService) {}

  ngOnInit(): void {}
}
