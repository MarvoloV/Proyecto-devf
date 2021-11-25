class LinkedListItem {
    constructor(value, next) {
      this.value = value;
      this.next = next;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
    agregar(value) {
      const newItem = new LinkedListItem(value, this.head);
      this.head = newItem;
    }
    buscar(value) {
      if (!this.head) {
        return null;
      }
      let currentNode = this.head;
      while (currentNode) {
        if (currentNode.value === value) {
          return currentNode;
        }
        currentNode = currentNode.next;
      }
    }
    mostrarMayoresque(value){
      if (!this.head) {
        return null;
      }
      let currentNode = this.head;
      while (currentNode) {
        if (currentNode.value > value) {
            console.log(currentNode.value);
        }
        currentNode = currentNode.next;
      }
    }
    mostrar() {
      let currentNode = this.head;
      while (currentNode) {
        console.log(currentNode.value);
        currentNode = currentNode.next;
      }
    }
    }
    
  list = new LinkedList();
  list.agregar(1);
  list.agregar(3);
  list.agregar(5);
  list.agregar(7);
list.mostrar();