/* Arrays */ 
function arrays(){
    // a. Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log).
    var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    console.log(meses[4] + " " + meses[10]);
    //

    // b. Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).
    console.log(meses.sort());
    //

    // c. Agregar un elemento al principio y al final del array (utilizar unshift y push).
    meses.unshift("Mes inicial");
    meses.push("Mes final");
    console.log(meses);
    //
    // d. Quitar un elemento del principio y del final del array (utilizar shift y pop).
    meses.shift();
    meses.pop();
    console.log(meses);
    //

    // e. Invertir el orden del array (utilizar reverse).
    var meses2 = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    console.log(meses2.reverse());
    //

    // f. Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).
    var meses3 = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    console.log(meses3.join("-"));
    //

    // g. Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).
    console.log(meses3.slice(4, 11));
    //
}