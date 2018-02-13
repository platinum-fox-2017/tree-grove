// "use strict"
const FruitTree = require('./fruit_tree')
const Fruit = require('./fruit')

class Apple extends Fruit {
  constructor() {
    super()
    this.color = this.color()
  }

  color() {
    let value = Math.round(Math.random()*5)
    if(value < 3) {
      return `green`
    } else {
      return `red`
    }
  }
}

module.exports = Apple;