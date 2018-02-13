"use strict"
const FruitTree = require('./fruit_tree')
const Fruit = require('./fruit')
const Apple = require('./apple')

class AppleTree extends FruitTree {
  constructor() {
    super()
    this._mature = 5
    this._old = 20
    this._color = ''
  }

  get color() {
    return this._color
  }

  produceFruits() {
    let total = Math.round(Math.random()*30)
    for(let i = 0; i < total; i++) {
      let fruits = new Apple()
      this._fruits.push(fruits)
    }
    return this._fruits
  }

  produceColor() {
    let red = 0
    let green = 0
    for(let i = 0; i < this._fruits.length; i++) {
      if(this._fruits[i].color === 'red') {
        red++;
      } else {
        green++
      }
    }
    
    this._color = `${red} red, ${green} green`
  }
}


module.exports = AppleTree;