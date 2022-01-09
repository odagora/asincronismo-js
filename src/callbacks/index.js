const sum = (num1, num2) => {
    return num1 + num2;
}

const calc = (num1, num2, suma) => {
    return suma(num1, num2);
}

console.log(calc(1, 2, sum));

function date(callback) {
    console.log(new Date());
    setTimeout(() => {
        callback();
    }, 3000);
}

function printDate(){
    console.log(new Date());
}

date(printDate);

// otra para practicar -- esta funcion muestra la la masa muscular
// segun el peso y altura ingresado
const calcMuscleMass = (weight, height) => {
    const weightPounds = weight * 2.2046;//Convirtiendo el peso en libras
    const resultWeight = weightPounds * 703; //Multiplicando el peso por 703 es la formula para sacar IMC   
    let heightInch = height * 39.370;//Convirtiendo la altura en pulgadas
    heightInch *= heightInch;//Multiplicando la altura por si mismo para sacar IMC 
    let IMC = resultWeight/heightInch;// el calculo final division entre el total del peso y altura
    IMC = IMC.toFixed(1); // le quito los decimales que solo muestre uno con la fn toFixed
    console.log(`su indice de masa muscular es: ${IMC}`) // mostrandolo en la consola
    return IMC; // IMC significa indice de masa muscular
}; 

const printImc = (weight, height, callback) => { //funcion para imprimir el resultado por medio
// un setTimeout y el callback
  console.log("Calculando su indice de masa muscular por favor espere 3 segundos...");
  setTimeout(()=>{
    callback(weight, height);
  }, 3000);
};
printImc(77, 1.70, calcMuscleMass);//llamando la funcion y el callback


function hola(nombre, callback){
    setTimeout(() => {
        console.log(`Hola ${nombre}`);
        callback(nombre);
    }, 1000);
}

function adios(nombre){
    setTimeout(() => {
        console.log(`Adiós! ${nombre}`);
    }, 1500);
}

hola("Daniel", adios);
