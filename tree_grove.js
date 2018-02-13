const MangoTree = require('./mango_tree.js');
const AppleTree = require('./apple_tree.js');
const PearTree = require('./pear_tree.js');

class TreeGrove {
    constructor() {
        this._trees = []
    }

    inputTree(tree, age, height, mature, healthyStatus) {
        if (tree === 'MangoTree') {
            this._trees.push(new MangoTree(tree, age, height, mature, healthyStatus))
        } else if (tree === 'AppleTree') {
            this._trees.push(new AppleTree(tree, age, height, mature, healthyStatus))
        } else if (tree === 'PearTree') {
            this._trees.push(new PearTree(tree, age, height, mature, healthyStatus))
        }
    }

    nextYear() {
        for (let i = 0; i < this._trees.length; i++) {
            this._trees[i].grow()
        }
    }

    show_ages() {
        let ageTress = []
        for (let i = 0; i < this._trees.length; i++) {
            ageTress.push(`${this._trees[i]._name} : Current Age = ${this._trees[i]._age}`)
        }
        let alltress = ageTress.join('\n')
        return alltress
    }

    show_trees() {
        let trees = []
        for (let i = 0; i < this._trees.length; i++) {
            trees.push(this._trees[i]._name)
        }
        console.log(`All Tree at TreeGrove : ${trees}`)
    }

    mature_trees() {
        let trees = []
        for (let i = 0; i < this._trees.length; i++) {
            if (this._trees[i]._age >= this._trees[i]._matureAge && this._trees[i]._age < this._trees[i]._maxMatureAge) {
                trees.push(this._trees[i]._name)
            }
        }
        console.log(`Mature Tree: ${trees}`)
    }

    dead_trees() {
        let deadTrees = []
        for (let i = 0; i < this._trees.length; i++) {
            if (this._trees[i]._age >= this._trees[i]._maxAge) {
                deadTrees.push(this._trees[i]._name)
            }
        }
        console.log(`DEAD TREE: ${deadTrees}`)
    }

}

var grove = new TreeGrove()
// input your trees data !
// parameter ke-1: nama pohon
// parameter ke-2: umur pohon ketika ditanam di taman tersebut
// pamareter ke-3: tinggi pohon pertama kali ketika ditanam di taman tersebut
// parameter ke-4: umur mature pohon tersebut
// parameter ke-5: healthyStatus dari pohon tersebut ketika ditanam
grove.inputTree("MangoTree", 3, 1.8, 7, true)
grove.inputTree("MangoTree", 5, 2.4, 12, true)
grove.inputTree("AppleTree", 4, 1.2, 5, true)
grove.inputTree("PearTree", 7, 2, 15, true)

// next year
grove.nextYear()
console.log(grove.show_ages())
grove.show_trees()
console.log('-----------------------------------')


grove.nextYear()
console.log(grove.show_ages())
grove.show_trees()
console.log('-----------------------------------')



grove.nextYear()
console.log(grove.show_ages())
grove.show_trees()
grove.mature_trees()
console.log('-----------------------------------')


grove.nextYear()
console.log(grove.show_ages())
grove.show_trees()
grove.mature_trees()
console.log('-----------------------------------')


grove.nextYear()
console.log(grove.show_ages())
grove.show_trees()
grove.mature_trees()
console.log('-----------------------------------')


grove.nextYear()
console.log(grove.show_ages())
grove.show_trees()
grove.mature_trees()
grove.dead_trees()
console.log('-----------------------------------')

// // show trees age
// grove.showAge()

// // show trees
// grove.showTrees()

// // show trees
// grove.mature_trees()

// // show trees
// grove.dead_trees()
