"use strict"

class FruitTree {
  constructor(name, age, height, mature, healtyStatus) {
    this._name = name
    this._age = age
    this._height = height
    this._mature = mature
    this._healtyStatus = healtyStatus
    this._maxAge = 15 
    this._fruits = []
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

  get healtyStatus() {
    return this._healtyStatus
  }

  get harvested() {
    return this._harvested

  }

  grow() {
    this._age++
    if(this._age < 15){
      this._height+=Math.round(Math.random()*30)
    }
    if(this._age>=this._mature && this._age<=this._maxAge){
      this.produceFruits()
    }else if(this._age>this._maxAge){
      this._healtyStatus = false     
    }
  }

  produceFruits() {
    let random = Math.floor(Math.random()*20)
    for(let i = 0; i<random; i++){
      let fruit = new Fruit()
      this._fruits.push(fruit)
    }
    return this._fruits
  }

  harvest() {
    let countGood = 0
    let countBad = 0
    for(let i = 0; i<this._fruits.length; i++){
      if(this._fruits[i].quality === 'good'){
        countGood++
      }else{
        countBad++
      }
    }
    this._fruits.length=0
    this._harvested = `${countGood+countBad} (${countGood} good, ${countBad} bad)`
    return this._harvested
  }
}

class Fruit {
  constructor() {
    this.quality = this.checkQuality()
  }
  checkQuality(){
    let random = Math.floor(Math.random()*10)
    if(random>3){
      this.quality = 'good'
    }else{
      this.quality = 'bad'
    }
    return this.quality
  }
}

module.exports = FruitTree

