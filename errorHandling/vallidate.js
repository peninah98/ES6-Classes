function userData() {
  try {
    validateUser('23')
    validateUser("Invalid")
    validateUser("Invalid")
    validateUser([2, 3, 4, 6])
  } catch (error) {
    console.error(`Error: ${error.message}`)
  }
}
// function validateUser(age) {
//   typeof age !== "number"
//     ? throw new Error("Age must be a number")
//     : console.log("User age is invalid")
// }

function validateUser(age) {
  if (typeof age !== "number") throw new Error("Age must be a number")
  else {
    console.log("User age is valid")
  }
}

userData()
