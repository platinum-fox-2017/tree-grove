"use strict"

const fileFruit = require('./fruit_tree.js');
var Fruit = fileFruit.Fruit;
var FruitTree = fileFruit.FruitTree;

class AppleTree extends FruitTree{
  constructor(name,umur,tinggi,maksUmur,status){
    super(name,umur,tinggi,maksUmur,status)
  }
}
class Apple extends Fruit{
  constructor(quality){
    super(quality)
    this.color='red'
  }
}

module.exports = {
  AppleTree
}
