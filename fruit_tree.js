class FruitTree{
  constructor(age,height,fruits,harvest,healtyStatus) {
    this._height = 0
    this._age = 0
    this._healthStatus = true
  }

  get age() {
    return this._age
  }

  get height() {
    return this._height
  }

  get fruits() {
    return this._fruits

  }

  get healthyStatus() {
    return this._healthStatus
  }


  get harvested() {
    return this._harvest
  }

}

module.exports = FruitTree
