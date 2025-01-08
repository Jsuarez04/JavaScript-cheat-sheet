// funcion que imprima numeros impares del 1 al 10
let i = 1;
function numerosImpares() {
    console.log("Numeros impares del 1 al 10");
    while (i < 10) {
        if (i % 2 != 0) {
            console.log(i);
        }
        i++;
    }
}

numerosImpares();  // 1, 3, 5, 7, 9    
