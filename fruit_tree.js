"use strict"

// release 0

class FruitTree {

  // Initialize a new MangoTree

  constructor() {
    this.umur=0
    this.tinggi=0
    this.status=true
    this.maksUmur=0
    this.name
  //  this.stopTumbuh=stopTumbuh
  }


}

class Fruit {
  // Produce a mango
  constructor(quality) {
    this.quality=quality
  }
}
let fruit_tree = new FruitTree(8,15,8)

   module.exports = {
     FruitTree,
     Fruit
   }
