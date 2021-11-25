/* 4. Crear una funcion que ordene palabras de menor numero de letras a mayor
a. Ej Entrada ['adios','hola','maximo','uno','despedida']
b. salida -> [''uno,'hola','adios','maximo','despedida'] */


const bubbleSort = (items) => {
    const length = items.length;
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (items[j].length > items[j + 1].length) {
          let tmp = items[j];
          items[j] = items[j + 1];
          items[j + 1] = tmp;
        }
      }
    }
    console.log(items);
  };
  bubbleSort(['adios','hola','maximo','uno','despedida']);
  
  