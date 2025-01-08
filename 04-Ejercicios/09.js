/*Crear array de objetos a partir de array de pares*/

/*Ejemplo:
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
*/

let pares = [
    [1, { id: 1, name: "juan" }],
    [2, { id: 2, name: "julio" }],
    [3, { id: 3, name: "tina" }],
];

function fromPairs(pares) {
    let array = [];

    for (idx in pares) {
        let par = pares[idx];
        let id = par[0];
        let objeto = par[1];
        objeto.id = id;
        array.push(objeto);
    }
    return array;
}

console.log(fromPairs(pares));