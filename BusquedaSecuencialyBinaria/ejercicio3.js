/* 3.- Crear una función que busque el número más grande en un arreglo
Ejemplo input [1,4,7,2,4,1,9,4,0,2,4,5,12]
Salida -> 12 */
const numeroMenor=(array)=>{
    let mayor=0;
    for (let i = 0; i < array.length; i++) {
        if (array[i]>mayor) {
            mayor=array[i];
        }
    }
    console.log(mayor);
}
numeroMenor([1,4,7,2,4,1,9,4,0,2,4,5,12]);