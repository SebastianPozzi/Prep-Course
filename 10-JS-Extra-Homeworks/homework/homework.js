// No cambies los nombres de las funciones.

const { join } = require("@11ty/eleventy/src/TemplatePath");

function deObjetoAmatriz(objeto) {
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  let matriz = [];

  for (let key in objeto) {
    let nuevoArray = [key, objeto[key]];
    matriz.push(nuevoArray);
  }

  return matriz;
}

function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  let acumulado = {

  };

  let caracteres = string.split("");

  for (const caracter of caracteres) {
    if (acumulado.hasOwnProperty(caracter)) {
      acumulado[caracter] = acumulado[caracter] + 1;
    } else acumulado[caracter] = 1;
  }

  return acumulado;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  let characters = s.split("");

  let mayusculas = [];

  let minusculas = [];

  let charactersOrdenados = [];

  for (const character of characters) {
    if (character === character.toUpperCase()) {
      mayusculas.push(character);
    } else {
      minusculas.push(character);
    }
  }

  for (const character of mayusculas) {
    charactersOrdenados.push(character);
  }

  for (const character of minusculas) {
    charactersOrdenados.push(character);
  }

  return charactersOrdenados.join("");
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  let frase = str.split(" ");

  let fraseInvertida = [];

  for (const palabra of frase) {
    let palabraInvertida = palabra.split("").reverse().join("");
    fraseInvertida.push(palabraInvertida);
  }

  return fraseInvertida.join(" ");
}


function capicua(numero) {
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  let numeroInvertido = numero.toString().split("").reverse().join("");

  if (numero.toString() === numeroInvertido) {
    return "Es capicua";
  } else return "No es capicua";
}


function deleteAbc(cadena) {
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  let conjunto = cadena.split("");

  let cadenaFinal = [];

  for (const letra of conjunto) {
    if (letra !== "a" && letra !== "b" && letra !== "c") {
      cadenaFinal.push(letra);
    }
  }

  return cadenaFinal.join("");
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j].length > arr[j + 1].length) {
        let suplente = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = suplente;
      }
    }
  }

  return arr;
}


function buscoInterseccion(arreglo1, arreglo2) {
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  let interseccion = [];

  for (const numero of arreglo1) {
    if (arreglo2.includes(numero)) {
      interseccion.push(numero);
    }
  }

  return interseccion;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  deObjetoAmatriz,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};

