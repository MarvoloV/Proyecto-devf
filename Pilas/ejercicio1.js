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
function mifuncion(array, num) {
  let stack = new Stack();
  for (let index = 0; index < array.length; index++) {
    stack.push(array[index]);
  }
  let num_pop = stack.size() - num;
  for (let index = 0; index < num_pop; index++) {
    stack.pop();
  }
  return stack.print();
}
const pila = mifuncion(
  ["Manzana", "Cebolla", "Apio", "Naranja", "Papaya", "Sandía", "Melón"],
  4
);
console.log(pila);

/* 
class Stack{
  constructor(){
      this.items={};
      this.count=0;
  }
  //agregar un elemento a la pila
  push(element){
      this.items[this.count]=element;
      this.count++;
      return this.items;
  }
  //eliminar elemento de la pila y retornar elemento.
  pop(){
      this.count--;
      const element=this.items[this.count];
      delete this.items[this.count];
      return element;
  }
  //retorna elemento de la pila sin eliminarlo.
  peek(){
      return this.items[this.count-1];
  }
  //retorna la longitud de la pila
  size(){
      return this.count;
  }   
  //retorna el contenido de la pila.
  print(){
      return this.items;
  }
}
function mifuncion(array, num) {
  let stack = new Stack();
  for (let index = 0; index < array.length; index++) {
    stack.push(array[index]);
  }
  let num_pop = stack.size() - num;
  for (let index = 0; index < num_pop; index++) {
    stack.pop();
  }
  return stack.print();
}
const pila = mifuncion(
  ["Manzana", "Cebolla", "Apio", "Naranja", "Papaya", "Sandía", "Melón"],
  5
);
console.log(pila);
 */