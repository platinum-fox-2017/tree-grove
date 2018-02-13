const Tree = require('./tree.js');

class PearTree extends Tree{
    constructor(name, age, height, matureAge, healthyStatus){
        super(name, age, height, matureAge, healthyStatus);
        this._deadAges = 20;
    }

}

module.exports = PearTree;