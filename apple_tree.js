'use strict'

const Tree = require('./fruit-tree');

class AppleTree extends Tree {

  // Initialize a new MangoTree
  constructor(name, age, height, matureAge, healthyStatus) {
    super(name, age, height, matureAge, healthyStatus)
  }

}

let appleTree = new AppleTree()
// console.log(mangoTree.produceMangoes());
// console.log(`The Tree is Alive!! :)`);
//  do {
//    appleTree.grow();
//    appleTree.produceFruits();
//    appleTree.harvest();
//    console.log(`[Year ${appleTree._age} Report] Height = ${appleTree._height} | Fruits harvested = ${appleTree._harvested}`)
//  } while (appleTree._healthyStatus != false)
//  console.log(`Good Bye Tree, thank you for your fruits... :sad:`);
//  console.log(`====================================================`);
module.exports = AppleTree
