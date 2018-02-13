const {MangoTree} = require('./mangoTree.js');
const {AppleTree} = require('./appleTree.js');
const {PearTree} = require('./pearTree.js');

class TreeGrove {
    constructor(){
        this._garden = []
    }

    inputTree(name,setAge,setHeight,setMaxAge,setStatus){
        let newTree;
        if(name === "MangoTree"){
            newTree = new MangoTree(name,setAge,setHeight,setMaxAge,setStatus)
        }else if(name === "AppleTree"){
            newTree = new AppleTree(name,setAge,setHeight,setMaxAge,setStatus)
        }else if(name === "PearTree"){
            newTree = new PearTree(name,setAge,setHeight,setMaxAge,setStatus)
        }
        this._garden.push(newTree)
        return this
    }

    nextYear(){
        const loop = this._garden.map(each =>{
            each.grow()
            each.produce()
            each.harverst()
        })
        return this
    }

    showAge(){
        const loop = this._garden.map(each=>{
            return `${each.name} is ${each.age} years old `
        })
        console.log(loop)
        return this
    }

    showTrees(){
        const collection = this._garden.map(each=>{
            return each.name
        })
        
        const count = collection.reduce( (garden, tree) => {
        
        if (!garden[tree]) {
            garden[tree] = 1;
        } else {
            garden[tree] = garden[tree] + 1;
        }
        return garden;
        } , {})
        console.log(count)
    }

    mature_trees(){
        const loop = this._garden.filter(tree =>{
            return tree.healthyStatus === false
        })
        console.log(loop)
        return this
    }

    dead_trees(){
        const loop = this._garden.filter(tree =>{
            return tree.healthyStatus === false
        })
        console.log(loop)
        return this
    }
}

const grove = new TreeGrove()


// input your trees data !
// parameter ke-1: nama pohon
// parameter ke-2: umur pohon ketika ditanam di taman tersebut
// pamareter ke-3: tinggi pohon pertama kali ketika ditanam di taman tersebut
// parameter ke-4: umur mature pohon tersebut
// parameter ke-5: healthyStatus dari pohon tersebut ketika ditanam
grove.inputTree("MangoTree", 3, 1.8, 7,true).inputTree("MangoTree", 5, 2.4, 12,true).inputTree("AppleTree", 4, 1.2, 5,true).inputTree("PearTree", 7, 2, 15,true)

// next year
// grove.nextYear()

// show trees age
// grove.showAge()

// show trees
// grove.showTrees()

// show trees
// grove.mature_trees()

// show trees
// grove.dead_trees()
