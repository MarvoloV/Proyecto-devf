/* - Un conductor maneja de un pueblo origen a un pueblo destino,
pasando por varios
pueblos. Una vez en el pueblo destino, el conductor debe regresar a
casa por el mismo
camino. Muestre el camino recorrido tanto de ida como de vuelta.
Recorrido: Pueblo Origen → pueblo 1 → pueblo 2 → destino
Regreso: destino → pueblo 2’ → pueblo 1 → Pueblo Origen
 */
class Stack {
  constructor() {
    this.items = [];
    this.itemsInverso=[];
  }
  //añadir un elemento a la pila
  push(element) {
    this.items.push(element);
  }
  //eliminar el ultimo elemento de la pila y retornarlo.
  pop() {
    return this.items.pop();
  }
  //retornar el ulitmo elemento de la pila sin eliminarlo.
  peek() {
    return this.items[this.items.length - 1];
  }
  //retorna longitud de la pila.
  size() {
    return this.items.length;
  }
  //muestra los elementos de la pila
  print() {
    return this.items;
  }
  inverso() {
    
    for (let index = this.items.length - 1; index >= 0; index--) {
      this.itemsInverso.push(this.items.pop());
    }
    return this.itemsInverso;
  }
  /* inverso(){
      let recorridoInverso=[];
      for (let index = this.items.length-1; index  >=0; index--) {
          recorridoInverso.push(this.items[index]);
      }
      return recorridoInverso;
  } */
}
function recorridoInicial(array) {
  let stack = new Stack();
  for (let index = 0; index < array.length; index++) {
    stack.push(array[index]);
  }
  console.log(stack.print());
  console.log(stack.inverso());
}
recorridoInicial(["pueblo origen", "pueblo1", "pueblo2", "destino"]);
