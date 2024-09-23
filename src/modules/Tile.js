import {  cloudInStash, diamondInStash, goldInStash, grassInStash, ironInStash, leavesInStash,  rockInStash,  soilInStash, strongLeavesInStash,  woodInStash, toolsAndTilesElements } from "../models/Constants.js"
import { axeSound, pickaxeSound, shovelSound, syringeSound } from "../models/Sounds.js"

import { resources } from "./Player.js"

export class Tile {
    static pickCloud() {
        document.body.style.cursor = 'cell'

        toolsAndTilesElements.forEach(element => {
            if (element !== cloudInStash) {
                element.removeAttribute('id', 'active')
                cloudInStash.setAttribute('id', 'active')
            }
        });

        const allTiles = document.querySelectorAll('.tile')

        allTiles.forEach(tile => {
            tile.addEventListener('click', (e) => {
                if (e.currentTarget.classList.contains('sky') && (cloudInStash.innerHTML > 0) && (cloudInStash.getAttribute('id') === 'active')) {
                    syringeSound.play()
                    cloudInStash.innerHTML = --resources.cloudCount
                    e.currentTarget.classList.remove('sky')
                    e.currentTarget.classList.add('cloud')
                }
            })
        })
    }

    static pickLeaves() {
        document.body.style.cursor = 'cell'

        toolsAndTilesElements.forEach(element => {
            if (element !== leavesInStash) {
                element.removeAttribute('id', 'active')
                leavesInStash.setAttribute('id', 'active')
            }
        });

        const allTiles = document.querySelectorAll('.tile')

        allTiles.forEach(tile => {
            tile.addEventListener('click', (e) => {
                if (e.currentTarget.classList.contains('sky') && (leavesInStash.innerHTML > 0) && (leavesInStash.getAttribute('id') === 'active')) {
                    axeSound.play()
                    leavesInStash.innerHTML = --resources.leavesCount
                    e.currentTarget.classList.remove('sky')
                    e.currentTarget.classList.add('leaves')
                }
            })
        })
    }

    static pickStrongLeaves() {
        document.body.style.cursor = 'cell'

        toolsAndTilesElements.forEach(element => {
            if (element !== strongLeavesInStash) {
                element.removeAttribute('id', 'active')
                strongLeavesInStash.setAttribute('id', 'active')
            }
        });

        const allTiles = document.querySelectorAll('.tile')

        allTiles.forEach(tile => {
            tile.addEventListener('click', (e) => {
                if (e.currentTarget.classList.contains('sky') && (strongLeavesInStash.innerHTML > 0) && (strongLeavesInStash.getAttribute('id') === 'active')) {
                    axeSound.play()
                    strongLeavesInStash.innerHTML = --resources.strongLeavesCount
                    e.currentTarget.classList.remove('sky')
                    e.currentTarget.classList.add('strongLeaves')
                }
            })
        })
    }

    static pickWood() {
        document.body.style.cursor = 'cell'

        toolsAndTilesElements.forEach(element => {
            if (element !== woodInStash) {
                element.removeAttribute('id', 'active')
                woodInStash.setAttribute('id', 'active')
            }
        });

        const allTiles = document.querySelectorAll('.tile')

        allTiles.forEach(tile => {
            tile.addEventListener('click', (e) => {
                if (e.currentTarget.classList.contains('sky') && (woodInStash.innerHTML > 0) && (woodInStash.getAttribute('id') === 'active')) {
                    axeSound.play()
                    woodInStash.innerHTML = --resources.woodCount
                    e.currentTarget.classList.remove('sky')
                    e.currentTarget.classList.add('wood')
                }
            })
        })
    }

    static pickGrass() {
        document.body.style.cursor = 'cell'

        toolsAndTilesElements.forEach(element => {
            if (element !== grassInStash) {
                element.removeAttribute('id', 'active')
                grassInStash.setAttribute('id', 'active')
            }
        });

        const allTiles = document.querySelectorAll('.tile')

        allTiles.forEach(tile => {
            tile.addEventListener('click', (e) => {
                if (e.currentTarget.classList.contains('sky') && (grassInStash.innerHTML > 0) && (grassInStash.getAttribute('id') === 'active')) {
                    shovelSound.play()
                    grassInStash.innerHTML = --resources.grassCount
                    e.currentTarget.classList.remove('sky')
                    e.currentTarget.classList.add('grass')
                }
            })
        })
    }

    static pickRock() {
        document.body.style.cursor = 'cell'

        toolsAndTilesElements.forEach(element => {
            if (element !== rockInStash) {
                element.removeAttribute('id', 'active')
                rockInStash.setAttribute('id', 'active')
            }
        });

        const allTiles = document.querySelectorAll('.tile')

        allTiles.forEach(tile => {
            tile.addEventListener('click', (e) => {
                if (e.currentTarget.classList.contains('sky') && (rockInStash.innerHTML > 0) && (rockInStash.getAttribute('id') === 'active')) {
                    pickaxeSound.play()
                    rockInStash.innerHTML = --resources.rockCount
                    e.currentTarget.classList.remove('sky')
                    e.currentTarget.classList.add('rock')
                }
            })
        })
    }

    static pickSoil() {
        document.body.style.cursor = 'cell'

        toolsAndTilesElements.forEach(element => {
            if (element !== soilInStash) {
                element.removeAttribute('id', 'active')
                soilInStash.setAttribute('id', 'active')
            }
        });

        const allTiles = document.querySelectorAll('.tile')

        allTiles.forEach(tile => {
            tile.addEventListener('click', (e) => {
                if (e.currentTarget.classList.contains('sky') && (soilInStash.innerHTML > 0) && (soilInStash.getAttribute('id') === 'active')) {
                    shovelSound.play()
                    soilInStash.innerHTML = --resources.soilCount
                    e.currentTarget.classList.remove('sky')
                    e.currentTarget.classList.add('soil')
                }
            })
        })
    }

    static pickIron() {
        document.body.style.cursor = 'cell'

        toolsAndTilesElements.forEach(element => {
            if (element !== ironInStash) {
                element.removeAttribute('id', 'active')
                ironInStash.setAttribute('id', 'active')
            }
        });

        const allTiles = document.querySelectorAll('.tile')

        allTiles.forEach(tile => {
            tile.addEventListener('click', (e) => {
                if (e.currentTarget.classList.contains('sky') && (ironInStash.innerHTML > 0) && (ironInStash.getAttribute('id') === 'active')) {
                    pickaxeSound.play()
                    ironInStash.innerHTML = --resources.ironCount
                    e.currentTarget.classList.remove('sky')
                    e.currentTarget.classList.add('iron')
                }
            })
        })
    }

    static pickGold() {
        document.body.style.cursor = 'cell'

        toolsAndTilesElements.forEach(element => {
            if (element !== goldInStash) {
                element.removeAttribute('id', 'active')
                goldInStash.setAttribute('id', 'active')
            }
        });

        const allTiles = document.querySelectorAll('.tile')

        allTiles.forEach(tile => {
            tile.addEventListener('click', (e) => {
                if (e.currentTarget.classList.contains('sky') && (goldInStash.innerHTML > 0) && (goldInStash.getAttribute('id') === 'active')) {
                    pickaxeSound.play()
                    goldInStash.innerHTML = --resources.goldCount
                    e.currentTarget.classList.remove('sky')
                    e.currentTarget.classList.add('gold')
                }
            })
        })
    }

    static pickDiamond() {
        document.body.style.cursor = 'cell'

        toolsAndTilesElements.forEach(element => {
            if (element !== diamondInStash) {
                element.removeAttribute('id', 'active')
                diamondInStash.setAttribute('id', 'active')
            }
        });

        const allTiles = document.querySelectorAll('.tile')

        allTiles.forEach(tile => {
            tile.addEventListener('click', (e) => {
                if (e.currentTarget.classList.contains('sky') && (diamondInStash.innerHTML > 0) && (diamondInStash.getAttribute('id') === 'active')) {
                    pickaxeSound.play()
                    diamondInStash.innerHTML = --resources.diamondCount
                    e.currentTarget.classList.remove('sky')
                    e.currentTarget.classList.add('diamond')
                }
            })
        })
    }
}

