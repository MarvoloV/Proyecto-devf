/* 1. Escribe una función que dados dos árboles binarios A y B, determine si son idénticos o
no. */ class Node {
  constructor (value) {
    this.value = value
    this.right = null
    this.left = null
  }
}

class Tree {
   
  constructor () {
    this.root = null
    this.arbol=[]
  }

  isEmpty () {
    return this.root === null
  }

  add (value) {
    // arbol no tiene elementos
    if (this.isEmpty()) {
      this.root = new Node(value)
      return
    }

    var aux = this.root

    while (aux) {
      // vamos hacia la izquierda
      if (value < aux.value) {
        if (aux.left) {
          aux = aux.left
        } else {
          aux.left = new Node(value)
          return
        }
      } else { // vamos hacia la derecha
        if (aux.right) {
          aux = aux.right
        } else {
          aux.right = new Node(value)
          return
        }
      }
    }
  }
  find (value) {
    if (this.isEmpty()) {
      return null
    }

    var aux = this.root
    if (aux.value === value) {
      return aux
    }

    while(aux) {
      // si encontramos el nodo con el valor
      // paramos de iterar.
      if (aux.value === value) {
        break
      }
      // seguimos buscando a la derecha
      if (aux.value < value) {
        aux = aux.right
      } else if (aux.value > value) {
        // seguimos buscando a la izquierda
        aux = aux.left
      }
    }
    // retornamos el nodo encontrado.
    // si no encontramos el nodo con el valor
    // aux, toma el valor null.
    return aux
  }

  print (node = this.root) {
    if (!node) {
      return
    }
    this.print(node.left)
    this.arbol.push(node.value);
    console.log(node.value)
    this.print(node.right)
  }
  /**
    * recorre primero toda la rama izquierda
    * de izquierda al centro.
    * Luego imprime la raíz, y finalmente
    * recorre la rama derecha, del centro hacia
    * la derecha.
    */
  inOrder (node = this.root) {
    if (!node) {
      return
    }
    this.inOrder(node.left)
    console.log(node.value)
    this.inOrder(node.right)
  }
  /**
    * Imprime primero la raíz, luego
    * toda la rama izquierda de izquierda al centro.
    * y finalmente recorre la rama derecha,
    * del centro hacia la derecha.
    */
  preOrder (node = this.root) {
    if (!node) {
      return
    }
    console.log(node.value)
    this.preOrder(node.left)
    this.preOrder(node.right)
  }
  /**
    * Recorre el árbol de izquierda hacia el centro.
    * Luego del centro hacia la derecha, y finalmente
    * imprime la raíz.
    */
  postOrder (node = this.root) {
    if (!node) {
      return
    }
    this.postOrder(node.left)
    this.postOrder(node.right)
    console.log(node.value)
  }
  mostrarArbol(){
      return this.arbol;
  }
}
const compararArboles= (arbol1,arbol2)=>{
    let contador=0;
    if (arbol1.length==arbol2.length) {
        for (let i = 0; i < arbol1.length; i++) {
            if (arbol1[i]==arbol2[i]) {
                contador++;
            }
        }
        if (contador==arbol1.length) {
             console.log("los Arboles son indenticos")
        } else {
            console.log("Los arboles no son identicos")    
        }
    }else{
        console.log("Los arboles no son identicos")
    }
}
let t = new Tree()
let t1=new Tree()
t.add(1);
t.add(2);
t.add(5);
t.add(15);
t1.add(1);
t1.add(20);
t1.add(5);
t1.add(15);
t.print();
console.log(t.mostrarArbol());
t1.print();
console.log(t1.mostrarArbol());
compararArboles(t.mostrarArbol(),t1.mostrarArbol())