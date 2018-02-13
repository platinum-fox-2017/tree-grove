"use strict"

// release 0
const {FruitTree, Fruit} = require('./fruit_tree.js');

class MangoTree extends FruitTree {
  // Initialize a new MangoTree
  constructor(object) {
    super(object)
    this._mature_age = object._mature_age || Math.floor((Math.random() * 10) + 9);
    this._max_health = 15
  }

  produceFruit() {
    let counter =0;
    if(this._age > this._mature_age){
      counter = Math.ceil(Math.random()*15);
    }
    for(let i=0; i<counter; i++){
      let mango = new Mango;
      this._harvest_fruits.push(mango);
    }
    return this;
  }
}


class Mango extends Fruit {
  // Produce a mango
  constructor(age,height,max_fruits,harvested, health) {
    super()
    this._quality = 'BAD';
  }
}

// // driver code untuk release 0
// let mangoTree = new MangoTree()
// console.log(`The Mango Tree is Alive ! SMILE :D`)
// console.log('Maturity age: '+mangoTree._mature_age);
// console.log('Maximum age : '+mangoTree._max_health);
//   do {
//       mangoTree.grow();
//       mangoTree.produceFruit();
//       mangoTree.harvest();
//       console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree._height} | Fruits harvested = ${mangoTree.harvested}`)
//     } while (mangoTree._health != false)
// console.log(`The Mango Tree has met its end. :C`)

// // console.log(mangoTree.age)

module.exports = MangoTree;


