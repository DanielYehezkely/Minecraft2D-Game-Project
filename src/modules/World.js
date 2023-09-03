import { TILE_CLASSNAMES } from "../models/Tiles-ClassNames.js";
import { TILES_TEMPLATE } from "../models/Tiles-Template.js";

export class WorldMap {
  constructor() {
    this.worldMap = document.getElementById('world-map');
  }

  createWorld() {
    for (let row = 0; row < TILES_TEMPLATE.length; row++) {
      for (let col = 0; col < TILES_TEMPLATE[row].length; col++) {
        const tileType = TILES_TEMPLATE[row][col];
        const tileElement = document.createElement('div');
        tileElement.className = TILE_CLASSNAMES[tileType];
        tileElement.classList.add('tile');
        this.worldMap.appendChild(tileElement);
      }
    }
  }
}
export const worldMap = new WorldMap();

 