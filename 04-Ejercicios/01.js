function cualEsMayor(a, b) {
    if (a > b) {
        return a;
    } else if (b > a) {
        return b;
    }
    else {
        return "Son iguales";
    }
}

function cualEsMayor(a, b) { // Otra forma de hacerlo (MAS CORTA)
    return a > b ? a : b;
}

console.log(cualEsMayor(10, 10));