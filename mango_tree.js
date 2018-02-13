"use strict"
const FruitTree = require('./fruit_tree')
const Fruit = require('./fruit')
// console.log(fruitTree)

class MangoTree extends FruitTree {
  constructor() {
    super()
    this._mature = 7
    this._old = 17
  }
}

// console.log(FruitTree)
// let mango_tree = new MangoTree()
// console.log(mango_tree)
module.exports = MangoTree;