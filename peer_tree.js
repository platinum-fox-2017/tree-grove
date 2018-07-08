const Tree = require('./tree.js');

class Peer extends Tree {
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

let peerTree = new Peer();
console.log('Peer Tree~');
do {
  peerTree.grow();
  peerTree.produceMangoes();
  peerTree.harvest();
} while (peerTree.healthyStatus !== false);
