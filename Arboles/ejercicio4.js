/* 14. Escribe una función que devuelva el número de hojas de un árbol binario. */
class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
    this.arbol = [];
  }

  isEmpty() {
    return this.root === null;
  }

  add(value) {
    if (this.isEmpty()) {
      this.root = new Node(value);
      return;
    }

    var aux = this.root;

    while (aux) {
      if (value < aux.value) {
        if (aux.left) {
          aux = aux.left;
        } else {
          aux.left = new Node(value);
          return;
        }
      } else {
        if (aux.right) {
          aux = aux.right;
        } else {
          aux.right = new Node(value);
          return;
        }
      }
    }
  }
  find(value) {
    if (this.isEmpty()) {
      return null;
    }

    var aux = this.root;
    if (aux.value === value) {
      return aux;
    }

    while (aux) {
      if (aux.value === value) {
        break;
      }

      if (aux.value < value) {
        aux = aux.right;
      } else if (aux.value > value) {
        aux = aux.left;
      }
    }
    return aux;
  }

  print(node = this.root) {
    if (!node) {
      return;
    }
    this.print(node.left);
    this.arbol.push(node.value);
    console.log(node.value);
    this.print(node.right);
  }
  hojas(node=this.root){
      let contador=0;
      if(node.left==null && node.right==null){
          contador++;
      }
      if(node.left!=null){
          contador+=this.hojas(node.left)
      }
      if(node.right!=null){
        contador+=this.hojas(node.right)
      }
      return contador;
  }
}

let t = new Tree();
t.add(2);
t.add(68);
t.add(36);
t.add(27)
t.add(54);
t.add(51);
t.add(94);
t.add(80);
t.add(76);
t.add(95);
t.print();
console.log("----------")
console.log(t.hojas());

