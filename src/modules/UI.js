import { backgroundMusic, gameContainer, landingPage, pauseScreen} from "../models/Constants.js";

export class UI {
  static startGame() {
    gameContainer.style.display = 'flex';
    landingPage.style.display = 'none';
    backgroundMusic.play();
  }

  static resetGame() {
    window.location.reload();
  }

  static pauseGame() {
    backgroundMusic.pause();
    landingPage.style.display = 'none';
    gameContainer.style.display = 'none';
    pauseScreen.style.display = 'flex';
  }

  static returnToGame() {
    backgroundMusic.play();
    pauseScreen.style.display = 'none';
    gameContainer.style.display = 'flex';
  }
}
  
  