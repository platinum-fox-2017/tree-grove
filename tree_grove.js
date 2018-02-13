const MangoTree = require('./mango_tree.js');
const AppleTree = require('./apple_tree.js');
const PearTree = require('./pear_tree.js');

class TreeGrove {
  constructor(){
    this.garden =[]
  }
  inputTree(name, age, height, mature_age, healthyStatus){
    let tree
    if(name === 'MangoTree'){
      tree = new MangoTree
    }
    else if(name === 'AppleTree'){
      tree = new AppleTree
    }
    else if(name === 'PearTree'){
      tree = new PearTree
    }
    tree._name = name
    tree._age = age
    tree._height = height
    tree._mature_age = mature_age
    tree._healthyStatus = healthyStatus
    this.garden.push(tree)
    return this
  }
  nextYear(){
    for(let i=0; i<this.garden.length; i++){
      this.garden[i].grow()
    }
    return this
  }
  showAge(){
    for(let i=0; i<this.garden.length; i++){
      console.log(`${this.garden[i]._name} age: ${this.garden[i]._age}`);
    }
  }
  showTrees(){
    for(let i=0; i<this.garden.length; i++){
      console.log(`${this.garden[i]._name}`);
    }
  }
  mature_trees(){
    let result = []
    for(let i=0; i<this.garden.length; i++){
      if(this.garden[i]._age >= this.garden[i]._mature_age){
        result.push(this.garden[i]._name)
      }
    }
    console.log(`Pohon yang sedang berbuah: ${result.join(',')}`);
  }
  dead_trees(){
    let result = []
    for(let i=0; i<this.garden.length; i++){
      if(this.garden[i]._healthyStatus === false){
        result.push(this.garden[i]._name)
      }
    }
    console.log(`Pohon yang sudah mati: ${result.join(',')}`);
  }
}

var grove = new TreeGrove()
// input your trees data !
// parameter ke-1: nama pohon
// parameter ke-2: umur pohon ketika ditanam di taman tersebut
// pamareter ke-3: tinggi pohon pertama kali ketika ditanam di taman tersebut
// parameter ke-4: umur mature pohon tersebut
// parameter ke-5: healthyStatus dari pohon tersebut ketika ditanam
grove.inputTree("MangoTree", 3, 1.8, 7, true)
grove.inputTree("MangoTree", 5, 2.4, 12, true)
grove.inputTree("AppleTree", 4, 1.2, 5, true)
grove.inputTree("PearTree", 7, 2, 15, true)

// next year
grove.nextYear()

// show trees age
grove.showAge()

// show trees
grove.showTrees()

// show trees
grove.mature_trees()

// show trees
grove.dead_trees()
