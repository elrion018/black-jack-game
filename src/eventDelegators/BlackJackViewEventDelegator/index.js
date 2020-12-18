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
    console.log('call');
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
  }

  setBetMoney(dataset) {
    const { userindex } = dataset;
    const betMoney = this.gameContainer.querySelectorAll('.blackjack-bet-input')[userindex].value;
    this.viewModel.setBetMoney(betMoney, userindex);
  }
}
