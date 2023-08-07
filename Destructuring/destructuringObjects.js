// ES5

const user = {
    name : 'Gasto',
    age : 30

}

const name = user.name
const age = user.age
 user.school = 'Gym'
console.log(user) 

// Es6 destructuring
const person = {
    tel : '0782602290',
    email : 'me@gmail.com'
}
const {tel,email} = user
// console.log(user.tel)


// Extract elements from object and assign them to new variables

const car = {
    model : 'BMW',
    color : 'Red'
}

const {model: Brand, color:Look} = car
console.log(Object.values(car))
console.log(Object.entries(car))
console.log(Object.keys(car))

console.log(Brand)