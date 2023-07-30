const games = new Set(['Super Mario Bros.', 'Banjo-Kazooie', 'Mario Kart', 'Super Mario Bros.']);

games.add('Banjo-Tooie');
games.add('Age of Empires');
games.delete('Super Mario Bros.');
console.log(games);
console.log(games.size)


// 'has method return true if item exist and false if not'
console.log(games.has('Penine'))

// Returning set values we use value method

console.log(games.values())