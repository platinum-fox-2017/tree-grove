"use strict"

const fileFruit = require('./fruit_tree.js');
var Fruit = fileFruit.Fruit;
var FruitTree = fileFruit.FruitTree;

class AppleTree extends FruitTree{
  constructor(){
    super()
    this.name='AppleTree'
  }
}
class Apple extends Fruit{
  constructor(quality){
    super(quality)
    this.color='red'
  }
}

let appleTree = new AppleTree(8,15,8)


module.exports = {
  AppleTree
}
