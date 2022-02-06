// PLAYER SECTION START
class Player {
  constructor() {
    // DOM SELECTOR FOR PLAYER
    this.batup = document.querySelector('.batu-p');
    this.kertasp = document.querySelector('.kertas-p');
    this.guntingp = document.querySelector('.gunting-p');

    //    DOM SELECTOR FOR COM
    this.batuc = document.querySelector('.batu-c');
    this.kertasc = document.querySelector('.kertas-c');
    this.guntingc = document.querySelector('.gunting-c');
  }
}
// PLAYER SECTION END

// UI MANIPULATION SECTION START
class UI {
  constructor() {
    this.resultText = document.createElement('h1');
    this.resultContainer = document.querySelector('.vs');
    this.pilihanPlayer;
    this.pilihanKomputer;
  }

  showDefault = () => {
    this.resultContainer.classList.remove('result-container__draw');
    this.resultContainer.classList.remove('result-container__win');
    this.resultText.classList.add('versus');
    this.resultText.innerHTML = 'VS';
    this.resultContainer.appendChild(this.resultText);
  };

  showWin = () => {
    this.resultContainer.classList.remove('result-container__draw');
    this.resultText.classList.remove('versus');
    this.resultContainer.classList.add('result-container__win');
    this.resultText.innerHTML = 'PLAYER 1<br/>WIN';
    this.resultContainer.appendChild(this.resultText);
  };

  showLose = () => {
    this.resultContainer.classList.remove('result-container__draw');
    this.resultText.classList.remove('versus');
    this.resultContainer.classList.add('result-container__win');
    this.resultText.innerHTML = 'COM<br/>WIN';
    this.resultContainer.appendChild(this.resultText);
  };

  showDraw = () => {
    this.resultContainer.classList.add('result-container__draw');
    this.resultText.classList.remove('versus');
    this.resultText.innerHTML = 'DRAW';
    this.resultContainer.appendChild(this.resultText);
  };

  logicForUI = (pilihanPlayer, pilihanKomputer) => {
    if (pilihanPlayer === pilihanKomputer) return this.showDraw();
    if (
      (pilihanPlayer === 'batu' && pilihanKomputer === 'gunting') ||
      (pilihanPlayer === 'gunting' && pilihanKomputer === 'kertas') ||
      (pilihanPlayer === 'kertas' && pilihanKomputer === 'batu')
    )
      return this.showWin();
    if (
      (pilihanPlayer === 'gunting' && pilihanKomputer === 'batu') ||
      (pilihanPlayer === 'kertas' && pilihanKomputer === 'gunting') ||
      (pilihanPlayer === 'batu' && pilihanKomputer === 'kertas')
    )
      return this.showLose();
  };
}

// UI MANIPULATION SECTION END

// START NEW GAME
class NewGame extends UI {
  constructor(pilihanPlayer, pilihanKomputer) {
    super(pilihanPlayer, pilihanKomputer);
    this.reset = document.querySelector('.result-container__reset');
    this.options = document.querySelectorAll('.options');
    this.init();
  }

  init = () => {
    this.player = new Player();
    this.showDefault();
    this.resetBtn();
  };

  playerHandler = () => {
    this.player.batup.onclick = () => {
      this.pilihanPlayer = 'batu';
      this.player.batup.classList.add('player-selected');
      this.disableGame();
      this.generateComChoice();
    };

    this.player.kertasp.onclick = () => {
      this.pilihanPlayer = 'kertas';
      this.player.kertasp.classList.add('player-selected');
      this.disableGame();
      this.generateComChoice();
    };

    this.player.guntingp.onclick = () => {
      this.pilihanPlayer = 'gunting';
      this.player.guntingp.classList.add('player-selected');
      this.disableGame();
      this.generateComChoice();
    };
  };

  comHandler = (choice) => {
    if (choice === 'batu') {
      this.pilihanKomputer = choice;
      this.player.batuc.classList.add('player-selected');
      this.player.guntingc.classList.remove('player-selected');
      this.player.kertasc.classList.remove('player-selected');
    }
    if (choice === 'kertas') {
      this.pilihanKomputer = choice;
      this.player.kertasc.classList.add('player-selected');
      this.player.batuc.classList.remove('player-selected');
      this.player.guntingc.classList.remove('player-selected');
    }
    if (choice === 'gunting') {
      this.pilihanKomputer = choice;
      this.player.guntingc.classList.add('player-selected');
      this.player.batuc.classList.remove('player-selected');
      this.player.kertasc.classList.remove('player-selected');
    }
  };

  disableGame = () => {
    this.options.forEach((option) => (option.disabled = true));
  };

  uiResult = () => {
    if (this.pilihanPlayer && this.pilihanKomputer) {
      this.logicForUI(this.pilihanPlayer, this.pilihanKomputer);
    }
  };

  resetBtn = () => {
    this.reset.onclick = () => {
      this.showDefault();
      this.options.forEach((option) => {
        option.classList.remove('player-selected');
        option.disabled = false;
      });
    };
  };

  randomGenerator = () => {
    const options = ['batu', 'gunting', 'kertas'];
    return options[Math.floor(Math.random() * options.length)];
  };

  generateComChoice = () => {
    const random = this.randomGenerator();

    if (random) {
      this.comHandler(random);
      this.uiResult();
    }
  };

  setGame = () => {
    this.playerHandler();
  };
}

const GameStart = new NewGame();

GameStart.setGame();
