// const MangoTree = require('./mango_tree.js');
// const AppleTree = require('./apple_tree.js');
// const PearTree = require('./pear_tree.js');

class TreeGrove {
    constructor(){
        this._tree = []
        this._ageOfTree = [] // 3, 4, 7  simpan umur saat ditanam
    }
    
    // memasukkan data pohon saat ini, menerima jenis pohon apapun dan umur berapapun
    inputTree(name, age, height, mature, health){
        let objTree = {} 
        objTree.name = name
        objTree.age = age
        objTree.height = height
        objTree.mature = mature
        objTree.health = health
        this._tree.push(objTree)
        this._ageOfTree.push(age)
    }
    // 
    nextYear(){
        for(let i=0; i<this._tree.length; i++){
            this._tree[i].age += 1
        }
    }
    // memberi tahu umur setiap pohon yang ada di taman
    show_ages(){ //
        console.log('===UMUR POHON=========')
        let showAgesArr = [] 
        for(let i=0; i<this._tree.length; i++){
            showAgesArr.push(`${this._tree[i].name} = ${this._tree[i].age} tahun`)
        }
        return showAgesArr.join('\n')
    }

    // mereturn semua pohon yang ada di taman
    show_trees(){
        console.log('===BANYAK POHON=========')
        let showTreeArr = []
        let count = 0
        for(let i=0; i<this._tree.length; i++){
            count++;
            showTreeArr.push(`${this._tree[i].name}`)
        } 
        return showTreeArr.join(', ') + 'Sebanyak ('+ count +' Pohon)'
    }

    // akan mereturn nama pohon yang sedang berbuah
    mature_trees(){
        console.log('===POHON BERBUAH=========')
        let matureTreeArr = [];
        for(let i=0; i<this._tree.length; i++){
            if(this._tree[i].age >= this._tree[i].mature && this._tree[i].health === true){
                matureTreeArr.push(`${this._tree[i].name}`)
            }
        }
        return matureTreeArr.join('\n')
    }

    // mereturn nama-nama pohon yang mati di taman tersebut
    dead_trees(){ // 10 tahun setelah berbuah akan mati
        console.log('===POHON MATI=========')
        let deadTreeArr = []
        for(let i=0; i<this._tree.length; i++){
            let takdir = this._ageOfTree
            if(this._tree[i].age >= (takdir[i] + 10)){
                this._tree[i].health = false
                deadTreeArr.push(`${this._tree[i].name}`)
            } 
        }
        return deadTreeArr.join('\n')

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
grove.inputTree("AppleTree", 4, 1.2, 5,true)
grove.inputTree("PearTree", 7, 2, 15,true)

console.log(grove)
// next year
grove.nextYear()
grove.nextYear()
grove.nextYear()
grove.nextYear()
grove.nextYear()

// show trees age
console.log(grove.show_ages())

// show trees
console.log(grove.show_trees())

// show trees
console.log(grove.dead_trees())

// show trees
console.log(grove.mature_trees())