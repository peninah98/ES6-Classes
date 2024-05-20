const workers = ["Debugger", "Aggy", "Totto",  "Spike",1, null,  undefined];
let stringfiedWorkers = JSON.stringify(workers)
console.log(stringfiedWorkers);

// When a serialisation hits undefined in the array  it will be replaced with "[null]" instead of being removed from the array.
//"["Debugger","Aggy","Totto","Spike",1,null,null
// Unlike in the object it omit the undefined  value and keep the other values as they are.