"use strict"

const Fruit  = require('./fruit');

class FruitTree {

    // Initialize a new MangoTree
    constructor() {
        this._age = 0;
        this._height = 0;
        this._fruits = [];
        this._matureAge = 0;
        this._healthyStatus = true;
        this._stopProduceAge = 0;
        this._stopGrowAge = 0;
        this._dieAge = 0;
        this._fruitProduced = 0;
        this._harvested = {
            'good': 0,
            'bad': 0
        };
    }

    set age(num){
        this._age += num;
        this.addHeight();
        this.updateHealthyStatus();
        this.produceFruits();
    }

    addHeight(){
        if (this._age < this._stopGrowAge) {
            this._height = this._height + (1 + Math.floor(Math.random() * 9));
        }
    }

    isDead(){
        if(this._age > this._dieAge)
            return true;
        else {
            return false;
        }
    }

    updateHealthyStatus(){
        if (this._age > this._dieAge) {
            this._healthyStatus = false;
        }
    }

    get age() {
        return this._age;
    }

    get height() {
        return this._height + ' m';
    }

    get fruits() {
        return this._fruits;
    }

    get healthyStatus() {
        return this._healthyStatus;
    }

    get harvested() {
        return `${this._fruits.length} (${this._harvested.good} good, ${this._harvested.bad} bad)`
    }

    harvest() {
        let fruit = new Object();

        for (let i = 0; i < this._fruitProduced; i++) {
            if (Math.floor(Math.random() * 2)) {
                fruit = new Fruit('good');
                this._harvested.good++;
            } else {
                fruit = new Fruit('bad');
                this._harvested.bad++;
            }
            this._fruits.push(fruit);
        }
    }

    get fruitProduce(){
        return this._fruitProduced;
    }

    produceFruits() {
        if (this._age >= this._matureAge && this._age <= this._stopProduceAge) {
            this._fruitProduced = 1 + Math.floor(Math.random() * 10);
        }
        else{
            this._fruitProduced = 0;
        }
    }

    // Grow the tree
    grow() {
        this.age = 1;
    }

}

module.exports = FruitTree;
