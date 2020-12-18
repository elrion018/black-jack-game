import { BlackJackModel } from './models';

const model = new BlackJackModel();

model.setDealerInstance();
model.setUserInstances(['a', 'b']);
model.gameStart();
model.gameProgress([true, false]);

console.log(model.getDealerCards());
console.log(model.getDealerSumValue());
console.log(model.getUsersCards());
console.log(model.getUsersSumValues());
console.log(model.getIsContinue());
