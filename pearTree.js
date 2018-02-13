const {FruitTree,Fruit} = require('./super')

class PearTree extends FruitTree{
    constructor(name,age,height,matureAge,status,maxFruits = 5){
        super(name,age,height,matureAge,status,maxFruits)
    }
}

class Pear extends Fruit{
    constructor(){
        super()
    }
}

module.exports = {PearTree,Pear}