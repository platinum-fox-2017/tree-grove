"use strict";
const MangoTree = require('./mango_tree')
const AppleTree = require('./apple_tree')
// const Mango = require('./mango')
// const Apple = require('./apple')

class TreeGrove {
  constructor() {
    this._trees = []
  }

  inputTree(name, age, height, mature, healthyStatus) {
    if(name === 'MangoTree') {
      let mango_tree = new MangoTree()
      mango_tree._name = name
      mango_tree._age = age
      mango_tree._height = height
      mango_tree._mature = mature
      mango_tree._healthyStatus = healthyStatus
      this._trees.push(mango_tree)
    } else if(name === 'AppleTree') {
      let apple_tree = new AppleTree()
      apple_tree._name = name
      apple_tree._age = age
      apple_tree._height = height
      apple_tree._mature = mature
      apple_tree._healthyStatus = healthyStatus
      this._trees.push(apple_tree)
    }
  }

  next_year() {
    for(let i = 0; i < this._trees.length; i++) {
      this._trees[i]._age++
      if(this._trees[i]._height < 18) {
        this._trees[i]._height += Math.round(Math.random()*10)
        if(this._trees[i]._age >= this._trees[i]._old) {
          this._trees[i]._healthyStatus = false
        }
      }
    }
  }

  show_ages() {
    let trees = [];
    for(let i = 0; i < this._trees.length; i++) {
      if(this._trees[i]._healthyStatus) {
        let objTrees = {};
        objTrees.name = this._trees[i]._name
        objTrees.age = this._trees[i]._age
        trees.push(objTrees)
      }
    }
    console.log(`${trees.length} Healthy Trees:`)
    console.log(trees)
  }

  show_tress() {
    let treeNames = [];
    for(let i = 0; i < this._trees.length; i++) {
      if(treeNames.indexOf(this._trees[i]._name) === -1) {
        treeNames.push(this._trees[i]._name)
      }
    }

    console.log(`Total ${this._trees.length} Trees, with ${treeNames.length} Kind of Trees in the Garden:`);
    console.log(treeNames);
  }

  mature_tress() {
    let trees = []
    for(let i = 0; i < this._trees.length; i++) {
      if(this._trees[i]._age >= this._trees[i]._mature && this._trees[i]._age < this._trees[i]._old) {
        var objTrees = {};
        objTrees.name = this._trees[i]._name;
        trees.push(objTrees);
      }
    }

    if(trees.length < 1) {
      console.log(`No Mature Trees`)
    } else {
      console.log(`${trees.length} Mature Trees Found:`)
      console.log(trees)
    }
  }

  dead_tress() {
    let trees = []
    for(let i = 0; i < this._trees.length; i++) {
      if(this._trees[i]._age >= this._trees[i]._old) {
        var objTrees = {};
        objTrees.name = this._trees[i]._name
        trees.push(objTrees)
      }
    }

    if(trees.length < 1) {
      console.log(`No Dead Trees`)
    } else {
      console.log(`${trees.length} Dead Trees Found:`)
      console.log(trees)
    }
  }
}

var grove = new TreeGrove()
// input your trees data !
// parameter ke-1: nama pohon
// parameter ke-2: umur pohon ketika ditanam di taman tersebut
// pamareter ke-3: tinggi pohon pertama kali ketika ditanam di taman tersebut
// parameter ke-4: umur mature pohon tersebut
// parameter ke-5: healthyStatus dari pohon tersebut ketika ditanam
grove.inputTree('MangoTree', 7, 1.8, 7, true)
grove.inputTree('MangoTree', 5, 2.4, 12, true)
grove.inputTree('AppleTree', 4, 1.2, 5, true)
grove.inputTree('AppleTree', 3, 1.2, 5, true)
grove.inputTree('AppleTree', 19, 1.2, 5, true)

grove.show_ages()
grove.show_tress()
grove.mature_tress()
grove.dead_tress()
grove.next_year()
console.log(`---------------AFTER A YEAR-------------`)
grove.next_year()
grove.show_ages()
grove.show_tress()
grove.mature_tress()
grove.dead_tress()