/* 1 .- Crear una función que encuentre el número más repetido en un array
Ejemplo Input - [3,6,1,8,2,3,6,3,2,5,6]
Salida -> 6
*/
/* busqueda secuencial */
function numeroRepetido(array){
    let datos=[];
    for (let i = 0; i < array.length - 2; i++) {
         let repetidos = {};
        let count=0 
        let arreglo=[];
        for (let j = i+1; j < array.length; j++) {
             if(array[i]==array[j]){
                count++;
            }
            repetidos.numero=array[i]; 
             arreglo.push(array[j]);     
                     
        }
        console.log(arreglo);   
         repetidos.count=count;
        datos.push(repetidos);
    }
     console.log(datos); 
}

numeroRepetido([3,6,1,8,2,3,6,3,2,5,6])

 
/*
let objeto={};
objeto[1]=25;
objeto[1]=objeto[1]+20;
objeto[2]=40;
objeto[3]=50;
console.log(objeto);
datos.push(objeto);
 console.log(datos);
 console.log(objeto);
 objeto.numero=30
 objeto.repetidos=50;
 var array = [4,1,2,1,1,3,45,13,42,52,45,25,13,40,13,2];

var repetidos = {};

array.forEach(function(numero){
  repetidos[numero] = (repetidos[numero] || 0) + 1;
});

console.log(repetidos);
  */
 
