const {FruitTree,Fruit} = require('./fruit_tree.js')


class PearTree extends FruitTree{
  constructor(name,age,height,mature,health,dead){
    super(name,age,height,mature,health,dead)
  }
}
class Pear extends Fruit{
  constructor(){
    super()
  }
}

// let pearTree = new PearTree('PearTree',0,0,3,true,25)
// console.log('LETS HARVEST SOME PEAR')
// do {
//    pearTree.grow();
//    pearTree.produceFruits();
//    // console.log(pearTree._fruits)
//    pearTree.harvest();
//    console.log(`[Year ${pearTree._age} Report] Height = ${pearTree._height/100} m | Fruits harvested = ${pearTree._harvested}`)
//  } while (pearTree._healthyStatus != false)

module.exports = {PearTree,Pear}
