const Tree = require('./tree.js');

class AppleTree extends Tree{
    constructor(name, age, height, matureAge, healthyStatus){
        super(name, age, height, matureAge, healthyStatus);
        this._deadAges = 10;
    }
}

module.exports = AppleTree;