console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados);

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0]);
console.log(aprovados[1]);
console.log(aprovados[2]);
console.log(aprovados[3]);

aprovados[3] = 'Abia'
aprovados.push('Paulo') // push adiciona elementos no array
console.log(aprovados.length);

aprovados[9] = 'Rafael'
console.log(aprovados.length);
console.log(aprovados[8] === undefined);

console.log(aprovados);
aprovados.sort(); // Ordena os elementos do Array
console.log(aprovados);

delete aprovados[1]
console.log(aprovados[1]);
console.log(aprovados[2]);

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 0, 'Elemento1', 'Elemento2') // Serve para add ou remover elementos a partir de um determinado índice
console.log(aprovados);
aprovados.splice(1, 2, 'Elemento2') // Serve para add ou remover elementos a partir de um determinado índice
console.log(aprovados);




