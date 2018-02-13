'use strict'

class FruitTree {
    constructor(name,age,height,matureAge,healthyStatus) {
        this._name = name
        this._age = age
        this._height = height
        this._matureAge = matureAge
        this._healthyStatus = healthyStatus
    }

    get age() {
        return this._age;
    }
    
    get height() {        
        return this._height;
    }
    
    get fruits() {
        return this._fruits;
    }
    
    get healthyStatus() {
        return this._healthyStatus
    }

    grow() {
        if(this.healtyStatus) {
            this._age++;
            if(this.age<=this._matureAge) {
                this._height+=Number((this._tree[i]._height/25).toFixed(2));
            }
            if(this.age>=20) this._healtyStatus=false;
        }   
    }
}

module.exports = FruitTree;
