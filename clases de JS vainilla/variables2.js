//Hoisting

/*saludo("valeria");

function saludo(nombre){
    console.log("Hola " + nombre);
}
*/

//El hoisting no actua bien cuando trabajamos con funciones en variables. 

//----------------------------------------------------------------//

//Scope, el reino de la funcion.

/*
var nombre = "juan";//var es accesible de manera global
{
    //scope local
    var nombre = "marcelo";
}
*/

// console.log(nombre);

//reasignacion es cuando volves a declarar una variable con el mismo nobmre
//mutacion es cuando cambias el valor que tiene una variable por dentro pero no la declaras de nuevo


/*
let nombre = "lucas";

{
    {
        console.log(nombre);
    }
}

{
    let nombre = "valeria"
    console.log(nombre);
}

{
    let nombre = "martina"
    console.log(nombre);
}
*/

//lo que esta fuera es accesible hacia adentro.

//let es mutable NO reasignable
/*
let nombre = "valeria"
nombre = "diego";
console.log(nombre)
*/

//const es no reasignable y no mutable. Cuando trabajamos, lo hacemos con const.
