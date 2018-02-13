"use strict"


// release 0

class Tree {
  constructor() {
    this._age = 0
    this._height = 0
    this._fruits = []
    this._harvested = ''
    this._healthyStatus = true
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

  get healtyStatus() {
    return this._healthyStatus
  }

  get harvested() {
    return this._harvested
  }

  grow() {
    this._age++
    this._height += Math.floor(Math.random() *10)
    if (this._age > 9) {
    this._healthyStatus = false
    }
    return this
  }

  // Produce some mangoes
  produceMangoes() {
    let buah = 0
    buah += Math.floor(Math.random() * 10)
    for (var i = 0; i < buah; i++) {
      let fruit = new Fruit
      this._fruits.push(fruit)
    }
  }

  // Get some fruits
  harvest() {
    let good = 0
    let bad = 0
    let panen = this._fruits
    for (var i = 0; i < panen.length; i++) {
      if (panen[i].quality === 'good') {
        good++
      }
      else {
        bad++
      }
    }
    return `${good + bad} ${good} good ${bad} bad`
  }
}

class Fruit {
  constructor() {
    this.quality = this.quality()
  }
  quality(){
    let random = Math.random() *10
    if (random < 3) {
      return 'good'
    }
    else {
      return 'bad'
    }
  }
}


let tree = new Tree
tree.produceMangoes()


module.exports = Tree
