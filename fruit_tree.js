class FruitTree {
    constructor(name,ageTree,heightTree,matureAge,healthy) {
      this.name = name
      this.ageTree = ageTree
      this.heightTree = heightTree
      this.healthy = healthy
      this.matureAge = matureAge
      this.maxAge = Math.floor(Math.random()*(20-this.matureAge)+this.matureAge)
    }
  
    get age() {
      return this.ageTree
    }
  
    get height() {
      return this.heightTree
  
    }
  
    get fruits() {
      return this.totalFruit
    }
  
    get healthyStatus() {
      return this.healthy
    }
  
    get harvested() {
      return this.harvestFruit
  
    }


  // Get some fruits
  harvest() {
    let countRipe = 0
    let countRotten = 0
    for(let i=0;i<this.totalFruit.length;i++){
      // console.log(this.totalFruit[i].qualityFruit,'total')
      if(this.totalFruit[i].qualityFruit ==='Ripe'){
        countRipe++
      }else{
        countRotten++
      }
    }
    this.totalFruit.length = 0
    this.harvestFruit = `${countRipe+countRotten} fruits (${countRipe} ripe, ${countRotten} rotten)`
    return this.harvestFruit
	}
	 // Produce some mangoes
	 produceFruits() {
    let random = Math.ceil(Math.random()*this.maxAge*5)
    for(let i =0;i<random;i++){
      let fruit = new Fruit()
      this.totalFruit.push(fruit)
    }
    return this.totalFruit
  }
}
  
  class Fruit {
    constructor() {
      this.qualityFruit = this.quality_check()
    }
    quality_check(){
      let random = Math.round(Math.random()*1)
      if(random === 0){
        this.qualityFruit = 'Ripe'
      }else{
        this.qualityFruit = 'Rotten'
      }
      return this.qualityFruit
    }
  }

module.exports = FruitTree