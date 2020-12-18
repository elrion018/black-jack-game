import { Dealer, User } from '..';

export default class BlackJackModel {
  constructor() {
    this._dealer = new Dealer();
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

  getBetMoneys() {
    return this._users.map(user => {
      return user._betMoney;
    });
  }

  setUserInstances(userNames) {
    this._users = userNames.map(userName => {
      return new User(userName);
    });
  }

  setBetMoney(betMoney, userIndex) {
    this._users[userIndex].setBetMoney(betMoney);
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
      console.log('end');
      return true;
    }

    if (this.isUsersBlackJacK(users)) {
      console.log('end');
      return true;
    }

    if (this._dealer.getIsBurst()) {
      console.log('end');
      return true;
    }

    if (this.AllUsersAreBurst(users)) {
      console.log('end');
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
