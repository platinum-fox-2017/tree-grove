"use strict"


class FruitTree {

  constructor(name, age, height, mature, healthy) {
    this._name = name
    this._age = age
    this._height = height
    this._mature = mature
    this._healthy = healthy

    this._fruitMax = 10
    this._fruits = []
    this._harvested = 0
    this._maxHeightGrow = 10
  }

  get age() {
    return this._age
  }

  get height() {
    return this._height.toFixed(1)
  }

  get fruits() {
    return this._fruits.join(',')
  }

  get healthyStatus() {
    this.status = this._age <= this._mature
    return this.status
  }

  get harvested() {
    return this._harvested
  }


  // Get current states here

  // Grow the tree
  grow() {
    this._age++
    if(this._age <= this._maxHeightGrow){
      this._height += Math.random()*10
    }
  }

  // Produce some fruits
  produceFruits() {
    let count = Math.floor(Math.random()*this._fruitMax)
    for (let i = 0; i < count; i++) {
      this._fruits.push(new Fruit())
    }
    return this._fruits
  }

  // Get some fruits
  harvest() {
    let fruitsCount = this._fruits.length
    let fruitsQuality = {
      good: 0,
      bad: 0
    }

    while (this._fruits.length > 0) {
      if (this._fruits[0]._quality === 'good')
        fruitsQuality.good++
      else
      {
        fruitsQuality.bad++
      }
      this._fruits.shift()
    }
    return this._harvested = `${fruitsCount} (${fruitsQuality.good} good, ${fruitsQuality.bad} bad)`
  }
}

class Fruit {
  // Produce a fruits
  constructor() {
    this._quality = Math.floor(Math.random()*2) ? 'good' : 'bad'
  }

}

module.exports = FruitTree