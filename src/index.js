import { BlackJackModel } from './models';

const model = new BlackJackModel();

model.setDealerInstance();
model.setUserInstances(['a', 'b']);
model.gameStart();
model.letUsersDrawCard([true, false]);

console.log(model.getUsersCards());
