const combineArrays = (...params)=>{

    if(params.length == 1){
        return params
    }

    else{
         let rest = []
      for(let i = 0; i < params.length; i++){
          params.forEach((item)=>{
            rest.push(item[i])

          })
         }  
       return rest
    }

}

console.log(combineArrays([1,2,3],[3,4,5],['Penina','Gasangwa','Fabien',]))