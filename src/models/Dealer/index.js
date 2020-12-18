import { randomCard, isBlackJack } from '../../utils';

export default class Dealer {
  constructor() {
    this._sumValue = 0;
    this._cards = [];
    this.isBurst = false;
    this.isBlackJack = false;
  }

  firstDraws() {
    let sumValue = 22;
    let cards = [];

    while (sumValue >= 22) {
      sumValue = 0;
      cards = [];

      for (let i = 0; i < 2; i++) {
        let [sign, value] = randomCard(sumValue);
        sumValue += value;
        cards.push([sign, value]);
      }
    }

    this._sumValue = sumValue;
    this._cards = cards;

    if (isBlackJack(this)) {
      this.isBlackJack = true;
    }
  }

  getCards() {
    return [...this._cards];
  }

  getSumValue() {
    return this._sumValue;
  }

  getIsBlackJack() {
    return this.isBlackJack;
  }

  getIsBurst() {
    return this.isBurst;
  }

  drawCard() {
    const [sign, value] = randomCard(this._sumValue);
    this._sumValue += value;

    this._cards.push([sign, value]);

    if (this._sumValue > 21) {
      this.isBurst = true;
    }
  }
}
