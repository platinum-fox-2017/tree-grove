const {FruitTree,Fruit} = require('./super')

class AppleTree extends FruitTree{
    constructor(name,age,height,matureAge,status,maxFruits = 4){
        super(name,age,height,matureAge,status,maxFruits)
    }
}

class Apple extends Fruit{
    constructor(){
        super()
    }
}

module.exports = {AppleTree,Apple}