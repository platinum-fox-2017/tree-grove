const FruitTree = require('./fruit_tree');

class MangoTree extends FruitTree{
    constructor(age,height,matureAge,healthyStatus){
        super();
        this._age = age;
        this._heigth = height;
        this._matureAge = matureAge;
        this._healthyStatus = healthyStatus;
        this._stopProduceAge = 20;
        this._stopGrowAge = 15;
        this._dieAge = 22;
    }
}

module.exports = MangoTree;
