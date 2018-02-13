"use strict"

// Release 2
class FruitTree {
  constructor(treeName, age, height, matureAge, healthStat) {
    this._name = treeName || 'Fruits'
    this._age = age || 0
    this._height = height || 0
    this._matureAge = matureAge || 20
    this._healthy = healthStat || true
  }
  get age() {
    return this._age
  }
  get height() {
    return this._height
  }
  get healtyStatus() {
    return this._healthy
  }
  get harvested() {
    return this._quantity.length
  }
  randomGrowth(){
    return +((Math.round(Math.random()*15))/10).toPrecision(1)
  }
  // Grow the tree
  grow() {
    if (this._age == this._maxAge){
      console.log('The tree has met its end. :sad:')
      return this._healthy = false
    }
    this._age++
    if (this._age < 12 || this._height <= this._maxHeight){
      this._height += this.randomGrowth()
    }
    // 3. pohon dapat berbuah ketika sudah mencapai mature age
    if (this._age > 5){
      let harvess = this.harvest()
      console.log(`[Year ${this._age} Report] Height = ${this._height} | ${this.name} harvested = ${this.harvested} (${harvess[0]} good, ${harvess[1]} bad)`)
    } else {
      console.log(`[Year ${this._age} Report] Height = ${this._height} | ${this.name} harvested = 0 (0 good, 0 bad)`)
    }
    this._quantity = []
  }
   // Produce some mangoes
  produceFruits() {
    return Math.round(Math.random()*20)
  }

  // Get some fruits
  harvest() {
    let fruit = new Fruit()
    let good = 0
    let bad = 0
    for(let i = 0; i < this.produceFruits(); i++){
      this._quantity.push(fruit.quality())
    }

    for (let j = 0; j < this._quantity.length; j++){
      (this._quantity[j] == 1)? good++ : bad++
    }
    return [good, bad]
  }
}

class Fruit {
  constructor() {
  }
  quality(){
    return Math.round(Math.random())
  }
}

// driver code untuk release 0

module.exports = {
    FruitTree: FruitTree,
    Fruit: Fruit
}
