const names = (...name) => {
    if (name.length < 3) {
        return 'Not enough';
    } else {
        const lastElement = name[2]
        const result = name.map(element => element + ' '+lastElement);
        return result;
    }
}

console.log(names('Penine', 'Amina', 'Gasana', 'Anania'));
