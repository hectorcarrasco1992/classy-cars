class Vehicle {
  constructor(name,wheelCount,maxSpeed){
    this.name = name
    this.wheelCount = wheelCount
    this.maxSpeed = maxSpeed
    this.speed = 0
    
  }

  accelerate (){
    if(this.speed<this.maxSpeed){
      this.speed += (this.maxSpeed/3)
    }
  }
}

class Car extends Vehicle{
  constructor(name){
    super(name,4,130)
    this.name = name
    
  }
  drive(){
    return 'Vroom. '
  }
  
}

class Ferrari extends Car {
  constructor(name){
    super(name,4,180)
    this.name = 'Ferrari'
    this.maxSpeed = 180
  }

  drive(){
    return 'Vroom. I\'m a Ferrari!'
  }

  accelerate(){
    if(this.speed<this.maxSpeed){
      this.speed += (this.maxSpeed/2)
    }

  }
}


module.exports = {
  Vehicle,
  Car,
  Ferrari
}