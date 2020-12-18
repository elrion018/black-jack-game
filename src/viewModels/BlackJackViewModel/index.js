import { message } from '../../constants';

export default class BlackJackViewModel {
  constructor(model) {
    this.model = model;
  }

  getUserNames() {
    return this.model.getUserNames();
  }

  setUserNames(userNames) {
    const splitedUserNames = userNames.split(',');
    const errorMessage = this.validUserNames(splitedUserNames);

    if (errorMessage) {
      alert(errorMessage);
      return;
    }

    this.model.setUserInstances(splitedUserNames);
  }

  setBetMoney(betMoney, userIndex) {
    const errorMessage = this.validBetMoney(betMoney);

    if (errorMessage) {
      alert(errorMessage);
      return;
    }
  }

  validUserNames(userNames) {
    if (this.isBlank(userNames)) {
      return message.isBlank;
    }

    if (this.isOverLaped(userNames)) {
      return message.isOverLaped;
    }
  }

  validBetMoney(betMoney) {
    console.log(betMoney);
    if (betMoney === '') {
      return message.isBlank;
    }
  }

  isOverLaped(userNames) {
    const names = {};

    for (let i = 0; i < userNames.length; i++) {
      if (userNames[i] in names) {
        return true;
      }

      names[userNames[i]] = true;
    }
  }

  isBlank(userNames) {
    if (userNames[0] === '') {
      return true;
    }

    for (let i = 0; i < userNames.length; i++) {
      if (userNames[i].trim() === '') {
        return true;
      }
    }
  }
}
