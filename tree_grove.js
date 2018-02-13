const MangoTree = require('./mango_tree.js');
const AppleTree = require('./apple_tree.js');
const PearTree = require('./pear_tree.js');

class TreeGrove {
    constructor() {
        this.fruits = []
        this.deadTrees = []
    }
    inputTree(name, age, height, mature, healtyStatus) {
        if (name === 'MangoTree') {
            this.fruits.push(new MangoTree({
                name,
                age: age,
                height: height,
                mature: mature,
                healtyStatus: healtyStatus,
                maxAge: age * 3
            }))
        } else if (name === 'AppleTree') {
            this.fruits.push(new AppleTree({
                name,
                age: age,
                height: height,
                mature: mature,
                healtyStatus: healtyStatus,
                maxAge: age * 3
            }))
        } else if (name === 'PearTree') {
            this.fruits.push(new PearTree({
                name,
                age: age,
                height: height,
                mature: mature,
                healtyStatus: healtyStatus,
                maxAge: age * 3
            }))
        }
    }
    nextYear() {
        this.fruits = this.fruits.map(fruit => {
            fruit.grow()
            return fruit
        })
    }
    showAge() {
        this.fruits.map(fruit => {
            console.log(fruit.name, ' age ', fruit.age)
        })
    }
    showTrees() {
        this.fruits.forEach(element => {
            console.log(element)
        });
    }
    mature_trees() {
        this.fruits = this.fruits.map(fruit => {
            fruit.produceFruits()
            fruit.harverst()
            return fruit
        })
    }
    dead_trees() {
        this.deadTrees = this.fruits.filter(fruit => {
            return fruit.healtyStatus === false
        })
        console.log(this.deadTrees)
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

let i = 1
while (i < 10) {
    console.log(`=====Year 1=====`)
    // next year
    grove.nextYear()
    console.log(`=====Show Age=====`)
    // show trees age
    grove.showAge()
    console.log(`=====Show Detail Trees=====`)
    // show trees
    grove.showTrees()

    // show trees
    grove.mature_trees()
    console.log(`=====List Dead Trees=====`)
    // show trees
    grove.dead_trees()    
    i++
}