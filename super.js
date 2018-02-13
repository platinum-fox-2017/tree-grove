class FruitTree {
    constructor(name,age,height,matureAge,status,maxFruits) {
      this._name = name
      this._age = age
      this._height = height
      this._harvest = 0
      this._healthyStatus = status
      this._maxAge = matureAge
      this._maxFruits = maxFruits
      this._fruits = []
      this._totalFruits = 0
      this._badfruit = 0
      this._goodfruit = 0

    }

    get name(){
      return this._name
    }
  
    get age() {
      return this._age
    }
  
    get height() {
      return this._height
    }
  
    get fruits() {
      return this._fruits
    }
  
    get healthyStatus() {
      return this._healthyStatus
    }
  
    get harvested() {
      return this._harvest
    }
  
    get maxFruits(){
      return this._maxFruits
    }
  
    // Grow the tree
    grow() {
      this._age++
      if(this.age < this._maxAge){
        let growHeight = Math.random()*2
        this._height += growHeight
        
      }else if(this.age > this._maxAge){
        this._healthyStatus = false
      }
    }
  
    // Produce some mangoes
    produce() {
      let produce = Math.ceil(Math.random() * this.maxFruits)
      
      for(let i = 0; i < produce; i++){
        this.fruits.push(new Fruit())
      }
      return this
    }
  
    // Get some fruits
    harverst() {
      let badFruit = 0
      let goodFruit = 0
      for(let [index,value] of this.fruits.entries()){
        if(value.status === 2){
          badFruit++
          this._badfruit++
        }else{
          goodFruit++
          this._goodfruit++
        }
      }
      let total = badFruit + goodFruit

      // this._totalFruits = total
      this._harvest = `${total} (${goodFruit} good, ${badFruit} bad)`
    }
  }

  class Fruit {
    // Produce a mango
    constructor() {
      this.status = Math.ceil(Math.random()*2)
    }
  }

  module.exports = {FruitTree, Fruit}