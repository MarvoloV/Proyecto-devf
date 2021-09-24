class Queue {
  constructor() {
    this.items = [];
  }
  //agrega un nuevo elemento a la cola  al final
  enqueue(element) {
    this.items.push(element);
  }
  //retornar el primer elemento de la cola  y eliminarlo de la cola.
  dequeue() {
    return this.items.shift();
  }
  //retorna el primer elemento sin quitarlo de esta.
  peek() {
    return this.items[0];
  }
  //retorna el tamaño de la cola.
  size() {
    return this.items.length;
  }
  //muestra el contenido de la cola.
  print() {
    if (this.size() == 0) {
      return "Queue is empty";
    } else {
      return this.items;
    }
  }
}
/* 5.- Se tiene una cola de colores y se tiene que dividir en dos colas,
respetando el orden y alternando a partir de su índice. los pares en una
y los nones en otra
Cola original: [ amarillo, rosa, rojo, verde, azul, negro, morado,
blanco]
Cola 1: [ amarillo, rojo, azul, morado]
Cola 2: [rosa, verde, negro, blanco] */
function dividir(array) {
  let queue = new Queue();
  let queue2 = new Queue();
  let queue1 = new Queue();
  for (let index = 0; index < array.length; index++) {
    queue.enqueue(array[index]);
  }
  let longitud = queue.size();
  let cola = queue.print();
  let datos = cola.map((datos) => datos);
  for (let index = 0; index < longitud; index++) {
    if (index % 2 == 0) {
      queue1.enqueue(datos.shift());
    } else {
      queue2.enqueue(datos.shift());
    }
  }
  console.log("---------------------");
  console.log(queue.print());
  console.log("---------------------");
  console.log(queue1.print());
  console.log("---------------------");
  console.log(queue2.print());
}
dividir([
  "amarillo",
  "rosa",
  "rojo",
  "verde",
  "azul",
  "negro",
  "morado",
  "blanco",
]);
