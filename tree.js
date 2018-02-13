class Tree{
    constructor(name, age, height, matureAge, healthyStatus, deadAges){
        this._name = name;
        this._age = age;
        this._height = height;
        this._matureAge = matureAge;
        this._healthyStatus = healthyStatus;
        this._deadAges = deadAges;
    }

    get name(){
        return this._name;
    }

    set age(value){
        this._age = value;
    }

    get age(){
        return this._age;
    }

    set height(value){
        this._height = value;
    }

    get height(){
        return this._height;
    }

    get matureAge(){
        return this._matureAge;
    }

    set healthyStatus(value){
        this._healthyStatus = value;
    }

    get healthyStatus(){
        return this._healthyStatus;
    }

    get deadAges(){
        return this._deadAges;
    }
}

module.exports = Tree;