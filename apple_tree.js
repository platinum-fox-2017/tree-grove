const {FruitTree,Fruit} = require('./fruit_tree.js')


class AppleTree extends FruitTree{
  constructor(name,age,height,mature,health,dead){
    super(name,age,height,mature,health,dead)
  }
}
class Apple extends Fruit{
  constructor(){
    super()
  }
}

// let appleTree = new AppleTree('AppleTree',0,0,4,true,34)
// console.log('LETS HARVEST SOME APPLE')
// do {
//    appleTree.grow();
//    appleTree.produceFruits();
//    appleTree.harvest();
//    console.log(`[Year ${appleTree._age} Report] Height = ${appleTree._height/100} m | Fruits harvested = ${appleTree._harvested}`)
//  } while (appleTree._healthyStatus != false)


module.exports = {AppleTree,Apple}
