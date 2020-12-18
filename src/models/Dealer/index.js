import { randomCard } from '../../utils';

export default class Dealer {
  constructor() {
    this._sumValue = 0;
    this._cards = [];
  }

  getCards() {
    return [...this._cards];
  }

  getSumValue() {
    return this._sumValue;
  }

  drawCard() {
    this._cards.push(randomCard());
  }
}
