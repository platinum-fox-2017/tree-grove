const FruitTree = require('./fruit_tree')

class AppleTree extends FruitTree {
    constructor(name,ageTree,heightTree,matureAge,healthy) {
      super(name,ageTree,heightTree,matureAge,healthy)
      this.maxAge = 9
    }
  
    grow() {
      this.ageTree++
      if(this.age > 1 && this.age < this.maxAge && this.heightTree < this.maxHeight){
        this.heightTree += Math.floor(Math.random()*80) //cm
      }
      if(this.ageTree >= this.matureAge && this.ageTree < this.maxAge && this.heightTree>80){
        // console.log(this.matureAge,'mature',this.maxAge,'max age')
        this.produceFruits() 
      } else if(this.ageTree >= this.maxAge){
        this.healthy = false
      }
  
    }
  
}


module.exports = AppleTree