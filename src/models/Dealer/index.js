import { randomCard } from '../../utils';

export default class Dealer {
  constructor() {
    this._sumValue = 0;
    this._cards = [];
  }

  firstDraws() {
    let sumValue = 22;
    let cards = [];

    while (sumValue >= 22) {
      sumValue = 0;
      let cards = [];

      for (let i = 0; i < 2; i++) {
        let [sign, value] = randomCard(sumValue);
        sumValue += value;
        cards.push([sign, value]);
      }
    }

    this._sumValue = sumValue;
    this._cards = cards;
  }

  getCards() {
    return [...this._cards];
  }

  getSumValue() {
    return this._sumValue;
  }

  drawCard() {
    const [sign, value] = randomCard();
    this._sumValue += value;

    this._cards.push([sign, value]);
  }
}
