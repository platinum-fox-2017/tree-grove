// const MangoTree = require('./mango_tree.js');
// const AppleTree = require('./apple_tree.js');
// const PearTree = require('./pear_tree.js');

class TreeGrove {
  constructor(){
    this._tree = [];
    this.firstYear = 2012;
    this.currentYear = 2018;
  }

  inputTree(name,firstAge,firstHeight,matureAge,healtyStatus){
    let newTree = {
      name: name,
      firstAge: firstAge,
      firstHeight: firstHeight,
      matureAge: matureAge,
      healtyStatus: healtyStatus
    };
    this._tree.push(newTree);
  }

  nextYear(){
    console.log('Living Trees Age Next Year');
    let nextAges = [];
    for(let i=0; i<this._tree.length; i++){
      if((this._tree[i].firstAge + (this.currentYear - this.firstYear)) < (this._tree[i].matureAge + 3)){
        let agesNow = this._tree[i].firstAge + (this.currentYear - this.firstYear);
        nextAges.push([this._tree[i].name, `Next Year Age is ${agesNow+1} Year`]);
      }
    }
    return nextAges;
  }

  showAge(){
    console.log('Living Trees and Age');
    let ages = [];
    for(let i=0; i<this._tree.length; i++){
      if((this._tree[i].firstAge + (this.currentYear - this.firstYear)) < (this._tree[i].matureAge + 3)){
        let agesNow = this._tree[i].firstAge + (this.currentYear - this.firstYear);
        ages.push([this._tree[i].name, `${agesNow} Year`]);
      }
    }
    return ages;
  }

  showTrees(){
    console.log('Living Trees Now');
    let live = [];
    for(let i=0; i<this._tree.length; i++){
      if((this._tree[i].firstAge + (this.currentYear - this.firstYear)) < (this._tree[i].matureAge + 3)){
        live.push(this._tree[i].name);
      }
    }
    return live;
  }

  matureTrees(){
    console.log('Mature Trees Now');
    let mature = [];
    for(let i=0; i<this._tree.length; i++){
      if((this._tree[i].firstAge + (this.currentYear - this.firstYear)) >= this._tree[i].matureAge){
        mature.push(this._tree[i].name);
      }
    }
    return mature;
  }

  deadTrees(){
    console.log('Dead Trees Now');
    let dead = [];
    for(let i=0; i<this._tree.length; i++){
      if((this._tree[i].firstAge + (this.currentYear - this.firstYear)) >= (this._tree[i].matureAge + 3)){
        dead.push(this._tree[i].name);
      }
    }
    return dead;
  }

}

var grove = new TreeGrove()
// input your trees data !
// parameter ke-1: nama pohon
// parameter ke-2: umur pohon ketika ditanam di taman tersebut
// pamareter ke-3: tinggi pohon pertama kali ketika ditanam di taman tersebut
// parameter ke-4: umur mature pohon tersebut
// parameter ke-5: healthyStatus dari pohon tersebut ketika ditanam
// asumsi pohon bakal mati 3 tahun setelah umur mature
grove.inputTree("OrangeTree", 3, 1.8, 7,true);
grove.inputTree("MangoTree", 5, 2.4, 12,true);
grove.inputTree("AppleTree", 4, 1.2, 5,true);
grove.inputTree("PearTree", 7, 2, 15,true);

// console.log(grove);

// show trees age
console.log(grove.showAge());

// next year
console.log(grove.nextYear());

// show trees
console.log(grove.showTrees());

// show trees
console.log(grove.matureTrees());

// show trees
console.log(grove.deadTrees());
