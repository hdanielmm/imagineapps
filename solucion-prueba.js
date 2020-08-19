// 1. Ordene el siguiente arreglo de objetos por la llave id:
let arreglo = [{id: 2}, {id: 4}, {id: 23}, {id: 21}, {id: 34}, {id: 0}, {id: -4}, {id: 59}, {id: 10}, {id: 14}, {id: 14}, {id: 52}, {id: 39}, {id: 5}, {id: 6}, {id: 0}, {id: 27}, {id: 45}, {id: 67}, {id: 100}];

const ordenar = (arreglo) => {
  let aux = 0;
  let i = 0
  
  while(i < arreglo.length-1){
     // Si el id actual es mayor al siguiente, los intercambio y empiezo a recorrer el array otra vez
     // de lo contrario avanza a la siguiente posición
    if(arreglo[i].id > arreglo[i+1].id) {
      aux = arreglo[i].id;
      arreglo[i].id = arreglo[i+1].id;
      arreglo[i+1].id = aux;
      i = 0;
    } else {
      i++;
    }
  }
  return arreglo;
}

console.log("Solución a ejercicio 1: ", ordenar(arreglo));

//////////// ejercicio dos ////////////

const palindromo = (palabra) => {
  //convierto "palabra" a un array con split(), le doy vuelta con reverse(), lo convierto a string de nuevo con join()
  const word = palabra.split("").reverse().join(""); 
  // comparo con el operador ternario "palabra" con "word" que es "palabra" pero al revés 
  return word === palabra ? "Es palíndromo" : "No es palíndromo";
}

console.log("Solución a ejercicio 2: ", palindromo("kayak kayak"));

