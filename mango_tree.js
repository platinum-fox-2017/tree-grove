"use strict"
const FruitTree = require('./fruit_tree')

class MangoTree extends FruitTree {
    constructor(name, age, height, mature, healtyStatus) {
        super(name, age, height, mature, healtyStatus)
    }
}



module.exports = MangoTree