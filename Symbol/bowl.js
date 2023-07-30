const bowl = {
    banana : {
        color :'Yellow',
        weight: 123
    },
    orange : {
        color:'Orange',
        weight:456,
        taste:"Sweet"

    },
    orange : {
        color:'Orange',
        weight:456,
        taste:"bitter"
        
    }
}

console.log(bowl)

// in this case the last bannana overwrites the first one
// to solve this lets use symbol and see what will happen

const bowlSymbol = {
    [Symbol('apple')]: { color: 'red', weight: 136.078 },
    [Symbol('banana')]: { color: 'yellow', weight: 183.15 },
    [Symbol('orange')]: { color: 'orange', weight: 170.097 },
    [Symbol('banana')]: { color: 'yellow', weight: 176.845 }
  };
  console.log(bowlSymbol);


  const a = Symbol('bobo')
  const b = Symbol('bobo')

  console.log(a === b)

  console.log(typeof a)

//   symbol.for() method it takes key as argument and searches for the existing of that key and return it if not exist it create 
// it with given key in global symbol registry


const userId = Symbol.for('user')
const user_Id = Symbol.for('user')
console.log(userId === user_Id)


const student = Symbol('Penine')
const bestStudent = Symbol('Penine')

console.log(student == bestStudent)
console.log(student)

console.log(Symbol.keyFor(user_Id))