const {MangoTree,Mango} = require('./mango_tree.js');
const {AppleTree,Apple} = require('./apple_tree.js');
const {PearTree,Pear} = require('./pear_tree.js');

class TreeGrove {
  constructor(){
    this._groove = []

  }

  inputTree (name,age,height,mature,health,dead) {
        let tree = {};
        if (name === "MangoTree") { tree = new MangoTree(name,age,height,mature,health,dead); }
        else if (name === "AppleTree") { tree = new AppleTree(name,age,height,mature,health,dead);}
        else {tree = new PearTree(name,age,height,mature,health,dead)}
        this._groove.push(tree);
    }

  nextYear(){
    for(let i = 0;i < this._groove.length;i++){
      this._groove[i]._age ++
      this._groove[i]._height += Math.floor(Math.random()*50)
    }
    return this._groove
  }

  showAge(){
    let tree_age = []
    for(let i = 0;i <this._groove.length;i++){
      if(this._groove[i].age<this._groove[i]._deadaged){
        tree_age.push(' '+this._groove[i]._kind+' ('+this._groove[i].age+' tahun)')
      } else {
        tree_age.push(' '+this._groove[i]._kind+' (mati '+(this._groove[i].age-this._groove[i]._deadaged)+' tahun yang lalu)')
      }
    }
    return 'list umur pohon di kebun :'+tree_age
  }

  showTrees(){
    let tree_array = []
    for(let i = 0;i <this._groove.length;i++){
      tree_array.push(' '+this._groove[i]._kind)
    }
    return 'list pohon yang ada di kebun :'+tree_array
  }


  mature_trees(){
    let array_of_mature_trees = []
    for(let i = 0;i <this._groove.length;i++){
      if(this._groove[i].age>=this._groove[i]._matureaged && this._groove[i].age<=this._groove[i]._deadaged)
      array_of_mature_trees.push(' '+this._groove[i]._kind)
    }
    return 'list pohon yang sedang berbuah :'+ array_of_mature_trees
  }

  dead_trees(){
    let array_of_dead_trees = []
    for(let i = 0;i <this._groove.length;i++){
      if(this._groove[i].age>=this._groove[i]._deadaged)
      array_of_dead_trees.push(' '+this._groove[i]._kind+' (mati '+(this._groove[i].age-this._groove[i]._deadaged)+' tahun yang lalu)')
    }
    return 'list pohon yang sudah mati :'+ array_of_dead_trees
  }

}

var grove = new TreeGrove()
// input your trees data !
// parameter ke-1: nama pohon
// parameter ke-2: umur pohon ketika ditanam di taman tersebut
// pamareter ke-3: tinggi pohon pertama kali ketika ditanam di taman tersebut
// parameter ke-4: umur mature pohon tersebut
// parameter ke-5: healthyStatus dari pohon tersebut ketika ditanam
grove.inputTree("MangoTree", 3, 1.8, 7,true, 8)
grove.inputTree("MangoTree", 5, 2.4, 12,true, 7)
grove.inputTree("AppleTree", 4, 1.2, 5,true, 16)
grove.inputTree("PearTree", 7, 2, 15,true, 14)
// console.log(grove._groove)
grove.nextYear()
grove.nextYear()
grove.nextYear()
grove.nextYear()
grove.nextYear()
// grove.nextYear()
grove.nextYear()
// console.log(grove._groove)
grove.showAge()
// console.log(grove.showAge())
grove.showTrees()
// console.log(grove.showTrees())
grove.mature_trees()
// console.log(grove.mature_trees());
grove.dead_trees()
console.log(grove.dead_trees());
