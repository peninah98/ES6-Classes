//Impure functions are the functions that produces the different output to the same input when it is called
// It is the opposite of the pure functions that produces the same output to the same input regardless the times it is called
let total = 0

function updateTotal(value){
    total +=value
    return total
}

console.log(updateTotal(5));
console.log(updateTotal(5));
console.log(updateTotal(5));
console.log(updateTotal(5));
console.log(updateTotal(5));


