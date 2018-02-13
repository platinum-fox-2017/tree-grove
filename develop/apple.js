let tree_gen = require('./fruit_tree.js')

class AppleTree extends tree_gen.FruitTree {
  constructor(treeName, age, height, growAge, healthy) {
    super(treeName, age, height, growAge, healthy)
    this.base_fruit_production = 10
    this.death_age = 70
  }
}

class AppleFruit extends tree_gen.Fruit {
  constructor(healthy, treeName) {
    super(healthy, treeName)
    this.fruit_weight_average = 100
    this.fruit_weight_delta   = 20
  }
}

module.exports = {
  AppleTree : AppleTree,
  AppleFruit : AppleFruit
}
