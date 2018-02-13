
class FruitTree {
  // Initialize a new Tree
  constructor(treeName, age, height, growAge, healthy) {
    this.tree_name = treeName
    this.alive = true
    this.healthy = healthy || true
    this.tree_age = age || 0
    this.tree_height = height || 0
    this.tree_grow_rate = 1
    this.base_fruit_production = 5
    this.fruits_bloomed = 0
    this.fruits_harvested = []
    this.goodFruit = 0
    this.badFruit = 0
    this.death_age = 20
    this.growing_age = growAge || 5
  }

  get aliveStatus(){
    return this.alive
  }

  get age() {
    return this.tree_age
  }

  get height() {
    return this.tree_height
  }

  get fruits() {
    return this.fruits_bloomed
  }

  get healthyStatus() {
    return this.healthy
  }

  get harvested() {
    return this.fruits_harvested
  }

  rng(input){
    if (!input) {
      input = 1
    }
    let rng = Math.round(Math.random()*input)
    return rng
  }

  grow() {
    if (this.tree_age === 0) {
      console.log(`The ${this.tree_name} Tree is alive! :smile:`);
    }
    // if age above 5 start bearing fruits
    if (this.tree_age >= this.death_age) {
      this.healthy = false
      this.alive = false
      return console.log(`The ${this.tree_name} tree has withered!`)
    }
    if (this.tree_age <= this.growing_age+7) {
      this.tree_height += this.rng(this.tree_grow_rate)
    }
    let healthCheck = 100 - this.tree_age
    let healthNow = this.rng(100)
    if (healthNow > healthCheck) {
      this.healthy = false
    } else {
      this.healthy = true
    }
    this.tree_age += 1
    return this
  }

  produceFruit() {
    if (this.tree_age >= this.growing_age) {
      if (this.healthy) {
        this.fruits_bloomed = this.base_fruit_production + this.rng(4)
      } else {
        this.fruits_bloomed = this.base_fruit_production + this.rng(10)
      }
    }
    return this
  }

  harvest() {
    let basket = []
    this.goodFruit = 0
    this.badFruit = 0
    for (let i = 0; i < this.fruits_bloomed; i++) {
      let newfruit = new Fruit(this.healthy, this.tree_name)
      if (newfruit.quality === 'bad') {
        this.badFruit += 1
      } else {
        this.goodFruit += 1
      }
      basket.push(newfruit)
    }
    let harvestAmount = basket.length
    this.fruits_harvested = basket
    this.fruits_bloomed = 0

    return this
  }

}

class Fruit {
  // Produce a fruit
  constructor(healthy, treeName) {
    this.quality = this.quality_of_fruit(healthy)
    this.name = treeName + ' fruit'
    this.fruit_weight_average = 120
    this.fruit_weight_delta = 50
    this.weight = this.fruit_size() || this.fruit_weight_average
  }

  quality_of_fruit(healthy){
    let rng = Math.round(Math.random()*100)
    let threshold = 0
    if (this.healthy === true) {
      threshold = 25
    } else {
      threshold = 45
    }
    if (rng < threshold) {
      return 'bad'
    } else {
      return 'good'
    }
  }

  rng(input){
    if (!input) {
      input = 1
    }
    let rng = Math.round(Math.random()*input)
    return rng
  }

  fruit_size(){
    let size = this.fruit_weight_average + this.rng(this.fruit_weight_delta)
    return size
  }
}

module.exports = {
  FruitTree : FruitTree,
  Fruit : Fruit
}
