/*Contar positivos de un array */
let numeros = [1, -2, -3, 4, 5, 6, -7, 8, 9, -10];

function contarPositivos(arreglo) {
    let contador = 0;

    for (numero in numeros) {
        if (numeros[numero] > 0) {
            contador++;
        }
    }
    return contador;
}

console.log(contarPositivos(numeros)); 