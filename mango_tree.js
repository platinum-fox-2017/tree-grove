const Tree = require('./tree.js');

class MangoTree extends Tree{
    constructor(name, age, height, matureAge, healthyStatus){
        super(name, age, height, matureAge, healthyStatus);
        this._deadAges = 15;
    }
}

module.exports = MangoTree;