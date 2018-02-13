const FruitTree = require('./fruit_tree.js')
const  Mango = require('./mango.js')

class MangoTree extends FruitTree {
  constructor(age,height,fruits,harvest,healtyStatus) {
    super(age,height,fruits,harvest,healtyStatus)
  }

  grow() {
    this._age ++
    this._height += Math.floor(Math.random()*4)
    if(this._age > 19){
      this._healthStatus = false
    }
  }

  // Produce some mangoes
  produceMangoes() {
    let fruits = Math.round(Math.random()*15)
    if(this._age > 3){
      for(let i = 0 ; i < fruits ; i++){
        let mango = new Mango()
        this._fruits.push(mango)
      }
    }
    return this._fruits
  }

  // Get some fruits
  harvest(){
    let bad = 0
    let good = 0
    for(let i = 0 ; i < this._fruits.length ; i++){
      if(this._fruits[i].quality === 'good'){
        good++
      }else{
        bad++
      }
    }
    this._harvest = `(${good} good , ${bad} bad)`
    return this._harvest
  }
}

module.exports = MangoTree
