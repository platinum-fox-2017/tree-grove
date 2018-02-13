const MangoTree = require('./mango_tree.js');
const AppleTree = require('./apple_tree.js');
const PearTree = require('./pear_tree.js');

class TreeGrove {
    constructor() {
        this.forest = new Array()
    }

    inputTree(treeName, age, height, mature_age, death_status) {
        let tree
        if(treeName === "MangoTree") {
            tree = new MangoTree;
        } else if(treeName === "AppleTree") {
            tree = new AppleTree;
        } else if(treeName === "PearTree") {
            tree = new PearTree
        }
        // this.forest = new Array()
        tree._name = treeName
        tree._age = age
        tree._height = height
        tree._mature_age = mature_age
        tree._death_status = death_status
        this.forest.push(tree)
        // console.log(tree)
        // console.log(this.forest[0]._age += 1)
    }

    nextYear() {
        for (let i = 0; i < this.forest.length; i++) {
            this.forest[i]._age += 1;
        }
        //  console.log(this.forest)
    }

    showAges() {
        let showAgeArr = []
        for (let i = 0; i < this.forest.length; i++) {
            showAgeArr.push(`Name : ${ this.forest[i]._name } | Age : ${this.forest[i]._age}`)
        }
        console.log(showAgeArr.join('\n'));
    }

    showTrees() {
        let showTreesArr = [];
        for (let i = 0; i < this.forest.length; i++) {
            showTreesArr.push(`Name : ${this.forest[i]._name}`)
        }
        console.log(showTreesArr.join('\n'));
    }

    mature_trees() {
        for (let i = 0; i < this.forest.length; i++) {
            if(this.forest[i]._age === this.forest[i]._mature_age) {
                console.log(this.forest[i])
            }
        }
    }

    dead_trees() {
        let deadTreesArr = []
        for (let i = 0; i < this.forest.length; i++) {
           if (this.forest[i]._death_status === 'false') {
               deadTreesArr.push(`${this.forest[i]._name} - Pohon Mati`);
           } else {
               deadTreesArr.push(`${this.forest[i]._name} - Pohon Tidak Mati`);
           }
        }
        console.log(deadTreesArr)
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

// next year
grove.nextYear()

// show trees age
grove.showAges()
console.log('')
// // show trees
grove.showTrees()
console.log('')
// show trees
grove.mature_trees()
console.log('')
// // show trees
grove.dead_trees()
