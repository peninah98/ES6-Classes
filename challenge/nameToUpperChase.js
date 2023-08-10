function names(...str){
    if(str.length === 1){
        return str.toString()
    }

    else{
        let result = str.pop().toUpperCase()
        return str.join('')+result
    }
    
}

console.log(names('hello'))