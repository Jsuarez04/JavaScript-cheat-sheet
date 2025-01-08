/*algoritmo que calcule el precio de un producto mas impuestos*/

function sumarImpuesto(precio, impuesto) {
    return precio + (precio * impuesto)
}

console.log(sumarImpuesto(10, 0.16));