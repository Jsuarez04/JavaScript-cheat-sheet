/*
crear algoritmo que nos muestre el elemento mayor y menor de un array
*/

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function getMayorMenor(arreglo) {
    let mayor = 0;
    let menor = 999999;

    for (indice in arreglo) {
        if (arreglo[indice] > mayor) {
            mayor = arreglo[indice];
        }
        if (arreglo[indice] < menor) {
            menor = arreglo[indice];
        }
    }

    console.log("El mayor es: " + mayor);
    console.log("El menor es: " + menor);
}

getMayorMenor(array);  // El mayor es: 10, El menor es: 1

//La manera mas optima es separando las funciones, 
// ya que es una buena practica tener funciones 
// que hagan una sola cosa


function getMayor(arreglo) {
    let mayor = 0;

    for (indice in arreglo) {
        if (arreglo[indice] > mayor) {
            mayor = arreglo[indice];
        }

    }
    console.log("El mayor es: " + mayor);
}

function getMenor(arreglo) {
    let menor = 99999;

    for (indice in arreglo) {
        if (arreglo[indice] < menor) {
            menor = arreglo[indice];
        }

    }
    console.log("El menor es: " + menor);
}