'use strict'

const FruitTree = require('./fruit_tree.js')

class AppleTree extends FruitTree {
    constructor(name,age,height,matureAge,healthyStatus) {
        super(name,age,height,matureAge,healthyStatus)
        // this._fruit = Mango
    }
}



module.exports = AppleTree