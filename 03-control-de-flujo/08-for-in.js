// example

// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 30
// };

// for (let key in person) {
//     console.log(`${key}: ${person[key]}`);
// }

let user = {
    name: 'John',
    age: 30,
    id: '1',
}

for (let key in user) {
    console.log(`${key}: ${user[key]}`);
}


// ejemplo en array
let animales = ['perro', 'gato', 'pez', 'loro'];

for (let indice in animales) {
    console.log(indice, animales[indice]);
}

