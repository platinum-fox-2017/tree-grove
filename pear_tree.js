"use strict"
const FruitTree = require('./fruit_tree')

// release 0

class PearTree extends FruitTree {

  constructor(name,ageTree,heightTree,matureAge,healthy) {
    super(name,ageTree,heightTree,matureAge,healthy)
    this.maxAge = 10

  }

  grow() {
    this.ageTree++
    if(this.age > 1 && this.age < this.maxAge && this.heightTree < this.maxHeight){
      this.heightTree+= Math.floor(Math.random()*60) //cm
    }
    if(this.ageTree >= this.matureAge && this.ageTree < this.maxAge && this.heightTree>60){
      this.produceFruits() 
    } else if(this.ageTree >= this.maxAge){
      this.healthy = false
    }

  }


}


module.exports = PearTree

