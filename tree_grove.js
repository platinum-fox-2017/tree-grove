const MangoTree = require('./mango_tree.js');
const AppleTree = require('./apple_tree.js');
const PearTree = require('./pear_tree.js');

class TreeGrove {
    constructor(){
        this.trees = []
    }
    inputTree(name, age, height, mature, healtyStatus){
        if(name === "MangoTree"){
            this.trees.push(new MangoTree(name, age, height, mature, healtyStatus))
        }else if (name === "AppleTree"){
            this.trees.push(new AppleTree(name, age, height, mature, healtyStatus))
        }else{
            this.trees.push(new PearTree(name, age, height, mature, healtyStatus))
        }
        return this.trees
    }
    nextYear(){
        for(let i=0; i<this.trees.length; i++){
            this.trees[i].grow()
        }
    }
    showAge(){
        let treesAge = []
        for(let i =0; i<this.trees.length; i++){
            treesAge.push(`{${this.trees[i]._name} : ${this.trees[i]._age} tahun}`)
        }
        console.log(`umur pohon : ${treesAge}`)
    }
    showTrees(){
        let trees = []
        for(let i = 0; i<this.trees.length; i++){
            if(trees.indexOf(this.trees[i]._name)=== -1){
            trees.push(this.trees[i]._name)               
            }
        }
        console.log(`pohon yang ada di taman : ${trees}`)
    }
    mature_trees(){
        let matureTrees =[]
        for(let i =0; i<this.trees.length; i++){
            if(this.trees[i]._age >= this.trees[i]._mature && this.trees[i]._healtyStatus===true){
                matureTrees.push(this.trees[i]._name)
            }
        }
        if(matureTrees.length > 0){
            console.log(`pohon yang sedang berbuah : ${matureTrees}`)
        }else{
            console.log(`tidak ada pohon yang sedang berbuah`)
        }
    }
    dead_trees(){
        let deadTrees =[]
        for(let i =0; i<this.trees.length; i++){
            if(this.trees[i]._healtyStatus === false){
                deadTrees.push(this.trees[i]._name)
            }
        }
        if(deadTrees.length > 0){
            console.log(`pohon yang mati : ${deadTrees}`)
        }else{
            console.log(`tidak ada pohon yang mati`)
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
grove.inputTree("MangoTree", 3, 1.8, 7,true)
grove.inputTree("MangoTree", 5, 2.4, 12,true)
grove.inputTree("AppleTree", 4, 1.2, 5,true)
grove.inputTree("PearTree", 7, 2, 15,true)
// next year
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

// console.log(grove)

// show trees age
grove.showAge()

// show trees
grove.showTrees()

// show trees
grove.mature_trees()

// show trees
grove.dead_trees()
