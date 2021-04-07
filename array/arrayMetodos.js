const pilotos = ['Alonso', 'Massa', 'Hamilton', 'Vettel']
pilotos.pop(); // Pop exclui o último elemento do array
console.log(pilotos);

pilotos.push('Schumacher')
console.log(pilotos);

pilotos.shift() // Remove o primeiro elemento do Array
console.log(pilotos);

pilotos.unshift('Senna') // add no primeiro elemento do array
console.log(pilotos);

// splice pode adicionar e remover elementos

// adicionar
pilotos.splice(2, 0, 'Bottas', 'Vettel')
console.log(pilotos);

// remover
pilotos.splice(3, 1)
console.log(pilotos);

const algunsPilotos1 = pilotos.slice(2) // novo array a partir do elemento desejado
console.log(algunsPilotos1);

const algunsPilotos2 = pilotos.slice(1, 4) // novo array a partir do elemento desejado
console.log(algunsPilotos2);
