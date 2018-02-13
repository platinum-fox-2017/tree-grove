"use strict"

const fileFruit = require('./fruit_tree.js');
var Fruit = fileFruit.Fruit;
var FruitTree = fileFruit.FruitTree;

class MangoTree extends FruitTree{
  constructor(){
    super()
    this.name='MangoTree'
  }
}
class Mango extends Fruit{
  constructor(quality){
    super(quality)
  }
}

let mangoTree = new MangoTree(10,20,10)



module.exports = {
  MangoTree
}
