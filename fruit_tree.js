"use strict"

// release 0

class FruitTree {

  // Initialize a new MangoTree

  constructor(name,umur,tinggi,maksUmur,status) {
    this.name=name
    this.umur=umur
    this.tinggi=tinggi
    this.maksUmur=maksUmur
    this.status=status
  }


}

class Fruit {
  // Produce a mango
  constructor(quality) {
    this.quality=quality
  }
}
//let fruit_tree = new FruitTree(8,15,8)

   module.exports = {
     FruitTree,
     Fruit
   }
