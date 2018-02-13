const Tree = require('./tree.js');

class PearTree extends Tree {
  constructor(nama,umur,tinggi,umur_mature,healthy_status)  {
    super(nama,umur,tinggi,umur_mature,healthy_status)  ;
  }
}

module.exports = PearTree;
