/* Funciones */ 
function funciones(){
    // a. Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.
    function suma(num1, num2) {
        var resultado = num1 + num2;
        console.log(resultado);
    }
    suma(10, 20);
    //

    // b. A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número, mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.
    function suma(num1, num2) {
        if (isNaN(num1) || isNaN(num2)) {
            alert("Alguno de los parámetros no es un número");
            return NaN;
        }
        else {
            var resultado = num1 + num2;
            console.log(resultado);
        }
    }
    suma(10, 20);
    //

    // c. Crear una función validate integer que reciba un número como parámetro y devuelva verdadero si es un número entero.
    function validateInteger(num) {
        if(num - Math.floor(num) !== 0) {
            return false;
        }
        else {
            return true;
        }
    }
    console.log(validateInteger(10.21));
    //

    // d. A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros. En caso que haya decimales mostrar un alerta con el error y retorna el número convertido a entero (redondeado).
    function suma(num1, num2) {
        if (validateInteger2(num1) && validateInteger2(num2)) {
            var resultado = num1 + num2;
            console.log(Math.round(resultado));
        }
        else {
            resultado = num1 + num2;
            alert("Uno de los numeros no es un entero. Numero redondeado = " + Math.round(resultado));
        }
    }
    suma(10.78, 20);
    //

    // e. Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la función suma probando que todo siga funcionando igual.
    function validateInteger2(num) {
        return Number.isInteger(num);
    }
    function suma2(num1, num2) {
        if (validateInteger2(num1) && validateInteger2(num2)) {
            var resultado = num1 + num2;
            console.log(Math.round(resultado));
        }
        else {
            alert("One of the parameters is not a number");
            return NaN;
        }
    }
    suma(10.25, 20.57);
    //
}
