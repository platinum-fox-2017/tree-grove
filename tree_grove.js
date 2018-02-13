const MangoTree = require('./mango_tree.js');
const AppleTree = require('./apple_tree.js');
const PearTree = require('./pear_tree.js');

class TreeGrove {
  constructor(){
    this.garden = []
  }

  inputTree(tree,age,height,mature,healthyStatus){
    let trees;
    if(tree === 'MangoTree'){
       trees = new MangoTree()
    }else if (tree === 'AppleTree'){
       trees = new AppleTree()
    }else if (tree === 'PearTree'){
       trees = new PearTree()
    }

    trees._tree = tree
    trees._age = age
    trees._matureAge = mature
    trees._height = height
    trees._healthStatus = healthyStatus
    this.garden.push(trees)
  }

  next_year(){
    for(let i = 0 ; i < this.garden.length ; i++){
        this.garden[i].grow()
    }
  }

  show_ages(){
    console.log(`umur pohon`)
    for(let  i = 0 ; i < this.garden.length ; i++){
      console.log(`${i+1}. ${this.garden[i]._tree} : ${this.garden[i]._age} tahun `)
    }
  }

  show_trees(){
    console.log(`jenis pohon yang di tanam di kebun ini :`)
    for(let  i = 0 ; i < this.garden.length ; i++){
      console.log(`${i+1}. ${this.garden[i]._tree}`)
    }
  }

  mature_trees(){
    console.log(`pohon yang sedang dalam masa berbuah : `)
    for(let  i = 0 ; i < this.garden.length ; i++){
      if(this.garden[i]._age >= this.garden[i]._matureAge){
        console.log(` ${this.garden[i]._tree}`)
      }
    }
  }

  dead_trees(){
    console.log(`pohon sudah tidak bisa berbuah:`)
    for(let  i = 0 ; i < this.garden.length ; i++){
      if(this.garden[i]._healthStatus === false){
        console.log(`${this.garden[i]._tree}`)
      }
    }
  }

}

let  grove = new TreeGrove()
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
// console.log(grove.garden)
// grove.show_ages()
// grove.show_trees()

// next year
grove.next_year()
grove.next_year()
grove.next_year()
grove.next_year()


// show trees age
grove.show_ages()

// show trees
grove.show_trees()

// show trees
grove.mature_trees()

// show trees
grove.dead_trees()
