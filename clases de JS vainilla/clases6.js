class MiClase {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    saludar() {
        return `Hola, soy ${this.nombre} y tengo ${this.edad} años`;
    }
}

const miClase = new MiClase('Juan', 25);
console.log(miClase.saludar());

class Obrero extends MiClase {
    constructor(nombre, edad, laburo) {
        super(nombre, edad);
        this.laburo = laburo
    }
    saludar() {
        return `${super.saludar()} y soy ${this.laburo}`;
    }
}

const raul = new Obrero('Raul', 35, 'obrero');
console.log(raul.saludar());

const miObjeto = new Object();