class Fruit {
    // Produce a mango
    constructor(quality) {
        this._quality = quality;
    }

    get quality() {
        return this._quality;
    }
}

module.exports = Fruit;
