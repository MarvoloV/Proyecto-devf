class Stack {
  constructor() {
    this.items = [];
  }
  //agregar elemento a la pila.
  push(element) {
    this.items.push(element);
  }
  //eliminando elemento de la pila retornando el ultimo valor de la pila.
  pop() {
    return this.items.pop();
  }
  //retorna el ultimo valor de la pila sin eliminar el elemento.
  peek() {
    return this.items[this.items.length - 1];
    
  }
  //retorna el numero de elementos de la pila.
  size() {
    return this.items.length;
  }
  //muestra el contenido de la pila
  print() {
    return this.items;
  }
}
function reemplazar(array, elementNew, elementOld) {
  let stack = new Stack();
  for (let index = 0; index < array.length; index++) {
    stack.push(array[index]);
  }
  let cantidad=stack.size() - 1;
    for (let index =cantidad ; index >= 0; index--) {
    if (stack.peek() === elementOld) {
      stack.pop();
      stack.push(elementNew);
      break;
    } else {
      stack.pop();
    } 
  } 
  return stack.print();
}
let resultado = reemplazar([3, 2, 3, 4, 6, 8, 1, 2, 5, 5], 7, 2);
console.log(resultado);
//Salida: [3,2,3,4,6,8,1,7]
