"use strict"
const tree = require('./fruit_tree.js')

const FruitTree = tree.FruitTree
const Fruit = tree.Fruit

class MangoTree extends FruitTree{
    // Initialize a new MangoTree
    constructor(treeName, age, height, matureAge, healthStat) {
        super(treeName, age, height, matureAge, healthStat)
        this._maxAge = 20
    }
  }
  
  class Mango extends Fruit{
    // Produce a mango
    constructor() {
    super()
    }
    
  }

let mangoTree = new MangoTree()
// do {
//     mangoTree.grow();
//     mangoTree.harvest();
// } while (mangoTree.healtyStatus != false)

module.exports = {
    MangoTree: MangoTree,
    Mango: Mango
}