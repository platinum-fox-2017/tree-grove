"use strict"

const fileFruit = require('./fruit_tree.js');
var Fruit = fileFruit.Fruit;
var FruitTree = fileFruit.FruitTree;

class PearTree extends FruitTree{
  constructor(){
    super()
    this.name='PearTree'
  }
}
class Pear extends Fruit{
  constructor(quality){
    super(quality)
    this.color='red'
  }
}

let pearTree = new PearTree(8,15,8)


module.exports = {
  PearTree
}
