const COLOR = Symbol()
const MODEL = Symbol()
const MAKE = Symbol()

class Car {
    constructor(color,make, model) {
        this[COLOR] = color
        this[MAKE] = make
        this[MODEL] = model

    }
}


let car = new Car('Black','Benz', 'Cross country')
console.log(car)

console.log(car[MODEL])