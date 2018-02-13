const apple = require('./apple.js')
const mango = require('./mango.js')
const pear  = require('./pear.js' )

class TreeGrove {
  constructor() {
    this._trees = []
    this._all_tree_age = []
    this._dead_trees = []
    this._mature_trees = []
  }

  inputTree(newTree){
    this._trees.push(newTree)
  }

  get show_ages(){
    return this._all_tree_age
  }

  get show_trees(){
    return this._trees
  }

  get show_mature_trees(){
    // return all trees
    return this._mature_trees
  }

  get dead_trees(){
    // return all dead trees
    return this._dead_trees
  }

// #####################
  nextYear(){
    // advance year of trees.
    // if there is 1 or more tree,
      // loop through trees,
        // activade their grow()
        // check new is alive status
        // if dead move tree to dead_trees
    // else return grove is_empty= true.
    if (this._trees.length > 0) {
      for (let i = 0; i < this._trees.length; i++) {
        this._trees[i].grow()
        if (this._trees.alive !== false) {
          this._trees[i].produceFruit().harvest()
        }
      }
    }

    // check status of trees
    let allAges = []
    let deadTrees = []
    let matureTrees = []
    for (let i = 0; i < this._trees.length; i++) {
      let whatTree = {name:this._trees[i].tree_name, age:this._trees[i].age}
      allAges.push(whatTree);

      if(this._trees[i].tree_age >= this._trees[i].growing_age){
        matureTrees.push(this._trees[i])
      }
      if(this._trees[i].aliveStatus === false){
        deadTrees.push(this._trees[i])
        this._trees.splice(i,1)
      }
    }
    this._all_tree_age = allAges
    this._mature_trees = matureTrees
    if (deadTrees.length > 0) {
      for (var i = 0; i < deadTrees.length; i++) {
        this._dead_trees.push(deadTrees[i])
      }
    }
    return this
  }

}

let grove = new TreeGrove()
// grove.inputTree(name, age, height, matureAge, healthy)
grove.inputTree(new AppleTree.AppleTree('AppleTree', 2, 1.8, 5, true))  // apple
grove.inputTree(new MangoTree.MangoTree('MangoTree', 8, 2.4, 6, true)) // mango
grove.inputTree(new PearTree.PearTree('PearTree', 1, 1.2, 6, true))     // pear

// driver
// while grove is is_empty false
// do {
  grove.nextYear()
  console.log(grove.show_ages);
  console.log(grove.show_mature_trees);
  console.log(grove.show_trees.length, 'Trees alive');
  console.log(grove.dead_trees.length, 'Trees dead');
// } while (grove._trees.length > 0)
