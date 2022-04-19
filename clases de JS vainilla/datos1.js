/* 
Javascript es un lenguaje asincronico no bloqueante, soporta POO pero es multiparadigma.
Se interpreta pero NO se compila.  
*/

//datos primitivos:
var elString = 'La vale dijo "no es que en realidad no lo se"'//las comillas le indican a javascript que es un string o caracter.
var elNumber = 2.5;//javascript no es muy bueno con numeros grandes, no hay diferencia entre float o number.
var elBoolean = true;

//datos compuestos:
var elArray = [1,2,3,4];//traido por C;
var elObjeto = {//traido por java;
    nombre: "Valeria",
    apellido: "Bassi",
    edad:27,
}
var laFuncion = function(){
    return "holiwis";
}

//datos de otro tipo:
var elUndefined = undefined;//undefined se puede dar en caso de que una variable no haya recibido un valor.
var elNan = NaN;//N mayusc. NaN se puede dar en el caso de que sumes un numero con un booleano.
var elNull = null;//nulo, es un tipo de dato relacionado al programador, el programador lo usa.

// La coma es un operador.