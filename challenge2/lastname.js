const names = (...name) => {
    if (name.length < 3) {
        return 'Not enough';
    } else {
        const lastElement = name[2]
        return name.map((element) =>{
            if(element=lastElement){
                return
            }
          else{
           return element + ' '+lastElement
          }
             
       
        }).join(' ');
    }
}

console.log(names('Penine', 'Amina', 'Gasana', 'Anania'));
