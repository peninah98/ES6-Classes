let mySet = new Set([1,2,3,4,5,4,5,4,5,4,5,4,5])
for(let val of mySet){
    console.log(val)
}

let anObject = {
    name: "John",
    age: 30,
    city: "New York",
    country: "USA",
    hobbies: ["reading","swimming"],
    getName : function(){
        return this.name
    }
}

for(let key in anObject){
    console.log(key)
}

class Person {
    constructor (firstName, lastName, age) {
    }
}

console.log(typeof Person)

let arr1 = [1,2,3,4,5,6,4,5,3,7]
let iterator = arr1[Symbol.iterator]()

console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
let i = [1,2,3,4,6,4]
let iii = i[Symbol.iterator]()
console.log(iii.next())
console.log(iii.next())
console.log(iii.next())
console.log(iii.next())
console.log(iii.next())
console.log(iii.next())
console.log(iii.next())
console.log(iii.next())

console.log('Hello from iterator to generator')


let student = 'Ndiramiye'
let iterata = student[Symbol.iterator]()
console.log(iterata.next())
console.log(iterata.next())
console.log(iterata.next())
console.log(iterata.next())
console.log(iterata.next())
console.log(iterata.next())
console.log(iterata.next())
console.log(iterata.next())
console.log(iterata.next())
console.log(iterata.next())



// Generators

console.log(`_____________________________
Generator Function Example: 
_________________________________________`)

function *generator(){
    yield 1
    yield 2
    yield 3
    yield 4
    yield 5
    yield 6
    yield 7
    yield 7
    yield 8
    yield 9
    yield 10
}

let iteratoor = generator()

console.log(iteratoor.next())
console.log(iteratoor.next())
console.log(iteratoor.next())
console.log(iteratoor.next())
console.log(iteratoor.next())
console.log(iteratoor.next())
console.log(iteratoor.next())
console.log(iteratoor.next())
console.log(iteratoor.next())
console.log(iteratoor.next())
console.log(iteratoor.next())
console.log(iteratoor.next())
console.log(iteratoor.next())


console.log(`
__________________
Infinite generator
___________________
`)

function *infiniteGenerator(){
    let i=0;
    while(true){
        yield i
        i++
    }
}

let iteratorLoop = infiniteGenerator()

console.log(iteratorLoop.next())
console.log(iteratorLoop.next())
console.log(iteratorLoop.next())
console.log(iteratorLoop.next())
console.log(iteratorLoop.next())
console.log(iteratorLoop.next())
console.log(iteratorLoop.next())
console.log(iteratorLoop.next())
console.log(iteratorLoop.next())
console.log(iteratorLoop.next())
console.log(iteratorLoop.next())
console.log(iteratorLoop.next())
console.log(iteratorLoop.next())
console.log(iteratorLoop.next())
console.log(iteratorLoop.next())
console.log(iteratorLoop.next())
console.log(iteratorLoop.next())
console.log(iteratorLoop.next())
console.log(iteratorLoop.next())
console.log(iteratorLoop.next())
console.log(iteratorLoop.next())
console.log(iteratorLoop.next())