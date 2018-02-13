class FruitTree {
    // Initialize a new MangoTree
    constructor(name,age, height, matureAge, healthyStatus) {
      this._name   = name;
      this._age    = age;
      this._height = height;
      this._healthyStatus = healthyStatus;
      this._matureAge = matureAge;
      this._dieAge = 30;
    }
    
    get name() {
        return this._name;
    }

    get age() {
      return this._age;
    }
  
    get height() {
      return this._height;
    }
   
    get healthyStatus() {
      return this._healthyStatus;
    }
    
    get matureAge() {
        return this._matureAge;
    }

    get dieAge() {
        return this._dieAge;
    }

    grow() {
      let stopGrow  = 10;
  
      if (this._age < this._matureAge) {
        this._age = this._age + 1;
        this._height   = this._height + Math.floor((Math.random() * 4) + 1);
      } else if (this._age >= this._matureAge && this._age < stopGrow) {
        this._age      = this._age + 1;
        this._height   = this._height + Math.floor((Math.random() * 4) + 1);
      } else if (this._age >= stopGrow && this._age < this._dieAge) {
        this._age      = this._age + 1;
      } else {
        this._healthyStatus = false;
      }
    }
}

module.exports = FruitTree;