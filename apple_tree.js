const FruitTree = require('./fruit_tree')

class AppleTree extends FruitTree {
    // Initialize a new AppleTree
    constructor(name, age, height, mature, healtyStatus) {
        super(name, age, height, mature, healtyStatus)
    }
}

module.exports = AppleTree
