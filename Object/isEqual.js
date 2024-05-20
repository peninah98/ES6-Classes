const obj1 = {
  name: "Penine",
  hobby: "Reading a book",
}

const obj2 = {
  name: "Penine",
  hobby: "Reading a book",
}

function isSubSet(obj1, obj2) {
  let first = Object.keys(obj1).flat()
  let second = Object.keys(obj2).flat()
  let result = new Set(first.concat(second))
  return result.size === first.length ? true : false
}

console.log(isSubSet(obj1, obj2))
