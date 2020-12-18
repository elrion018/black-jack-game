import { BlackJackModel } from './models';

import { BlackJackView } from './views';
import { BlackJackViewModel } from './viewModels';

// import {} from "./viewModels"

// const model = new BlackJackModel();

// model.setDealerInstance();
// model.setUserInstances(['a', 'b']);
// model.gameStart();
// model.gameProgress([true, false]);

// console.log(model.getDealerCards());
// console.log(model.getDealerSumValue());
// console.log(model.getUsersCards());
// console.log(model.getUsersSumValues());
// console.log(model.getIsContinue());
const gameModel = new BlackJackModel();
const gameViewModel = new BlackJackViewModel(gameModel);
const gameContainer = document.querySelector('#blackjack-game-container');
const gameView = new BlackJackView(gameViewModel, gameContainer);
