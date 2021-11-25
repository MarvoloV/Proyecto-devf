/* 2. Crear una función que ordene una lista de caracteres según su valor decimal de
acuerdo a la tabla ascii ref: http://www.asciitable.com/
a. Ej. Entrada ---> [‘b’,‘h’,‘w’,‘e’,‘a’]
b. Salida ----> [‘a’,‘b’,‘e’,‘h’,‘w’] */
const bubbleSort = (items) => {
    const length = items.length;
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (items[j] > items[j + 1]) {
          let tmp = items[j];
          items[j] = items[j + 1];
          items[j + 1] = tmp;
        }
      }
    }
    console.log(items);
  };
  bubbleSort(['b','h','w','e','a']);
  
  