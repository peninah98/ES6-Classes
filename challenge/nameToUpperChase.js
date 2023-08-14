// function that take array 
// String contain number
// If no number return 0
// If there are number extract them 

function extractNumbers(arr){
let array = [...arr];
let y = array.filter(index => typeof(index !=='string'));
return (y);
}
console.log(extractNumbers(['2factor', '6nine']))



