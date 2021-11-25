/* 4.- Crear una función que busque el número más pequeño en el arreglo
Ej. [1,4,5,-1,-7,2,3,9]
Salida --> -7 */

const numeroMenor=(array)=>{
    let menor=99999;
    for (let i = 0; i < array.length; i++) {
        if (array[i]<menor) {
            menor=array[i];
        }
    }
    console.log(menor);
}
numeroMenor([1,4,5,-1,-7,2,3,9]);