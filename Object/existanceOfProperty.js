const person = {
  name: "Penine",
  citizenship: "Rwandan",
  university: "UR-CST",
  department: "CSE",
}

console.log("name" in person)

// Other way

console.log(person.hasOwnProperty("name"))

// Other way
console.log(person.name !== undefined)
