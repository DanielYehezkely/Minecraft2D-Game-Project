import { shovelBtn, pickAxeBtn, axeBtn, syringeBtn, soilInStash, grassInStash, rockInStash, ironInStash, goldInStash, diamondInStash, leavesInStash, strongLeavesInStash, woodInStash, cloudInStash } from "../models/Constants.js"
import { axeSound, pickaxeSound, shovelSound, syringeSound } from "../models/Sounds.js"
import { resources } from "./Player.js"



export class Tool {
  static pickShovel() {
    document.body.style.cursor = "url('/assets/images/Shovel-Cursor.png'), auto"
    shovelBtn.setAttribute('id', 'active')

    pickAxeBtn.removeAttribute('id', 'active')
    axeBtn.removeAttribute('id', 'active')
    syringeBtn.removeAttribute('id', 'active')

    cloudInStash.removeAttribute('id', 'active');
    leavesInStash.removeAttribute('id', 'active');
    strongLeavesInStash.removeAttribute('id', 'active');
    woodInStash.removeAttribute('id', 'active');
    grassInStash.removeAttribute('id', 'active');
    soilInStash.removeAttribute('id', 'active');
    rockInStash.removeAttribute('id', 'active');
    ironInStash.removeAttribute('id', 'active');
    goldInStash.removeAttribute('id', 'active');
    diamondInStash.removeAttribute('id', 'active');

    const allTiles = document.querySelectorAll('.tile')

    allTiles.forEach(tile => {
            tile.addEventListener('click', (e) => {

                    if ((e.currentTarget.classList.contains('grass')) &&
                            shovelBtn.getAttribute('id') === 'active') {
                                    shovelSound.play()
                            e.currentTarget.classList.remove('grass')
                            e.currentTarget.classList.add('sky')
                            grassInStash.innerHTML = ++resources.grassCount
                    }
                    else if ((e.currentTarget.classList.contains('soil')) &&
                            shovelBtn.getAttribute('id') === 'active') {
                                    shovelSound.play()
                            e.currentTarget.classList.remove('soil')
                            e.currentTarget.classList.add('sky')
                            soilInStash.innerHTML = ++resources.soilCount
                    }
            });
    });
  }

  static pickPAxe() {
    document.body.style.cursor = "url('/assets/images/PickAxe-Cursor.png'), auto"
        pickAxeBtn.setAttribute('id', 'active')

        syringeBtn.removeAttribute('id', 'active')
        axeBtn.removeAttribute('id', 'active')
        shovelBtn.removeAttribute('id', 'active')

        cloudInStash.removeAttribute('id', 'active');
        leavesInStash.removeAttribute('id', 'active');
        strongLeavesInStash.removeAttribute('id', 'active');
        woodInStash.removeAttribute('id', 'active');
        grassInStash.removeAttribute('id', 'active');
        soilInStash.removeAttribute('id', 'active');
        rockInStash.removeAttribute('id', 'active');
        ironInStash.removeAttribute('id', 'active');
        goldInStash.removeAttribute('id', 'active');
        diamondInStash.removeAttribute('id', 'active');

        const allTiles = document.querySelectorAll('.tile')

        allTiles.forEach(tile => {
                tile.addEventListener('click', (e) => {

                        if ((e.currentTarget.classList.contains('rock')) &&
                                pickAxeBtn.getAttribute('id') === 'active') {
                                        pickaxeSound.play()
                                e.currentTarget.classList.remove('rock')
                                e.currentTarget.classList.add('sky')
                                rockInStash.innerHTML = ++resources.rockCount
                        }
                        else if ((e.currentTarget.classList.contains('iron')) &&
                                pickAxeBtn.getAttribute('id') === 'active') {
                                        pickaxeSound.play()
                                e.currentTarget.classList.remove('iron')
                                e.currentTarget.classList.add('sky')
                                ironInStash.innerHTML = ++resources.ironCount
                        }
                        else if ((e.currentTarget.classList.contains('gold')) &&
                                pickAxeBtn.getAttribute('id') === 'active') {
                                        pickaxeSound.play()
                                e.currentTarget.classList.remove('gold')
                                e.currentTarget.classList.add('sky')
                                goldInStash.innerHTML = ++resources.goldCount
                        }
                        else if ((e.currentTarget.classList.contains('diamond')) &&
                                pickAxeBtn.getAttribute('id') === 'active') {
                                        pickaxeSound.play()
                                e.currentTarget.classList.remove('diamond')
                                e.currentTarget.classList.add('sky')
                                diamondInStash.innerHTML = ++resources.diamondCount
                        }
                });
        });
  }

  static pickAxe() {
    document.body.style.cursor = "url('/assets/images/axe-cursor.png'), auto"
        axeBtn.setAttribute('id', 'active')

        syringeBtn.removeAttribute('id', 'active')
        pickAxeBtn.removeAttribute('id', 'active')
        shovelBtn.removeAttribute('id', 'active')

        cloudInStash.removeAttribute('id', 'active');
        leavesInStash.removeAttribute('id', 'active');
        strongLeavesInStash.removeAttribute('id', 'active');
        woodInStash.removeAttribute('id', 'active');
        grassInStash.removeAttribute('id', 'active');
        soilInStash.removeAttribute('id', 'active');
        rockInStash.removeAttribute('id', 'active');
        ironInStash.removeAttribute('id', 'active');
        goldInStash.removeAttribute('id', 'active');
        diamondInStash.removeAttribute('id', 'active');

        const allTiles = document.querySelectorAll('.tile')

        allTiles.forEach(tile => {
                tile.addEventListener('click', (e) => {
                        
                        if ((e.currentTarget.classList.contains('leaves')) &&
                                axeBtn.getAttribute('id') === 'active') {
                                        axeSound.play()
                                e.currentTarget.classList.remove('leaves')
                                e.currentTarget.classList.add('sky')
                                leavesInStash.innerHTML = ++resources.leavesCount
                        }
                        else if ((e.currentTarget.classList.contains('strongLeaves')) &&
                                axeBtn.getAttribute('id') === 'active') {
                                        axeSound.play()
                                e.currentTarget.classList.remove('strongLeaves')
                                e.currentTarget.classList.add('sky')
                                strongLeavesInStash.innerHTML = ++resources.strongLeavesCount
                        }
                        else if ((e.currentTarget.classList.contains('wood')) &&
                                axeBtn.getAttribute('id') === 'active') {
                                        axeSound.play()
                                e.currentTarget.classList.remove('wood')
                                e.currentTarget.classList.add('sky')
                                woodInStash.innerHTML = ++resources.woodCount
                        }
                });
        });
  }

  static pickSyringe() {
   
    document.body.style.cursor = "url('/assets/images/syringe-cursor.png'), auto"
    syringeBtn.setAttribute('id', 'active')

    axeBtn.removeAttribute('id', 'active')
    pickAxeBtn.removeAttribute('id', 'active')
    shovelBtn.removeAttribute('id', 'active')

    cloudInStash.removeAttribute('id', 'active');
    leavesInStash.removeAttribute('id', 'active');
    strongLeavesInStash.removeAttribute('id', 'active');
    woodInStash.removeAttribute('id', 'active');
    grassInStash.removeAttribute('id', 'active');
    soilInStash.removeAttribute('id', 'active');
    rockInStash.removeAttribute('id', 'active');
    ironInStash.removeAttribute('id', 'active');
    goldInStash.removeAttribute('id', 'active');
    diamondInStash.removeAttribute('id', 'active');

    const allTiles = document.querySelectorAll('.tile')

    allTiles.forEach(tile => {
            tile.addEventListener('click', (e) => {
                    
                    if ((e.currentTarget.classList.contains('cloud')) &&
                            syringeBtn.getAttribute('id') === 'active') {
                                    syringeSound.play()
                            e.currentTarget.classList.remove('cloud')
                            e.currentTarget.classList.add('sky')
                            cloudInStash.innerHTML = ++resources.cloudCount
                    }
            });
    });
  }
}
      
      
      








