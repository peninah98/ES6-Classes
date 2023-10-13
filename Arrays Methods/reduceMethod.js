// Finding products of items in array using reduce method
// Reduce method is not only used in calculating sum or product
// U can use it in scenario where you want to return a single output from array
// Here we are going to use it to find the products of items in array and sum of them

// Lets goo  ***Happy Coding !!!!!!***

const numbers = [1,23,45,56,68]

const product = numbers => numbers.reduce((acc, currentItem)=>acc * currentItem,1)
console.log(product(numbers))


// let us try to find sum of this array

const sum = numbers => numbers.reduce((ac,item)=>ac + item,0)
console.log(sum(numbers))