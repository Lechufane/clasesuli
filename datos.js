// tipos de datos
//datos primitivos

// string
var nombre = "Lucia"
// number
var edad = 23; //number
// boolean
var casado = false;
var casado2 = true;
var noExiste2 = null;
// undefined
var noExiste;
// NaN = Not a Number
var noExiste3 = 'Hola' / 2;

//datos compuestos

// array
var array = [
    undefined, 
    null, 
    "caracter",
     true, 
     5, 
     NaN,
     {
    nombre: 'Juan',
    apellido: 'Perez'    
    },
    [1, 2, 3, 4, 5]
];
// object

//objeto literal clave valor
var objeto = {
    //clave|valor O key/value
    nombre: 'Mica',
    apellido: 'Lusso',
    edad: 24,
    casado: false,
    habilidades:['ingles', 'java', 'css', 'pizzas', 'caseras'],
    direccion: {
        calle: 'Calle falsa',
        numero: '123',
        ciudad: 'Ciudad falsa',
    },
    saludar:()=>{
        console.log('hola mi nombre es ' + this.nombre);
    }
}

//declarar la funcion
var saludar = function(elNombre){

    console.log('felicidades ' + elNombre);

}

//invocar la funcion
saludar(nombre);
