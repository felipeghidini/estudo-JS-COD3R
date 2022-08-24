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
        weight: 1
    },
    {
        name: 'chase',
        type: 'fish',
        age: 1,
        weight: 1
    },
    {
        name: 'booh',
        type: 'bird',
        age: 3,
        weight: 2
    },
    {
        name: 'james',
        type: 'rabbit',
        age: 12,
        weight: 2
    },
]

const totalWeight = pets.reduce((total, pet) => {
    return total + pet.weight;
}, 0)

console.log(totalWeight);

const totalWeight2 = pets.reduce((total, pet) => {
    return {
        totalAge: total.totalAge + pet.age,
        totalWeight: total.totalWeight + pet.weight
    }
}, { totalAge: 0, totalWeight: 0 })

console.log(totalWeight2);


// const pets = [
//     {
//         name: 'rex',
//         type: 'dog',
//         age: 10
//     },
//     {
//         name: 'calisto',
//         type: 'turtle',
//         age: 2
//     },
//     {
//         name: 'chase',
//         type: 'fish',
//         age: 1
//     },
// ]

// const eMenorQueCinco = (numero) => {
//     return numero < 5
// }

// const newPets = pets.filter(({ age }) => eMenorQueCinco(age));

// console.log(pets);
// console.log(newPets);