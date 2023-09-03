import {  stashContainer } from "../models/Constants.js"
import { closeStashSound,openStashSound } from "../models/Sounds.js";

export class Stash {
  constructor() {
    this.resources = {
      skyCount: 0,
      cloudCount: 0,
      leavesCount: 0,
      strongLeavesCount: 0,
      woodCount: 0,
      grassCount: 0,
      soilCount: 0,
      rockCount: 0,
      ironCount: 0,
      goldCount: 0,
      diamondCount: 0,
    };
  }

  openStash() {
    if (stashContainer.style.display === 'grid') {
      stashContainer.style.display = 'none';
      closeStashSound.play();
    } else {
      openStashSound.play();
      stashContainer.style.display = 'grid';
    }
  }

  updateResourceCount(resourceType, count) {
    this.resources[resourceType] += count;
  }
}

export const stash = new Stash();
export const resources = stash.resources
  
 