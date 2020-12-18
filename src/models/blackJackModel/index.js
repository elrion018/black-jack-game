import { Dealer, User } from '..';

export default class BlackJackModel {
  constructor() {
    this._dealer = null;
    this._users = [];
  }

  getDealerCards() {
    return this._dealer.getCards();
  }

  getDealerSumValue() {
    return this._dealer.getSumValue();
  }

  getUsersCards() {
    return this._users.map(user => {
      return [user._name, user.getCards()];
    });
  }

  getUsersSumValues() {
    return this._users.map(user => {
      return [user._name, user._sumValue];
    });
  }

  setDealerInstance() {
    this._dealer = new Dealer();
  }

  setUserInstances(userNames) {
    this._users = userNames.map(userName => {
      return new User(userName);
    });
  }

  gameStart() {
    this._dealer.firstDraws();

    this._users.forEach(user => {
      user.firstDraws();
    });
  }

  letDealerDrawCard() {
    if (this._dealer.getSumValue() <= 16) {
      this._dealer.drawCard();
    }
  }

  letUsersDrawCard(isHit) {
    this._users.forEach((user, index) => {
      if (isHit[index]) {
        user.drawCard();
      }
    });
  }
}
