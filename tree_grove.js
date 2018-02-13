const MangoTree = require('./mango_tree.js');
const AppleTree = require('./apple_tree.js');
const PearTree = require('./pear_tree.js');

class TreeGrove {
    constructor(){
        this._grove =[];
    }
    inputTree(type, age, height, mature_age, healthy_status){
        let new_tree;
        let attributes = {
            _age:age,
            _height:height,
            _mature_age:mature_age,
            _healthy:healthy_status,
        }
           if(type === 'AppleTree') new_tree = new AppleTree(attributes);
           if(type === 'MangoTree') new_tree = new MangoTree(attributes);
           if(type === 'PearTree') new_tree = new PearTree(attributes);
        this._grove.push(new_tree);
    }
    next_year(){
        for(let i=0; i<this._grove.length; i++){
            this._grove[i].grow();
        }
    }
    show_ages(){
        this._grove.forEach((v,i,a)=>{
            console.log(`${i+1}. ${v.constructor.name}: ${v._age} years old`)
        })
    }
    show_trees(){
        this._grove.forEach((v,i,a)=>{
            console.log(`${i+1}. ${v.constructor.name}`);
        })
    }
    mature_trees(){
        this._grove.filter((v,i,a)=>{
            v._age >= v._mature_age && v._health == true? console.log(`${v.constructor.name} is producing fruits at ${v._age} `): console.log(`${v.constructor.name} is not producing fruits at ${v._age}`)
        })
    }
    dead_trees(){
        this._grove.filter((v,i,a)=>{
            v._health == false ? console.log(`${v.constructor.name} has passed away`): console.log(`${v.constructor.name} is still alive`)
        })
    }
}

let grove = new TreeGrove()
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
grove.next_year()
grove.next_year()
grove.next_year()
grove.next_year()
grove.next_year()
grove.next_year()
grove.next_year()
grove.next_year()
grove.next_year()
grove.next_year()

// show trees age
grove.show_ages()

// show trees
grove.show_trees()

// // show trees
grove.mature_trees()

// // show trees
grove.dead_trees()