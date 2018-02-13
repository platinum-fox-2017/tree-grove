const MangoTree = require('./mango_tree.js');
const AppleTree = require('./apple_tree.js');
const PearTree = require('./pear_tree.js');

class TreeGrove {
  constructor(){
    this.garden = []
  }

  inputTree(name, age, height, matured, health) {
    let plant
    if (name === 'MangoTree') {
      plant = new MangoTree
    }
    else if (name === 'AppleTree') {
      plant = new AppleTree
    }
    else {
      plant = new PearTree
    }
    plant._name = name
    plant._age = age
    plant._height = height
    plant._matured = matured
    plant._healthy = health
    this.garden.push(plant)
    // console.log(plant._name);
  }

  nextYear() {
    this.garden[0].grow()
    this.garden[1].grow()
    this.garden[2].grow()
    this.garden[3].grow()
    return this
  }

  showAge(){
    let umur = []
    for (var i = 0; i < this.garden.length; i++) {
      umur.push(`umur ${this.garden[i]._name} adalah ${this.garden[i]._age} tahun`)
    }
    console.log(umur);
  }

  showTrees() {
    let tanaman = []
    for (var i = 0; i < this.garden.length; i++) {
      tanaman.push(this.garden[i]._name)
    }
    console.log('Tumbuhan yang sedang ditanam : '+tanaman);
  }

  mature_trees() {
    let berbuah = []
    for (var i = 0; i < this.garden.length; i++) {
      if (this.garden[i]._age >= this.garden[i]._matured) {
        berbuah.push(this.garden[i]._name)
      }
    }
    console.log('Pohon yang sedang berbuah: '+berbuah);
  }

  dead_trees() {
    let dead = []
    for (var i = 0; i < this.garden.length; i++) {
      if (this.garden[i]._healthyStatus === false) {
        dead.push(this.garden[i]._name)
      }
    }
    console.log(dead);
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

// console.log(grove.nextYear());
// next year
grove.nextYear()
//
// // show trees age
grove.showAge()
//
// // show trees
grove.showTrees()
//
// // show trees
grove.mature_trees()
//
// // show trees
grove.dead_trees()
