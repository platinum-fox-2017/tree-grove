const MangoTree = require('./mango_tree.js');
const AppleTree = require('./apple_tree.js');
const PearTree = require('./pear_tree.js');

class TreeGrove {
	constructor() {
		this._trees = [];
	}

	inputTree(name, age, height, mature_age, healthyStatus) {
		if (name == 'MangoTree') this._trees.push(new MangoTree(name, age, height, mature_age, healthyStatus));
		else if (name == 'AppleTree') this._trees.push(new AppleTree(name, age, height, mature_age, healthyStatus));
		else if (name == 'PearTree') this._trees.push(new PearTree(name, age, height, mature_age, healthyStatus));
	}

	nextYear() {
		for (var i = 0; i < this._trees.length; i++) this._trees[i]._age++;
	}

	showAge() {
		for (var i = 0; i < this._trees.length; i++) {
			console.log(`${this._trees[i]._name} umur ${this._trees[i]._age} tahun.`);	
		}
	}

	showTrees() {
		for (var i = 0; i < this._trees.length; i++) {
			console.log(`${this._trees[i]._name}`);	
		}
	}

	mature_trees() {
		for (var i = 0; i < this._trees.length; i++) {
			if (this._trees[i]._age == this._trees[i]._mature_age) console.log(`${this._trees[i]._name} sedang berbuah`);
		}
	}

	dead_trees() {
		for (var i = 0; i < this._trees.length; i++) {
			if (this._trees[i]._age >= this._trees[i]._max_age) console.log(`${this._trees[i]._name} mati`);
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
