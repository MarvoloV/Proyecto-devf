class Stack {
  constructor() {
    this.items = [];
    this.length = 0;
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
  peek(){
    return this.items(this.items[this.length-1])
  }
  //retorna el numero de elementos de la pila.
  size(){
    return this.items.length;
  }
  //muestra el contenido de la pila
  print(){
    return this.items;
  }
}
function mifuncion(array,num){
    let stack = new Stack();
    for (let index = 0; index < array.length; index++) {
        stack.push(array[index]);
    }
    let numeros= stack.size() - num;
    console.log(numeros);
    for (let index = 0; index < numeros; index++) {
        stack.pop();
    }
    return stack.print();
}
const pila=mifuncion(['Manzana','Cebolla','Apio','Naranja',
    'Papaya','Sandía','Melón'],4)
console.log(pila);

