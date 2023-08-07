// They help us expand arrays and other expressions where multiple parameters or elements are expected
const arr = [6,34,43,5]
var maximum = Math.max.apply(arr)

console.log(maximum)
// this line of code perfomes the same task as line 3 does it
console.log(Math.max(1,2,3,43,67,100))

const  arr2 = Math.max(...arr)
console.log(arr2)

// pread operators to copy arr into another

const arr3 = [...arr]
console.log(`Spread operator to copy an array into onether ${arr3}`)