import { UI } from "./modules/UI.js";
import { Tool } from "./modules/Tool.js";
import { Tile } from "./modules/Tile.js";
import { stash } from "./modules/Player.js";
import { worldMap } from "./modules/World.js";
import { startBtn, resetBtn, shovelBtn, pickAxeBtn, axeBtn, syringeBtn, animatedStashBox, cloudInStash, leavesInStash, strongLeavesInStash, woodInStash, rockInStash, soilInStash, grassInStash, ironInStash, goldInStash, diamondInStash, pauseBtn, returnBtn } from "./models/Constants.js";

  class Game {
  constructor() {
    this.initialize();
  }

  initialize() {
    this.setupEventListeners();
    worldMap.createWorld();
  }

  setupEventListeners() {
    startBtn.addEventListener('click', UI.startGame);
    resetBtn.addEventListener('click', UI.resetGame);
    pauseBtn.addEventListener('click', UI.pauseGame);
    returnBtn.addEventListener('click', UI.returnToGame);
    animatedStashBox.addEventListener('click', stash.openStash);

    shovelBtn.addEventListener('click', Tool.pickShovel);
    pickAxeBtn.addEventListener('click', Tool.pickPAxe);
    axeBtn.addEventListener('click', Tool.pickAxe);
    syringeBtn.addEventListener('click', Tool.pickSyringe);

    cloudInStash.addEventListener('click', Tile.pickCloud);
    leavesInStash.addEventListener('click', Tile.pickLeaves);
    strongLeavesInStash.addEventListener('click', Tile.pickStrongLeaves);
    woodInStash.addEventListener('click', Tile.pickWood);
    rockInStash.addEventListener('click', Tile.pickRock);
    grassInStash.addEventListener('click', Tile.pickGrass);
    soilInStash.addEventListener('click', Tile.pickSoil);
    ironInStash.addEventListener('click', Tile.pickIron);
    goldInStash.addEventListener('click', Tile.pickGold);
    diamondInStash.addEventListener('click', Tile.pickDiamond);
  }
}

 const MINECRAFT2D_GAME = new Game()
MINECRAFT2D_GAME.initialize();
MINECRAFT2D_GAME.setupEventListeners();


