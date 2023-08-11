const combineNames = (...rest)=>{

    if(rest.length === 1){
        return rest
    }

    else{
        const result = []
        for(let i = 0; i< rest[0].length; i++){
            rest.map((item)=>{
                result.push(item[i])
            })
        }
        return result
    }
}

console.log(combineNames([1,2,3,4],['a','d','w','t']))