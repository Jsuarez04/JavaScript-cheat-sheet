/* */

let array = [{
    id: 1,
    name: "juan",
}, {
    id: 2,
    name: "julio",
}, {
    id: 3,
    name: "tina",
}]

let pares = [
    [1, { id: 1, name: "juan" }],
    [2, { id: 2, name: "julio" }],
    [3, { id: 3, name: "tina" }],
];

function toPairs(array) {
    let pairs = [];

    for (idx in array) {
        let elemento = array[idx];
        pairs[idx] = [elemento.id, elemento];
    }

    return pairs;
}

console.log(toPairs(array))