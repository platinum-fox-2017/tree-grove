const MangoTree = require('./mango_tree.js');
const AppleTree = require('./apple_tree.js');
const PearTree = require('./pear_tree.js');

class TreeGrove {
    constructor(){
        this._listOfTrees = [];
    }

    inputTree(name, age, height, matureAge, healthyStatus){
        if(name === 'MangoTree'){
            let mangoTree = new MangoTree(name, age, height, matureAge, healthyStatus);
            this._listOfTrees.push(mangoTree);
        }
        if(name === 'AppleTree'){
            let appleTree = new AppleTree(name, age, height, matureAge, healthyStatus);
            this._listOfTrees.push(appleTree);
        }
        if(name === 'PearTree'){
            let pearTree = new PearTree(name, age, height, matureAge, healthyStatus);
            this._listOfTrees.push(pearTree);
        }
    }

    next_year(loop){
        for(let j=0; j<loop+1; j++){
            if(j!==0){
                for(let i=0; i<this._listOfTrees.length; i++){
                    this._listOfTrees[i].age += 1;
                    if(this._listOfTrees[i].age < this._listOfTrees[i].matureAge){
                        this._listOfTrees[i].height += 1+(Math.floor(Math.random() * 20));
                    }
                    if(this._listOfTrees[i].age >= this._listOfTrees[i].deadAges){
                        this._listOfTrees[i].healthyStatus = false;
                    }
                }
            }
            this.show_report(j);
        }
    }

    show_ages(){
        let age = [];
        for(let i=0; i<this._listOfTrees.length; i++){
            age.push(`${this._listOfTrees[i].name} = ${this._listOfTrees[i].age} years`);
        }
    }

    show_trees(){
        console.log(this._listOfTrees);
    }

    mature_trees(){
        let matureTrees = [];
        for(let i=0; i<this._listOfTrees.length; i++){
            if(this._listOfTrees[i].age >= this._listOfTrees[i].matureAge){
                matureTrees.push(this._listOfTrees[i].name)
            }
        }
        // console.log(matureTrees);
        return matureTrees;
    }

    dead_trees(){
        let deadTrees = [];
        for(let i=0; i<this._listOfTrees.length; i++){
            if(!this._listOfTrees[i].healthyStatus){
                deadTrees.push(this._listOfTrees[i].name)
            }
        }
        // console.log(deadTrees);
        return deadTrees;
    }

    show_report(year){
        console.log(`\n[Year ${year} Report]`)
        for(let i=0; i<this._listOfTrees.length; i++){
            if(!this._listOfTrees[i].healthyStatus){
                console.log(`${this._listOfTrees[i].name} | Age = ${this._listOfTrees[i].age} | Height = -- m | Status : Dead`)
            }else{
                if(this._listOfTrees[i].age < this._listOfTrees[i].matureAge){
                    console.log(`${this._listOfTrees[i].name} | Age = ${this._listOfTrees[i].age} | Height = ${this._listOfTrees[i].height/10} m | Status : Baby`)
                }else if(this._listOfTrees[i].age >= this._listOfTrees[i].matureAge){
                    console.log(`${this._listOfTrees[i].name} | Age = ${this._listOfTrees[i].age} |  Height = ${this._listOfTrees[i].height/10} m | Status : Mature`)
                }
            }
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

// show trees
grove.show_trees()

//next year
grove.next_year(15)

// show trees age
grove.show_ages()

// show trees
grove.mature_trees()

// show trees
grove.dead_trees()
