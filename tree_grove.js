const MangoTree = require('./mango_tree2.js');
const AppleTree = require('./apple_tree2.js');
const PearTree = require('./pear_tree2.js');

// console.log(AppleTree);

class TreeGrove {
    constructor() {
        this._tree = [];
    }

    inputTree(name,age,height,matureAge,healthStatus) {
        if (name == 'AppleTree') {
            this._tree.push(new AppleTree(name,age,height,matureAge,healthStatus));
        } else if (name == 'MangoTree') {
            this._tree.push(new MangoTree(name,age,height,matureAge,healthStatus));
        } else if (name == 'PearTree') {
            this._tree.push(new PearTree(name,age,height,matureAge,healthStatus));
        }
    }


    show_ages() {

        var arrUmur = [];
        for (var i = 0; i < this._tree.length; i++) {
            arrUmur.push([]);
            arrUmur[i].push(this._tree[i]._name);
            arrUmur[i].push(this._tree[i]._age);
        }
        return arrUmur;
    }

    show_trees() {

        var arrPohon = [];
        for (var i = 0; i < this._tree.length; i++) {
            arrPohon.push(this._tree[i]._name);
        }
        return arrPohon;

    }

    mature_trees() {

        var arrMatureTrees = [];
        for (var i = 0; i < this._tree.length; i++) {
            arrMatureTrees.push([]);
            if (this._tree[i]._age > this._tree[i]._matureAge) {
                arrMatureTrees[i].push(this._tree[i]._name);
                arrMatureTrees[i].push(this._tree[i]._age);
                arrMatureTrees[i].push('Pohon sudah berbuah !');
            } else {
                arrMatureTrees[i].push(this._tree[i]._name);
                arrMatureTrees[i].push(this._tree[i]._age);
                arrMatureTrees[i].push('Pohon belum berbuah !');
            }
        }
        return arrMatureTrees;
    }

    dead_trees() {

        var arrDeadTrees = [];
        for (var i = 0; i < this._tree.length; i++) {
            arrDeadTrees.push([]);
            if (this._tree[i]._healthStatus = false) {
                arrDeadTrees[i].push(this._tree[i]._name);
                arrDeadTrees[i].push('Pohon sedang sakit dan akan mati !');
            } else {
                arrDeadTrees[i].push(this._tree[i]._name);
                arrDeadTrees[i].push('Pohon masih sehat !');
            }
        }
        return arrDeadTrees;
    }


    nextYear() {

        for (var i = 0; i < this._tree.length; i++) {
            this._tree[i]._age += 1;
        }
        return this._tree;        
    }

}

var grove = new TreeGrove()

// console.log(grove);

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

// console.log(grove);


// // next year
console.log(grove.nextYear());

// // show trees age
// console.log(grove.show_ages());

// // show trees
// console.log(grove.show_trees());

// // show mature trees
// console.log(grove.mature_trees());

// // show dead trees
// console.log(grove.dead_trees());
