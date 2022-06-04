/* Strings */
function strings(){
    // a. Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase).
    var string1 = "Hola mundo";
    console.log(string1.toUpperCase());
    //

    // b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).
    var string2 = "Hola mundo";
    var string3 = string2.substring(0, 5);
    console.log(string3);
    //

    // c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).
    var string4 = "Hola mundo";
    var string5 = string4.substring(string4.length - 3, string4.length);
    console.log(string5);
    //

    // d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).
    var string6 = "Hola mundo";
    var string7 = string6.substring(0, 1).toUpperCase() + string6.substring(1, string6.length).toLowerCase();
    console.log(string7);
    //

    // e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).
    var string8 = "Hola mundo";
    var string9 = string8.indexOf(" ");
    console.log(string9);
    //

    // f. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +)
    var string10 = "Hola mundo";
    var string11 = string10.substring(0, 1).toUpperCase() + string10.substring(1, string10.length).toLowerCase();
    console.log(string11);
    //
}

