const Tree = require('./tree.js');

class AppleTree extends Tree {
  constructor(nama,umur,tinggi,umur_mature,healthy_status)  {
    super(nama,umur,tinggi,umur_mature,healthy_status);
  }
}
module.exports = AppleTree;
