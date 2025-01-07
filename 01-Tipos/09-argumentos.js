function suma(a, b) {
    console.log(arguments);
    return a + b;
}

console.log(suma(5, 5));
console.log(typeof suma);

if (suma(5, 5) === 10) {
    console.log('no montamos gordas');
}

