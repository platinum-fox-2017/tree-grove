"use strict"

class AppleTree {
  constructor(name,age,height,matureAge,healthStatus) {
    this._name = name;
    this._age = age;
    this._height = height;
    this._matureAge = matureAge;
    this._healthStatus = healthStatus;
  }
}

// var apel = new AppleTree('AppleTree', 4, 1.2, 5, true);
// console.log(apel);

module.exports = AppleTree


