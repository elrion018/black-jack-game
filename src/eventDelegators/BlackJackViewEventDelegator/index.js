export default class BlackJackViewEventDelegator {
  constructor(viewModel, gameContainer) {
    this.view = null;
    this.viewModel = viewModel;
    this.gameContainer = gameContainer;
  }

  bindView(view) {
    this.view = view;
  }

  bindEvent(element) {
    element.addEventListener('click', this.onClick.bind(this));
  }

  onClick(event) {
    const { dataset } = event.target;

    if (dataset.purpose) {
      this[dataset.purpose](dataset);
    }
  }

  setUserNames(dataset) {
    const userNames = this.gameContainer.querySelector('#blackjack-name-input').value;

    this.viewModel.setUserNames(userNames);
    this.view.renderBetInputContainer();
    this.view.renderBetInputs();
    this.view.renderGameStartButton();
  }

  setBetMoney(dataset) {
    const { userindex } = dataset;
    const betMoney = this.gameContainer.querySelectorAll('.blackjack-bet-input')[userindex].value;
    this.viewModel.setBetMoney(betMoney, userindex);
  }

  gameStart(dataset) {
    this.viewModel.gameStart();
    this.view.renderAskMoreCardInputContainer();
    this.view.renderAskMoreCardInputs();
    this.view.renderGameProgressButton();
  }

  gameProgress(dataset) {
    const inputs = this.gameContainer.querySelectorAll('.blackjack-ask-more-card-input');

    const isHit = [];

    for (let i = 0; i < inputs.length; i++) {
      isHit.push(inputs[i].value);
    }

    this.viewModel.gameProgress(isHit);
    const gameContinue = this.viewModel.getIsContinue();

    if (gameContinue) {
      this.view.renderAskMoreCardInputs();
      this.view.renderGameProgressButton();
      this.view.renderGameInmediateResultContainer();
      this.view.renderGameInmediateResult();
    }

    if (!gameContinue) {
      this.view.renderGameResultContainer();
    }
  }
}
