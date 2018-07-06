"use strict"

const FruitTree = require('./fruit_tree.js');


class AppleTree extends FruitTree{

  // Initialize a new AppleTree
  constructor(name, age, height, mature, healthy) {
    super(name, age, height, mature, healthy)
  }

  get name(){
      return this._name
  }
  get age(){
    return this._age
  }
  get height(){
    return this._height
  }
  get mature(){
    return this._mature
  }
  get healthy(){
    return this._healthy
  }
}
 

module.exports = AppleTree