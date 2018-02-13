const FruitTree = require('./fruitTree');

class PearTree extends FruitTree{
    constructor(name,age,height,matureAge,healthyStatus) {
        super(name,age,height,matureAge,healthyStatus);
        this._dieAge = 15;
    }
}

module.exports = PearTree;
