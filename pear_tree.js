const FruitTree = require('./fruit_tree');


class PearTree extends FruitTree{
    constructor(age,height,matureAge,healthyStatus){
        super();
        this._age = age;
        this._heigth = height;
        this._matureAge = matureAge;
        this._healthyStatus = healthyStatus;
        this._stopProduceAge = 17;
        this._stopGrowAge = 13;
        this._dieAge = 20;
    }
}

module.exports = PearTree;
