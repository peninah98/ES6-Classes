function addNames(...names){
    if(names.length < 3){
        return 'Not enough names'
    }

    else{
        const lastName = names[2]
        const result = names.map((item,index)=>index !== 2 ? item + ' ' + lastName : item)
        return result.filter((_,index)=>index !== 2)

    }
}

console.log(addNames('Penina','Gasangwa','Fabien','Alain','Elsiee'))



gunction *generator(){
    let i = 1

while(true){
    yield (i)
    i++
}
}

let iteraror = generator()

console.log(iteraror.next().value)