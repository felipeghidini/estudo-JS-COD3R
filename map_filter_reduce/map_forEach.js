const pets = [
    {
        name: 'rex',
        type: 'dog',
        age: 7,
        weight: 7.5
    },
    {
        name: 'calisto',
        type: 'turtle',
        age: 2,
        weight: 0.20
    },
    {
        name: 'chase',
        type: 'fish',
        age: 1,
        weight: 0.1
    },
    {
        name: 'booh',
        type: 'bird',
        age: 3,
        weight: 0.2
    },
    {
        name: 'james',
        type: 'rabbit',
        age: 12,
        weight: 2
    },
]

/**
 * Map
 * Retornar um novo array com a mesma quantidade de elementos
 * que o array inicial 
 */

// const petNames = pets.map((pet) => {
//     return pet.name;
// })

// console.log(petNames);

/**
 * ForEach
 * Não retorna um novo array com a mesma qtde de elementos
 */

const forEachPetNames = [];

pets.forEach((pet) => {
    forEachPetNames.push(pet.name);
})

console.log(forEachPetNames);