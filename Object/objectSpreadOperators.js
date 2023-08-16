const obj = {
    age : 20,
    marks : 99
}

const report = {
    name: "Kalisa Belinda",
    ...obj
}

console.log(`Ecole Excellent de Kagarama 
_______________________________
${report.name}
${report.age}
${report.marks}`)

