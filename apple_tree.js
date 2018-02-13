const Tree = require('./tree.js');

class Apple extends Tree {
  constructor() {
    super();
  }
  randomGrowth(){
    return (Math.random()*2)/1.75;
  }

  randomFruits(){
    return (Math.round(Math.random()*25))+1;
  }
}

let appleTree = new Apple();
console.log('Apple Tree~');
do {
  appleTree.grow();
  appleTree.produceMangoes();
  appleTree.harvest();
} while (appleTree.healthyStatus !== false);
