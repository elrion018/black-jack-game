import { randomCard } from '../../utils';

export default class User {
  constructor(name) {
    this._name = name;
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
