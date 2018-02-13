const {FruitTree,Fruit} = require('./super')

class MangoTree extends FruitTree{
    constructor(name,age,height,matureAge,status,maxFruits = 10){
        super(name,age,height,matureAge,status,maxFruits)
    }
}

class Mango extends Fruit{
    constructor(){
        super()
    }
}

module.exports = {MangoTree,Mango}