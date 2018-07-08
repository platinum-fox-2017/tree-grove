"use strict"

const fileFruit = require('./fruit_tree.js');
var Fruit = fileFruit.Fruit;
var FruitTree = fileFruit.FruitTree;

class MangoTree extends FruitTree{
  constructor(name,umur,tinggi,maksUmur,status){
    super(name,umur,tinggi,maksUmur,status)
  }
}
class Mango extends Fruit{
  constructor(quality){
    super(quality)
  }
}

module.exports = {
  MangoTree
}
