let tree_gen = require('./fruit_tree.js')

class PearTree extends tree_gen.FruitTree {
  constructor(treeName, age, height, growAge, healthy) {
    super(treeName, age, height, growAge, healthy)
    this.base_fruit_production = 15
    this.death_age = 20
  }
}

class PearFruit extends tree_gen.Fruit {
  constructor(healthy, treeName) {
    super(healthy, treeName)
    this.fruit_weight_average = 150
    this.fruit_weight_delta   = 50
  }
}

module.exports = {
  PearTree : PearTree,
  PearFruit : PearFruit
}
