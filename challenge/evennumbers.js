// Squareroot
const numbers = [1,2,3,4,3,40,2,3,2,2]
const square = (numbers) =>{
    return numbers.map(Math.sqrt)
}

console.log(square(numbers))

// Even numbers
const even =()=>{
    return numbers.filter(element=>element %2 === 0)
}

console.log(even(numbers))
// Adding numbers
const sum =()=>{
    return numbers.reduce((accumulator,currentItem)=>{
        return accumulator + currentItem
    },0)
}


console.log(sum(numbers))

// square number

const squaredOfNumber =()=>{
    return numbers.map((num)=>{
        return num*num
    })
}

console.log(squaredOfNumber(numbers))



// Capitalising the first letter
const capitalise = (string) => {
    return string.split('').map((letter, index) => {
        if (index === 0) {
            return letter.toUpperCase();
        } else {
            return letter;
        }
    }).join('');
}

console.log(capitalise('mama'));



// capilise the first name

const capitiliseName = (...rest) =>{
    return rest.map((restName,position)=>{
        if(position === 0){
            return restName.toUpperCase();
        }

        else{
            return restName
        }
    }).join('')
}

console.log(capitiliseName('rwanda','Nziza','You'))
