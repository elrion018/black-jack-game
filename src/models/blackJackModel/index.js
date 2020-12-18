import { Dealer, User } from '..';

export default class BlackJackModel {
  constructor() {
    this._dealer = null;
    this._users = [];
    this.isContinue = true;
  }

  getUserNames() {
    return this._users.map(user => {
      return user._name;
    });
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

  getIsContinue() {
    return this.isContinue;
  }

  setDealerInstance() {
    this._dealer = new Dealer();
  }

  setUserInstances(userNames) {
    console.log(userNames);
    this._users = userNames.map(userName => {
      return new User(userName);
    });

    console.log(this._users);
  }

  gameStart() {
    this._dealer.firstDraws();

    this._users.forEach(user => {
      user.firstDraws();
    });
  }

  gameProgress(isHit) {
    if (this.isGameEndCondition(this._users)) {
      this.isContinue = false;
      return;
    }

    if (this._dealer.getSumValue() <= 16) {
      this.letDealerDrawCard();
    }

    this.letUsersDrawCard(isHit);
  }

  isUsersBlackJacK(users) {
    const blackJackUsers = users.filter(user => {
      return user.getIsBlackJack();
    });

    if (blackJackUsers.length > 0) {
      return true;
    }
  }

  AllUsersAreBurst(users) {
    const burstUsers = users.filter(user => {
      return user.getIsBurst();
    });

    if (burstUsers.length === users.length) {
      return true;
    }
  }

  isGameEndCondition(users) {
    if (this._dealer.getIsBlackJack()) {
      return true;
    }

    if (this.isUsersBlackJacK(users)) {
      return true;
    }

    if (this._dealer.getIsBurst()) {
      return true;
    }

    if (this.AllUsersAreBurst(users)) {
      return true;
    }
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
