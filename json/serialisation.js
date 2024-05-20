const obj = {
  name: "Peninah98",
  hobby: "Watching cartoons",
  age: undefined,
  car: null,
}

let json = JSON.stringify(obj)
console.log(json)

// During serialisation, all propreties are converted into json format,  including those that have a value of 'undefined' or not assigned yet.
// When it hits the values of undefined it omit it and stringfy other except it.
// That is why here on the snippet above age will be omitted because it is null.

// That is how serialisation work, when we go in backend the undefined data are treated us null because null is being serialised not like undefined
