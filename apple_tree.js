const FruitTree = require('./fruitTree');

class AppleTree extends FruitTree{
    constructor(name,age,height,matureAge,healthyStatus) {
        super(name,age,height,matureAge,healthyStatus);
        this._dieAge = 10;
    }
}

module.exports = AppleTree;
