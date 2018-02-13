"use strict"

// release 0

class FruitTree {

  // Initialize a new MangoTree
  constructor(name,age,height,mature,health,dead){
    this._kind = name
    this._age = age
    this._height = height
    this._matureaged = mature
    this._fruits = []
    this._healthyStatus = health;
    this._harvested = 0
    this._deadaged = dead
  }


  get age() {
    return this._age
  }

  get height() {
    return this._height

  }

  get fruits() {
    return this._fruits
  }

  get healthyStatus() {
    return this._healthyStatus
  }

  get harvested() {
    return this._harvested
  }


  // Get current states here

  // Grow the tree
  grow() {
      this._age++
      if (this._age < this._deadaged) {
        this._height += Math.floor(Math.random()*50);

      } else if (this._age > this._deadaged) {
        this._healthyStatus = false;
      }
    }

  // Produce some mangoes
  produceFruits() {
    if(this._age>this._matureaged){
      for(let i =0;i<(Math.round(Math.random()*30));i++){
        let buah = new Fruit()
        this._fruits.push(buah)
      }
    }
    return this._fruits
  }

  // Get some fruits
  harvest() {
    let good = 0
    let bad = 0
    for(let i =0;i<this._fruits.length;i++){
      if(this._fruits[i]._quality === 'good'){
        good++
      } else {
        bad++
      }
    }
    this._fruits = [];
    this._harvested = `${good + bad} (${good} good, ${bad} bad)`
    return this;

  }

}

class Fruit {
    constructor() {
      this._quality = this.selektorBuah();
    }
    selektorBuah () {
      let random = Math.random()
      if(random < 0.6){
        return 'good'
      } else {
        return 'bad'
      }
    }
}



module.exports = {FruitTree,Fruit}
