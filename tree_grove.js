const MangoTree = require('./mango_tree.js');
const AppleTree = require('./apple_tree.js');
const PearTree = require('./pear_tree.js');

class TreeGrove {
    constructor() {
        this._tree=[];
    }

    inputTree(name,age,height,matureAge,healthyStatus) {
        if(name=="MangoTree") this._tree.push(new MangoTree(name,age,height,matureAge,healthyStatus))
        if(name=="AppleTree") this._tree.push(new AppleTree(name,age,height,matureAge,healthyStatus))
        if(name=="PearTree") this._tree.push(new PearTree(name,age,height,matureAge,healthyStatus))
        
    }

    showAge() {
        for(let i in this._tree) {
            console.log(`${this._tree[i]._name}: ${this._tree[i]._age} years`)
        }
    }

    showTrees() {
        for(let i in this._tree) {
            console.log(this._tree[i]._name)
        }
    }

    mature_trees() {
        for(let i in this._tree) 
            if(this._tree[i]._age>=this._tree[i]._matureAge && this._tree[i]._healthyStatus)
                console.log(`${this._tree[i]._name} is mature`)
    }

    dead_trees() {
        let count=0;
        for(let i in this._tree) {
            if(this._tree[i]._healthyStatus===false) {
                count++;
                console.log(`${this._tree[i]._name} is dead`);
            }
        }
        if(count===0) console.log(`All tree is healthy`);
                
    }

    nextYear() {
        for(let i in this._tree) {
            this._tree[i]._age++;
            this._tree[i]._height+=  Number((this._tree[i]._height/25).toFixed(2))
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

// show trees age
grove.showAge()

// show trees
grove.showTrees()

// show trees
grove.mature_trees()

// show trees
grove.dead_trees()
