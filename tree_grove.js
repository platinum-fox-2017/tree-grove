const MangoTree = require('./mango_tree.js');
const AppleTree = require('./apple_tree.js');
const PearTree = require('./pear_tree.js');

//create a TreeGrove Class
class TreeGrove {
  constructor(input) {
    this._tree = []
  }

  inputTree(name, age, height, matureAge, healthyStatus) {
    if(name == "MangoTree") {
      this._tree.push(new MangoTree(name, age, height, matureAge, healthyStatus))
    } else if(name == "AppleTree") {
      this._tree.push(new AppleTree(name, age, height, matureAge, healthyStatus))
    } else if(name == "PearTree") {
      this._tree.push(new PearTree(name, age, height, matureAge, healthyStatus))
    }
  }

  //memunculkan umur2 phonon
  show_ages() {
    let arrAges = []
    for(let i=0; i<this._tree.length; i++) {
      let obj = {}
      obj.name = this._tree[i]._name
      obj.age = this._tree[i]._age
      arrAges.push(obj)
    }
    return arrAges
  }

  //memunculkan pohon apa aja yang ada di TreeGrove
  show_trees() {
    let arrName = []
    for(let i=0; i<this._tree.length; i++) {
      let obj = {}
      obj.name = this._tree[i]._name
      arrName.push(obj)
    }
    return arrName
  }

  nextYear() {
    for(let i=0; i<this._tree.length; i++) {
      this._tree[i]._age += 1
    }
  }

  mature_trees() {
    let arrMatureTree = []
    for(let i=0; i<this._tree.length; i++) {
      let obj = {}
      if(this._tree[i]._age >= this._tree[i]._matureAge) {
        obj.name = this._tree[i]._name
        arrMatureTree.push(obj)
      }
    }
    return arrMatureTree
  }

  dead_trees() {
    let arrDeadTree = []
    for(let i=0; i<this._tree.length; i++) {
      let obj = {}
      if(this._tree[i]._age >= this._tree[i]._deadAge) {
        this._tree[i]._healthyStatus = false
        obj.name = this._tree[i]._name
        arrDeadTree.push(obj)
      }
    }
    return arrDeadTree
  }

}

var grove = new TreeGrove()
// input your trees data !
// parameter ke-1: nama pohon
// parameter ke-2: umur pohon ketika ditanam di taman tersebut
// pamareter ke-3: tinggi pohon pertama kali ketika ditanam di taman tersebut
// parameter ke-4: umur mature pohon tersebut
// parameter ke-5: healthyStatus dari pohon tersebut ketika ditanam
grove.inputTree("MangoTree", 3, 1.8, 7,true)
grove.inputTree("MangoTree", 5, 2.4, 12,true)
grove.inputTree("AppleTree", 4, 1.2, 5,true)
grove.inputTree("PearTree", 7, 2, 15,true)

console.log(grove);
console.log(grove.show_ages())

// next year
console.log('========next year========');
grove.nextYear()

// show trees age
console.log(grove.show_ages())

// show trees
console.log(grove.show_trees())

// show trees
console.log('======= mature tree =======');
console.log(grove.mature_trees())

// show trees
console.log('===== dead tree ======');
console.log(grove.dead_trees())
