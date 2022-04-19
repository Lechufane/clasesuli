const arrayNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let reductor = arrayNum.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(reductor);

const randomNumbers = [1, 20, 15, 101, 200, 3000, 31, 10];

let ordenador = randomNumbers.sort((a,b)=> a - b);
console.log(ordenador)