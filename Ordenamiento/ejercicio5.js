/* 5. Crear una función que ordene un arreglo de coordenadas x, y desde a partir del
punto mas cercano a 0,0
a. Entrada -> [[7,3],[2,2],[1,0],[4,3]]
b. Salida ---> [[1,0],[2,2],[4,3],[7,3]] */
const bubbleSort = (items) => {
    const length = items.length;
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        let distancia=Math.sqrt(Math.pow(items[j][0],2)+Math.pow(items[j][1],2));
        let distancia2=Math.sqrt(Math.pow(items[j+1][0],2)+Math.pow(items[j+1][1],2));
        if (distancia> distancia2) {
            
                let tmp = items[j];
              items[j] = items[j + 1];
              items[j + 1] = tmp;
            
        }
      }
    }
    console.log(items);
  };
bubbleSort([[7,3],[2,2],[1,0],[4,3]]);
