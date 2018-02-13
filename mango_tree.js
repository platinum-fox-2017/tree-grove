const Tree = require('./tree.js');

class Mango extends Tree {
  constructor() {
    super();
  }
}

let mangoTree = new Mango();
console.log('Mango Tree~');
do {
  mangoTree.grow();
  mangoTree.produceMangoes();
  mangoTree.harvest();
} while (mangoTree.healthyStatus !== false);
