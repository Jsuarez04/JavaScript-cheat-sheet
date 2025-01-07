// Nombre: ancho x alto 
//  8K 7680 x 4320 
//  4K 3840 x 2160 
//  MQHD 2560 x 1440 
//  FHD 1920 x 1080 
//  HD 1280 x 720 

// 1. Crear una función que reciba dos parámetros, ancho y alto, y devuelva un string con el tamaño de la imagen.

function resolucionImagen(ancho, alto) {
    switch (ancho, alto) {
        case 7680, 4320:
            return "8K";
        case 3840, 2160:
            return "4K";
        case 2560, 1440:
            return "MQHD";
        case 1920, 1080:
            return "FHD";
        case 1280, 720:
            return "HD";
        default:
            return "No se reconoce la resolución";
    }
}

console.log(resolucionImagen(1280, 720)); 