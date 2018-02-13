const MangoTree = require('./mango_tree.js');
const AppleTree = require('./apple_tree.js');
const PearTree = require('./pear_tree.js');


class TreeGrove {
	constructor(){
		this.trees = []

	}
	inputTree(name,ageTree,heightTree,matureAge,healthy){
		let objTree;
		if(name === 'MangoTree'){
			objTree = new MangoTree(name,ageTree,heightTree,matureAge,healthy)
		}
		else if(name === 'AppleTree'){
			objTree = new AppleTree(name,ageTree,heightTree,matureAge,healthy)
		}
		else if(name === 'PearTree'){
			objTree = new PearTree(name,ageTree,heightTree,matureAge,healthy)
		}
		this.trees.push(objTree)
		return this.trees
	}

	nextYear(){
		for(let i=0;i<this.trees.length;i++){
			// console.log(this.trees[i].ageTree,'before')
			this.trees[i].ageTree+=1
			// console.log(this.trees[i].ageTree,'after')
		}
		return this.trees.ageTree

	}

	showAge(){
		let ages=`---Kebun buah-buah---memiliki ${this.trees.length} pohon dengan umur:`
		for(let i =0;i<this.trees.length;i++){
			ages+=`\n Umur pohon ${this.trees[i].name} saat ini adalah ${this.trees[i].ageTree}`
		}
		return ages

	}
	showTrees(){
		let pohon = `---Kebun buah-buah---memiliki ${this.trees.length} pohon,yaitu:`
		for(let i=0;i<this.trees.length;i++){
			pohon+= `\n ${i+1}. ${this.trees[i].name}`
		}
		return pohon

	}
	mature_trees(){
		let pohonMature = `---Kebun buah-buah---pohon yang sedang berbuah adalah:`
		for(let i =0;i<this.trees.length;i++){
			if(this.trees[i].ageTree >= this.trees[i].matureAge && this.trees[i].ageTree< this.trees[i].maxAge){
				pohonMature+= ` \n ${this.trees[i].name} `
			}
		}
		return pohonMature


	}
	dead_trees(){
		let pohonMati  = `---Kebun buah-buah---pohon yang sudah mati adalah:`
		for(let i =0;i<this.trees.length;i++){
			if(this.trees[i].ageTree >= this.trees[i].maxAge){
				pohonMati+= `\n ${this.trees[i].name}`
			}
		}
		return pohonMati
	}

}

let grove = new TreeGrove()
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
// console.log(grove)
// console.log(grove.nextYear())
console.log(grove)
// next year
grove.nextYear()
grove.nextYear()
grove.nextYear()
grove.nextYear()
grove.nextYear()
grove.nextYear()
grove.nextYear()
grove.nextYear()

// // show trees age
console.log(grove.showAge())

// // show trees
console.log(grove.showTrees())

// // show trees
console.log(grove.mature_trees())

// // show trees
console.log(grove.dead_trees())
