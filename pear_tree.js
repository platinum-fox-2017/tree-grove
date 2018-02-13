"use strict"

const fileFruit = require('./fruit_tree.js');
var Fruit = fileFruit.Fruit;
var FruitTree = fileFruit.FruitTree;

class PearTree extends FruitTree{
  constructor(name,umur,tinggi,maksUmur,status){
    super(name,umur,tinggi,maksUmur,status)
    this.name='PearTree'
  }
}
class Pear extends Fruit{
  constructor(quality){
    super(quality)
    this.color='red'
  }
}



module.exports = {
  PearTree
}
