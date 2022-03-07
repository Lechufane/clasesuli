let array = [1, 2, 3]

let array2 = new Array(1, 2, 3)

//un objeto es una INSTANCIA de una clase

class MyClass{
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar(){
        console.log(`Hola soy ${this.nombre}`);
    }

}

let myClass = new MyClass("Jose", 23);
myClass.saludar();

//las propiedades son de lectura, los metodos son funciones
