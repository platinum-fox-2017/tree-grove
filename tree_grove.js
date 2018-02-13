const MangoTree = require('./mango_tree.js');
const AppleTree = require('./apple_tree.js');
const PearTree = require('./pear_tree.js');

class TreeGrove{
  constructor ()  {
    this._trees = [];
  }
  get trees(){
    return this._trees;  
  }
  
  inputTree(tree){
    this._trees.push(tree);
  }

  nextYear(){
    for(var i = 0; i < this.trees.length; i++){
      this.trees[i].umur++;
    }
  }

  showAges(){
    let umurTree = [];
    for(var i = 0; i < this.trees.length; i++){
      umurTree.push(this.trees[i].umur);
    }
    console.log(`Trees Ages On Grove : ${umurTree.join(', ')}`);
  }
  showTrees(){
    let namaTree = [];
    for(var i = 0; i < this.trees.length; i++){
      namaTree.push(this.trees[i].nama);
    }
    console.log(`Trees On Grove : ${namaTree.join(', ')}`);
  }
  matureTrees(){
    let matureTree = [];
    for(var i = 0; i < this.trees.length; i++){
      if(this.trees[i].umur >= this.trees[i].umur_mature){
        matureTree.push(this.trees[i].nama);
      }
    }

    console.log(`Mature Trees : ${matureTree.join(', ')}`);
  }
  deadTrees(){
    let deadTree = [];
    for(var i = 0; i < this.trees.length; i++){
      if(!this.trees[i].healthy_status ){
        deadTree.push(this.trees[i].nama);
      }
    }
    console.log(`Dead Trees : ${deadTree.join(', ')}`);
  }
  
}

var grove = new TreeGrove()
// input your trees data !
// parameter ke-1: nama pohon
// parameter ke-2: umur pohon ketika ditanam di taman tersebut
// pamareter ke-3: tinggi pohon pertama kali ketika ditanam di taman tersebut
// parameter ke-4: umur mature pohon tersebut
// parameter ke-5: healthyStatus dari pohon tersebut ketika ditanam
grove.inputTree(new MangoTree("MangoTree", 3, 1.8, 7,true))
grove.inputTree(new MangoTree("MangoTree", 5, 2.4, 12,true))
grove.inputTree(new AppleTree("AppleTree", 4, 1.2, 5,true))
grove.inputTree(new PearTree("PearTree", 7, 2, 15,true))
grove.inputTree(new PearTree("PearTree", 7, 2, 15,false))

// next year
grove.nextYear()

// show trees age
grove.showAges()

// show trees
grove.showTrees()

// show trees
grove.matureTrees()

// show trees
grove.deadTrees()
