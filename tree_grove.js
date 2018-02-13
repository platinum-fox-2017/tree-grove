const MangoTree = require('./mango_tree.js');
const AppleTree = require('./apple_tree.js');
const PearTree = require('./pear_tree.js');

class TreeGrove {
    constructor() {
        this._arrayTree = [];
    }

    inputTree(name,age,height,matureAge,healthyStatus) {
        if(name === "MangoTree") {
            let newMangoTree = new MangoTree(name,age,height,matureAge,healthyStatus);
            this._arrayTree.push(newMangoTree);
        } else if (name === "AppleTree") {
            let newAppleTree = new AppleTree(name,age,height,matureAge,healthyStatus);
            this._arrayTree.push(newAppleTree);
        } else if (name === "PearTree") {
            let newPearTree  = new PearTree(name,age,height,matureAge,healthyStatus);
            this._arrayTree.push(newPearTree);
        }
    }

    nextYear() {
        for(let i = 0; i < this._arrayTree.length;i++) {
            this._arrayTree[i].grow();
        }
    }

    showAge() {
        for(let i = 0; i < this._arrayTree.length; i++) {
            console.log(this._arrayTree[i]._name + " berumur : " + this._arrayTree[i].age);
        }
    }

    showTrees() {
        let arrTreeNames = [];
        for(let i = 0; i < this._arrayTree.length; i++) {
            arrTreeNames.push(this._arrayTree[i].name);
        }

        return arrTreeNames;
    }

    mature_trees() {
        let arrMatureTrees = [];
        for(let i = 0; i < this._arrayTree.length; i++) {
            if((this._arrayTree[i].age >= this._arrayTree[i].matureAge) && (this._arrayTree[i].age < this._arrayTree[i].dieAge)) {
                arrMatureTrees.push(this._arrayTree[i].name);
            }
        }

        return arrMatureTrees;
    }

    dead_trees() {
        let arrDeadTrees = [];
        for(let i = 0; i < this._arrayTree.length; i++) {
            if(this._arrayTree[i].age >= this._arrayTree[i].dieAge) {
                arrDeadTrees.push(this._arrayTree[i].name);
            }
        }

        return arrDeadTrees;
    }
}

var grove = new TreeGrove()
// input your trees data !
// parameter ke-1: nama pohon
// parameter ke-2: umur pohon ketika ditanam di taman tersebut
// pamareter ke-3: tinggi pohon pertama kali ketika ditanam di taman tersebut
// parameter ke-4: umur mature pohon tersebut
// parameter ke-5: healthyStatus dari pohon tersebut ketika ditanam
grove.inputTree("MangoTree", 3, 1.8, 3,true)
grove.inputTree("MangoTree", 1, 2.4, 3,true)
grove.inputTree("AppleTree", 4, 1.2, 5,true)
grove.inputTree("PearTree", 14, 2, 2,true)

// next year
grove.nextYear()

// show trees age
grove.showAge()

// show trees
console.log("List of tree names : ");
console.log(grove.showTrees())

// show trees
console.log("List of mature trees : ");
console.log(grove.mature_trees())


// show trees
console.log("List of dead trees : ")
console.log(grove.dead_trees())