"use strict"
const tree = require('./fruit_tree.js')

const FruitTree = tree.FruitTree
const Fruit = tree.Fruit

class AppleTree extends FruitTree{
  constructor(name, age, height, matureAge, healthStat){
    super(name, age, height, matureAge, healthStat)
    this._maxAge = 25
  }
  randomGrowth(){
    return +((Math.round(Math.random()*5))/10).toPrecision(1)
  }
  produceFruits() {
    return Math.round(Math.random()*200)
  }
}
class Apple extends Fruit{
  constructor(){
    super()
  }
}

// driver code untuk release 0

let appleTree = new AppleTree("AppleTree", 4, 1.2, 5,true)
// do {
//   appleTree.grow();
//   appleTree.harvest();
// } while (appleTree._healthy != false)
// console.log(appleTree)

module.exports = {
    AppleTree: AppleTree,
    Apple: Apple
}
