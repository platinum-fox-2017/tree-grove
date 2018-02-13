const Tree = require('./fruit_tree.js')

class PearTree extends Tree {
  constructor(){
    super()
    this._height = 0
  }
  grow(){
    this._age++
    this._height += Math.floor(Math.random() *10)
    if (this._age > 4) {
      this._healthyStatus = false
    }
    return this
  }
}

module.exports = PearTree
