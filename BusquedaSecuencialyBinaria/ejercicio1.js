/* 1 .- Crear una función que encuentre el número más repetido en un array
Ejemplo Input - [3,6,1,8,2,3,6,3,2,5,6]
Salida -> 6
*/
/* busqueda secuencial */
function numeroRepetido(array){
     const arregloOrdenado= array.sort();
     let contador=1;
     let data=[];
     for (let i = 0; i < arregloOrdenado.length; i++) {
          if (arregloOrdenado[i+1]===arregloOrdenado[i]) {
               contador++;    
          } else {
               let repetidos={};
               repetidos.numero=arregloOrdenado[i];
               repetidos.repetido=contador;
               data.push(repetidos);
               contador=1;
          }
     }
     let repetido=0;
     for (let i = 0; i < data.length-1; i++) {
          if (data[i].repetido>data[i+1].repetido) {
               repetido=data[i].numero;
          }
     } 
     console.log(`El numero mas repetido es ${repetido}`);
}

numeroRepetido([3,6,1,8,2,3,6,3,2,5,6,6])