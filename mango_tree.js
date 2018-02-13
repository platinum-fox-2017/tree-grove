const {FruitTree,Fruit} = require('./fruit_tree.js')

class MangoTree extends FruitTree{
  constructor(name,age,height,mature,health,dead){
    super(name,age,height,mature,health,dead)
  }
}
class Mango extends Fruit{
  constructor(){
    super()
  }
}

// let mangoTree = new MangoTree('MangoTree',0,0,3,true,50)
// console.log('LETS HARVEST SOME MANGO')
// do {
//    mangoTree.grow();
//    mangoTree.produceFruits();
//    mangoTree.harvest();
//    console.log(`[Year ${mangoTree._age} Report] Height = ${mangoTree._height/100} m | Fruits harvested = ${mangoTree._harvested}`)
//  } while (mangoTree._healthyStatus != false)

module.exports = {MangoTree,Mango}
