const mango = require('./mango_tree.js');
const apple = require('./apple_tree.js');
const pear = require('./pear_tree.js');

let MangoTree = mango.MangoTree
let AppleTree = apple.AppleTree
let PearTree = pear.PearTree

class TreeGrove {
    constructor(){
        this._trees = []
        this._mature = []
        this._dead = []
    }
    randomGrowth(){
        return +((Math.round(Math.random()*15))/10).toPrecision(1)
      }
    // 1. digunakan untuk memasukkan data pohon saat ini yang menerinma jenis pohon apapun dan umur pohon berapapun
    inputTree(treeName, age, height, matureAge, healthStat){
        // instance new class - composition method
        if (treeName === "MangoTree"){
            this._trees.push(new MangoTree(treeName, age, height, matureAge, healthStat))
        } else if (treeName === "AppleTree"){
            this._trees.push(new AppleTree(treeName, age, height, matureAge, healthStat))
        } else {
            this._trees.push(new PearTree(treeName, age, height, matureAge, healthStat))
        }
    }
    
    nextYear(){
        this._mature = []
        this._dead = []

        for(let i = 0; i < this._trees.length; i++){
            this._trees[i]._age++
            if (this._trees[i]._height < 6){
                this._trees[i]._height += this.randomGrowth()
            }
            
            if (this._trees[i]._age >= this._trees[i]._maxAge){
                this._trees[i]._healthy = false
                this._dead.push(this._trees[i])
            } else if (this._trees[i]._age >= this._trees[i]._matureAge){
                this._mature.push(this._trees[i])
            }
        }
        
    }
    showAge(){
        for (let i = 0; i < this._trees.length; i++){
            console.log(`${this._trees[i]._name}: ${this._trees[i]._age} years old`)
        }
    }
    showTrees(){
        console.log(this._trees)
    }
    matureTrees(){
        console.log(this._mature)
    }
    deadTrees(){
        console.log(this._dead)
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

// next year - change the year rep below
for (let i = 0; i < 15; i++){
    grove.nextYear()
}

// show trees age
grove.showAge()

// show trees
grove.showTrees()

// show mature trees
console.log('MATURE TREES')
grove.matureTrees()

// show dead trees
console.log('DEAD TREES')
grove.deadTrees()
