const FruitTree = require('./fruit_tree');

class AppleTree extends FruitTree{
    constructor(age,height,matureAge,healthyStatus){
        super();
        this._age = age;
        this._heigth = height;
        this._matureAge = matureAge;
        this._healthyStatus = healthyStatus;
        this._stopProduceAge = 15;
        this._stopGrowAge = 14;
        this._dieAge = 18;
    }
}

module.exports = AppleTree;
