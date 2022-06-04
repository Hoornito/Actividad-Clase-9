/* 1. Variables y Operadores*/
function variables_y_operadores(){
    // a. Crear dos variables numericas y utilizar el operador suma para fuardar el valor de la suma de ambos números en una 3er variable.
    var num1 = 10;
    var num2 = 20;
    var suma = num1 + num2;
    console.log(suma);

    // b. Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable.
    var string1 = "Hola";
    var string2 = "Mundo";
    var concatenar = string1 + string2;
    console.log(concatenar);

    // c. Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras del string) guardando el resultado de la suma en una 3er variable (utilizar length).
    var string3 = "Hola";
    var string4 = "Mundo";
    var suma2 = string3.length + string4.length;
    console.log(suma2);
}

