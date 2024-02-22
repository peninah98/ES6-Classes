const person = {
  name: "Agnes",
  hobby: "Reading",
  skinColor:"Reading"
}
for (let key in person) {
    if(person[key] === "Reading"){
        console.log(`${key}: ${person[key]}`)
    }else{
        continue;
    }
}

// console.log(Object.values(person).forEach((keys) => console.log(keys)))