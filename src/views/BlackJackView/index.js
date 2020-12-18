import { BlackJackViewEventDelegator } from '../../eventDelegators';
import { addTemplateToDOMInnerHTML } from '../../utils';
import { message } from '../../constants';

export default class BlackJackView {
  constructor(viewModel, gameContainer) {
    this.viewModel = viewModel;
    this.gameContainer = gameContainer;

    this.eventDelegator = new BlackJackViewEventDelegator(viewModel, gameContainer);
    this.eventDelegator.bindEvent(this.gameContainer);
    this.eventDelegator.bindView(this);
  }

  renderBetInputContainer() {
    addTemplateToDOMInnerHTML(this.gameContainer, `<div id="blackjack-bet-input-container"></div>`);
  }

  renderBetInputs() {
    this.viewModel.getUserNames().forEach((userName, index) => {
      addTemplateToDOMInnerHTML(
        this.gameContainer.querySelector('#blackjack-bet-input-container'),
        `
        <p>${userName}${message.askForBet}</p>
        <input class="blackjack-bet-input" type="number"></input>
          <button class="blackjack-bet-button" data-userIndex="${index}" data-purpose="setBetMoney">${message.bet}</button>
        `,
      );
    });
  }
}
