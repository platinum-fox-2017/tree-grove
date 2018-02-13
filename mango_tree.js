'use strict'

const FruitTree = require('./fruit_tree.js')


// console.log(FruitTree)

// var fruittree = new FruitTree("MangoTree", 3, 1.8, 7,true)

class ManggoTree extends FruitTree {
    constructor(name,age,height,matureAge,healthyStatus) {
        super(name,age,height,matureAge,healthyStatus)
        // this._fruit = Mango
    }
}



module.exports = ManggoTree