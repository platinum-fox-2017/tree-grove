const FruitTree = require('./fruitTree');

class MangoTree extends FruitTree{
    constructor(name,age,height,matureAge,healthyStatus) {
        super(name,age,height,matureAge,healthyStatus);
        this._dieAge = 20;
    }
}

module.exports = MangoTree;
