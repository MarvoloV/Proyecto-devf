/* 1. Crea una función que ordene de forma descendente un arreglo de números
a. Ej. Entrada --> [9,3,1,6,5,88,-1,2,7]
b. Salida → [88,9,7,6,5,3,1,-1] */
const bubbleSort = (items) => {
  const length = items.length;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - i - 1; j++) {
      if (items[j] < items[j + 1]) {
        let tmp = items[j];
        items[j] = items[j + 1];
        items[j + 1] = tmp;
      }
    }
  }
  console.log(items);
};
bubbleSort([9,3,1,6,5,88,-1,2,7]);


