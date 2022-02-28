function duplicar(numero){
    const duplicado = numero*2;
    return console.log(duplicado);
}

duplicar(2);

const duplicar2 = function(numero){
    const duplicado = numero*2;
    return console.log(duplicado);
}   // Esto es una funcion anonima

duplicar2(2);

const duplicar3 = numero => numero*2;

console.log(duplicar3(2));
