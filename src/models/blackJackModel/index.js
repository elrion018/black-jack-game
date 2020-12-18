import { Dealer, User } from '..';

export default class BlackJackModel {
  constructor() {
    this.Dealer = null;
    this.users = [];
  }

  setDealerInstance() {
    this.Dealer = new Dealer();
  }

  setUserInstances(userNames) {
    this.users = userNames.map(userName => {
      return new User(userName);
    });
  }
}
