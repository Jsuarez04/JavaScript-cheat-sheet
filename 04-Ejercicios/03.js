//indice validar que no sea menor a cero y que el elemento exista  en el array 

let animales = ['perro', 'gato', 'pez', 'loro'];
function getByIdx(arr, idx) {
    if (idx < 0 || idx >= arr.length) {
        return 'indice invalido';
    }
    return arr[idx];
}

console.log(getByIdx(animales, 15)); 
