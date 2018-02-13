//const MangoTree = require('./mango_tree.js');
//const AppleTree = require('./apple_tree.js');
//const PearTree = require('./pear_tree.js');

class TreeGrove{
  constructor ()  {
    this._trees = []  
  }
  get trees(){
    return this._trees;  
  }
  
  inputTree(namaPohon,umurPohon,tinggiPohon,umurMature,healthyStatus){
    let tree = { nama: namaPohon, umur: umurPohon, tingg: tinggiPohon, umur_mature: umurMature, healthy_status: healthyStatus};
    this._trees.push(tree);
  }
  showAges(){
    let umurTree = []  ;
    for(var i = 0; i < this.trees.lengt; i++){
      umurTree.push(this.trees[i].umur);
    }
    console.log( umurTree);
  }
  showTrees(){
    let namaTree = []  ;
    for(var i = 0; i < this.trees.lengt; i++){
      namaTree.push(this.trees[i].nama);
    }
    console.log(namaTree);
    
  }
  matureTrees(){
    let matureTree = []  ;
    for(var i = 0; i < this.trees.lengt; i++){
      if(this.tree[i].umur >= this.trees[i].umur_mature){
        matureTree.push(this.trees[i].nama);
      }
    }
    console.log(matureTree);
  }
  deadTrees(){
    let deadTree = []  ;
    for(var i = 0; i < this.trees.lengt; i++){
      if(!this.tree[i].healthy_status ){
        deadTree.push(this.trees[i].nama);
      }
    }
    console.log(deadTree);
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
