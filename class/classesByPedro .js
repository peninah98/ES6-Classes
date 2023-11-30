class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    getName =()=>{
        return this.name
    }
    getAge =()=> this.age

}

let person1 = new Person("Clara", 27)
let person2= new Person("Pedro", 12)
console.log(person1.getName())
console.log(person2.getName())

