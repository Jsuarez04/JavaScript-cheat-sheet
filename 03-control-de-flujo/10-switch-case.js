//switch case es una estructura de control de flujo que permite evaluar
// una expresión y compararla con múltiples valores posibles.

let animal = 'perro';

switch (animal) {
    case 'perro':
        console.log('Es un perro');
        break;
    case 'gato':
        console.log('Es un gato');
        break;
    default:
        console.log('No es un perro ni un gato');
        break;
}