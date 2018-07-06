const MangoTree = require('./mango_tree.js');
const AppleTree = require('./apple_tree.js');
const PearTree = require('./pear_tree.js');

class TreeGrove {
    constructor(){
        this._treeList = []
    }

    inputTree(name, age, height, mature, healthy){
        if(name === "MangoTree"){
            this._treeList.push(new MangoTree(name, age, height, mature, healthy))
        }
        if(name === "AppleTree"){
            this._treeList.push(new AppleTree(name, age, height, mature, healthy))
        }
        if(name === "PearTree"){
            this._treeList.push(new PearTree(name, age, height, mature, healthy))
        }
    }
    
    nextYear(){
        for (let i=0; i<this._treeList.length; i++) {
            this.treeList[i]
          }
    }

    // Method yang memberi akan memberi tahu kita umur setiap pohon yang ada di tanaman tersebut
    showAge(){
        for(let i=0; i<this._treeList.length; i++){
            console.log('Umur Pohon '+this._treeList[i]._name+' ' +this._treeList[i]._age +' Tahun')
        }
    }

    // Method yang akan me-return semua nama pohon yang ada di taman
    showTrees(){
        for(let i=0; i<this._treeList.length; i++){
          console.log('Ada Pohon, ' +this._treeList[i]._name)
        }
    }

    // Method yang akan me-return semua nama pohon yang sedang berubah
    matureTrees(){

    }

    // Method yang akan me-return nama-nama pohon yang mati di taman tersebut
    deadTrees(){

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
// grove.nextYear()

// // show trees age
grove.showAge()

// // show trees
grove.showTrees()

// // show trees
// grove.mature_trees()

// // show trees
// grove.dead_trees()

// let mangoTree = new MangoTree("MangoTree", 3, 1.8, 7,true)
// console.log('The tree is alive! :smile:')
//   do {
//     mangoTree.grow();
//     mangoTree.produceFruits();
//     mangoTree.harvest();
//     console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} | Fruits harvested = ${mangoTree.harvested}`)
//    } while (mangoTree.healthyStatus != false)
//    console.log('The tree has met its end! :sad:')
