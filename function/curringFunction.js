function add(a, b) {
  return a - b
}

// Transforming a regular function to currying function

function add(a) {
  return function (b) {
    return a - b
  }
}

const result = add(10)
console.log(result(3))
