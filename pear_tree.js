"use strict"
const tree = require('./fruit_tree.js')

const FruitTree = tree.FruitTree
const Fruit = tree.Fruit

class PearTree extends FruitTree{
  constructor(treeName, age, height, matureAge, healthStat){
    super(treeName, age, height, matureAge, healthStat)
    this._maxAge = 30
    // this.name = name || 'Pears'
    // this._maxAge = 15
    // this._maxHeight = 4
  }
  randomGrowth(){
    return +((Math.round(Math.random()*3))/10).toPrecision(1)
  }
  produceFruits() {
    return Math.round(Math.random()*80)
  }
}
class Pear extends Fruit{
  constructor(){
    super()
  }
}

// driver code untuk release 0

let pearTree = new PearTree()
// do {
//   pearTree.grow();
//   pearTree.harvest();
// } while (pearTree._healthy != false)

module.exports = {
    PearTree: PearTree,
    Pear: Pear
}
