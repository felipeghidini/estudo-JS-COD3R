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
        type: 'dog',
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
 * Reduce
 * Percorrer todo o array, e reduzi-lo a algo, objeto, item
 */

// const petObject = pets.reduce((petObject, pet) => {
//     petObject.ageSum += pet.age;
//     petObject.weightSum += pet.weight;

//     return petObject
// }, { ageSum: 0, weightSum: 0 })

const dogObject = pets.reduce((dogObject, pet) => {
    if (pet.type !== 'dog') return dogObject;

    dogObject.ageSum += pet.age;
    dogObject.weightSum += pet.weight;

    return dogObject
}, { ageSum: 0, weightSum: 0 })

const totalWeightDogs = pets.filter((pet) => {
    return pet.type === 'dog';
}).reduce((total, pet) => {
    return total + pet.weight;
}, 0)

console.log(totalWeightDogs);
