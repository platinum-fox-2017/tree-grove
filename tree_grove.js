'use strict'

const fileMango = require('./mango_tree.js');
var mangoTree = fileMango.MangoTree
const fileApple = require('./apple_tree.js');
var appleTree = fileApple.AppleTree
const filePear = require('./pear_tree.js');
var pearTree = filePear.PearTree

class TreeGrove {
  constructor(){
    this.arrGrove=[]
    this.mature=[]
    this.dead=[]
  }

  inputTree(name,umur,tinggi,maksUmur,status){
    if(name==="MangoTree"){
      var mangoArr=[]
      var newMango = new mangoTree()
       newMango.umur=umur
       newMango.tinggi=tinggi
       newMango.maksUmur=maksUmur
       newMango.status=status
       this.arrGrove.push(newMango)

    }
    else if(name==="AppleTree"){
      var newApple = new appleTree()
       newApple.umur=umur
       newApple.tinggi=tinggi
       newApple.maksUmur=maksUmur
       newApple.status=status
       this.arrGrove.push(newApple)
    }
    else if(name==="PearTree"){
      var newPear = new pearTree()
       newPear.umur=umur
       newPear.tinggi=tinggi
       newPear.maksUmur=maksUmur
       newPear.status=status
       this.arrGrove.push(newPear)
    }
  }
  nextYear(tambahUmur){
    for(let i=0;i<this.arrGrove.length;i++){
      if(this.arrGrove[i].umur+tambahUmur>this.arrGrove[i].maksUmur){
        this.dead.push(this.arrGrove[i].name)
      }
      else if(this.arrGrove[i].umur+tambahUmur<=this.arrGrove[i].maksUmur){
        this.mature.push(this.arrGrove[i].name)
      }
    }

  }

  showAge(){
    for(let i=0;i<this.arrGrove.length;i++){
      console.log('Umur pohon '+this.arrGrove[i].name+' : '+this.arrGrove[i].umur+' tahun')
    }
  }

  showTrees(){
    console.log('\nPohon yang ada di taman yaitu :')
    for(let i=0;i<this.arrGrove.length;i++){
      console.log(this.arrGrove[i].name)
    }
  }

  mature_trees(){
    console.log('\nPohon yang masih berbuah :')
    for(let i=0;i<this.mature.length;i++){
      console.log(this.mature[i])
    }
  }

  dead_trees(){
    console.log('\nPohon yang sudah mati :')
    for(let i=0;i<this.dead.length;i++){
      console.log(this.dead[i])
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


//console.log(newMango)
// next year
grove.nextYear(5)

// show trees age
grove.showAge()

// show trees
grove.showTrees()

// show trees
grove.mature_trees()

// show trees
grove.dead_trees()
