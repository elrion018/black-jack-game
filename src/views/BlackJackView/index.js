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

  resetContainer(container) {
    container.innerHTML = '';
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

  renderGameStartButton() {
    addTemplateToDOMInnerHTML(
      this.gameContainer.querySelector('#blackjack-bet-input-container'),
      `<button id="blackjack-game-start-button" data-purpose="gameStart">${message.gameStart}</button>`,
    );
  }

  renderAskMoreCardInputContainer() {
    this.resetContainer(this.gameContainer.querySelector('#blackjack-bet-input-container'));

    addTemplateToDOMInnerHTML(
      this.gameContainer,
      `<div id="blackjack-ask-more-card-input-container"></div>`,
    );
  }

  renderAskMoreCardInputs() {
    this.resetContainer(
      this.gameContainer.querySelector('#blackjack-ask-more-card-input-container'),
    );

    this.viewModel.getUserNames().forEach((userName, index) => {
      addTemplateToDOMInnerHTML(
        this.gameContainer.querySelector('#blackjack-ask-more-card-input-container'),
        `
        <p>${userName}${message.askMoreCard}</p>
        <input class="blackjack-ask-more-card-input"></input>
        `,
      );
    });
  }

  renderGameProgressButton() {
    addTemplateToDOMInnerHTML(
      this.gameContainer.querySelector('#blackjack-ask-more-card-input-container'),
      `<button id="blackjack-game-progress-button" data-purpose="gameProgress">${message.gameProgress}</button>`,
    );
  }

  renderGameInmediateResultContainer() {
    addTemplateToDOMInnerHTML(
      this.gameContainer,
      `<div id="blackjack-game-Inmediate-result-container"></div>`,
    );
  }

  renderGameInmediateResult() {
    this.resetContainer(
      this.gameContainer.querySelector('#blackjack-game-Inmediate-result-container'),
    );

    this.renderUsersCards();
  }

  renderUsersCards() {
    addTemplateToDOMInnerHTML(
      this.gameContainer.querySelector('#blackjack-game-Inmediate-result-container'),
      `
    <div>
      ${this.viewModel
        .getUsersCards()
        .map(NameAndCards => {
          let [userName, cards] = NameAndCards;
          return `<p>${userName} : ${cards
            .map(card => {
              let [sign, value] = card;
              return `${sign} ${value}`;
            })
            .join(' ')}</p>`;
        })
        .join(' ')}
    </div>
  `,
    );
  }

  renderGameResultContainer() {
    addTemplateToDOMInnerHTML(
      this.gameContainer,
      `<div id="blackjack-game-result-container"></div>`,
    );
  }

  renderGameResult() {}
}
