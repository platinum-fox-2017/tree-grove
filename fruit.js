"use strict"

class Fruit {
  constructor() {
    this.quality = this.quality_check()
  }

  quality_check() {
    let value = Math.round(Math.random()*5)
    if(value < 3) {
      return `bad`
    } else {
      return `good`
    }
  }
}

module.exports = Fruit;