const MangoTree = require('./mango_tree.js');
const AppleTree = require('./apple_tree.js');
const PearTree = require('./pear_tree.js');

class TreeGrove {
    constructor() {
        this._treeArr = new Array();
    }

    inputTree(name, age, height, matureAge, healthyStatus) {
        // Menerima inputan pohon (jenis dan umur)
        switch (name) {
            case 'MangoTree':
                this._treeArr.push(new MangoTree(age,height,matureAge,healthyStatus));
                break;
            case 'AppleTree':
                this._treeArr.push(new AppleTree(age,height,matureAge,healthyStatus));
                break;
            case 'PearTree':
                this._treeArr.push(new PearTree(age,height,matureAge,healthyStatus));
                break;
        }
    }

    create_tree(name) {
        switch (name) {
            case 'MangoTree':
                break;
            case 'AppleTree':
                break;
            case 'PearTree':
                break;
        }
    }

    show_ages() {
        // Memberi tahu umur setiap pohon
        for(let i = 0; i < this._treeArr.length; i++){
            console.log(`${this._treeArr[i].constructor.name} \t\t\t=> Usia: ${this._treeArr[i].age} tahun`);
        }
    }

    show_trees() {
        // Memberi tahu semua nama pohon di taman
        let tempArray = new Array();
        for(let i = 0; i < this._treeArr.length; i++){
            tempArray.push(this._treeArr[i].constructor.name);
        }
        return `Pohon yang ada di taman\t\t: ${tempArray}`;
    }

    mature_trees() {
        // Memberi tahu nama pohon yang berbuah
        let tempArray = new Array();
        for(let i = 0; i < this._treeArr.length; i++){
            if(this._treeArr[i].fruitProduce>0){
                tempArray.push(this._treeArr[i].constructor.name);
            }
        }
        return `Pohon yang sedang berbuah\t: ${tempArray}`;
    }

    dead_trees() {
        // Memberi tahu nama pohon yang mati
        let tempArray = new Array();
        for(let i = 0; i < this._treeArr.length; i++){
            if(this._treeArr[i].isDead()){
                tempArray.push(this._treeArr[i].constructor.name);
            }
        }
        return `Pohon yang sudah mati\t\t: ${tempArray}\n`;
    }

    nextYear() {
        for(let i = 0; i < this._treeArr.length; i++){
            this._treeArr[i].age = 1;
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
grove.inputTree("MangoTree", 3, 1.8, 7, true)
grove.inputTree("MangoTree", 5, 2.4, 12, true)
grove.inputTree("AppleTree", 4, 1.2, 5, true)
grove.inputTree("PearTree", 7, 2, 15, true)

console.log(grove._treeArr);
// next year
grove.nextYear()
console.log(grove._treeArr);

// show trees age
grove.show_ages();

// show trees
console.log(grove.show_trees());

// show trees
console.log(grove.mature_trees());

// show trees
console.log(grove.dead_trees());

for(let i = 0;i<15;i++){
    grove.nextYear()

    // show trees age
    grove.show_ages();

    // show trees
    console.log(grove.show_trees());

    // show trees
    console.log(grove.mature_trees());

    // show trees
    console.log(grove.dead_trees());
}
