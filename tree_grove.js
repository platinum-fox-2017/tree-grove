const MangoTree = require('../../senin/mango-tree/mango_tree.js');
const Apple = require('../../senin/mango-tree/apple_tree.js');
const Pear = require('../../senin/mango-tree/pear_tree.js');
class TreeGrove{
  constructor(){
    this.tanaman=[]
    this._maxyears=0
  }

  inputTree(name,age,height,mature,healthy){
    if(name==='MangoTree'){
      var manggo = new MangoTree()
      this.tanaman.push(manggo.addtanaman(name,age,height,mature,healthy));
    }
    else if(name==='AppleTree'){
      var apel = new Apple()
      this.tanaman.push(apel.addtanaman(name,age,height,mature,healthy));
    }
    else if(name === 'PearTree'){
      var pear = new Pear()
      this.tanaman.push(pear.addtanaman(name,age,height,mature,healthy));
    }

  }

  showAge(){
    for(let i=0;i<this.tanaman.length;i++){
      console.log('umur pohon = '+this.tanaman[i]._age)
    }
  }

  showTrees(){
    for(let i=0;i<this.tanaman.length;i++){
      console.log('nama tanaman = '+this.tanaman[i]._namatanaman)
    }
  }

  mature_trees(){
    for(let i=0;i<this.tanaman.length;i++){
      if(this.tanaman[i]._mature < this._maxyears){
        console.log(this.tanaman[i]);
      }
    }
  }

  dead_trees(){
    for(let i=0;i<this.tanaman.length;i++){
      if(this.tanaman[i]._mature > this._maxyears){
        console.log(this.tanaman[i]);
      }
    }
  }

  nextYear(maxyears){
    this._maxyears=maxyears
    return this
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

grove.nextYear(10)

console.log('================show trees age ================');
grove.showAge()

console.log('================ show trees ================');
grove.showTrees()

console.log('================ show matures trees ================');
grove.mature_trees()

console.log('================ show dead trees ================');
grove.dead_trees()
