const MangoTree = require('./mango_tree.js');
const AppleTree = require('./apple_tree.js');
const PearTree = require('./pear_tree.js');

class TreeGrove {
  constructor() {
    this.treeList = []
  }

  inputTree(name, age, height, matureAge, healthyStatus) {
    if(name === 'MangoTree') {
      let newTree = new MangoTree(name, age, height, matureAge, healthyStatus)
      this.treeList.push(newTree)
    } else if(name === 'AppleTree') {
      let newTree = new AppleTree(name, age, height, matureAge, healthyStatus)
      this.treeList.push(newTree)
    } else if(name === 'PearTree') {
      let newTree = new PearTree(name, age, height, matureAge, healthyStatus)
      this.treeList.push(newTree)
    }
    return this.treeList;
  }

  showAge() {
    let list = this.treeList;
    console.log('=======================================');
    console.log('Daftar usia pohon yang ada di kebun :');
    for (let i = 0; i < list.length; i++) {
      console.log(`- Usia pohon ${list[i].name} sekarang adalah ${list[i]._age}`);
    }
  }

  nextYear() {
    let list = this.treeList
    let nextYear = []
    list.forEach(data => {
      data.grow()
    })
  }

  showTrees() {
    let list = this.treeList
    console.log('=======================================');
    console.log(`List pohon yang ada di kebun adalah :`);
    for(let i = 0; i < list.length; i++) {
      console.log(`${i+1}. ${list[i].name}`);
    }
  }

  mature_trees() {
    let list = this.treeList;
    let mature = []
    for (let i = 0; i < list.length; i++) {
      if(list[i]._age >= list[i].matureAge) {
        mature.push(list[i].name)
      }
    }
    console.log('=======================================');
    console.log('Pohon yang sudah siap berbuah yaitu :');
    console.log(mature.join('\n'));
  }

  dead_trees() {
    let list = this.treeList;
    let dead = []
    for (let i = 0; i < list.length; i++) {
      if(list[i]._healthyStatus === false) {
        dead.push(list[i].name)
      }
    }
    console.log('=======================================');
    console.log('Pohon yang sudah mati yaitu :');
    console.log(dead.join('\n'));
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

// // next year
grove.nextYear()
grove.nextYear()
grove.nextYear()
grove.nextYear()
grove.nextYear()
grove.nextYear()
grove.nextYear()
grove.nextYear()
grove.nextYear()
grove.nextYear()
grove.nextYear()
grove.nextYear()
grove.nextYear()
grove.nextYear()
grove.nextYear()
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
