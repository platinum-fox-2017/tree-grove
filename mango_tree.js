let tree_gen = require('./fruit_tree.js')

class MangoTree extends tree_gen.FruitTree {
  constructor(treeName, age, height, growAge, healthy) {
    super(treeName, age, height, growAge, healthy)
    this.base_fruit_production = 8
    this.death_age = 50
  }
}

class MangoFruit extends tree_gen.Fruit {
  constructor(healthy, treeName) {
    super(healthy, treeName)
    this.fruit_weight_average = 500
    this.fruit_weight_delta   = 100
  }
}

module.exports = {
  MangoTree : MangoTree,
  MangoFruit : MangoFruit
}
