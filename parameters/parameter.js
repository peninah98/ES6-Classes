// In this situation name is the parameter passed to the function during the declaration 
function displayName(name, name2, name3){
    return [name, name2, name3]
}
// Penina is the argumento of this function as it is passed during the function call
// The agruments are the actual values function take
console.log(displayName("Penina", "Agnes", "Yves"))

console.log(arguments[0]);

