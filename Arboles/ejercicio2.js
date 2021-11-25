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
        if (this.isEmpty()) {
          this.root = new Node(value)
          return
        }
    
        var aux = this.root
    
        while (aux) {
          if (value < aux.value) {
            if (aux.left) {
              aux = aux.left
            } else {
              aux.left = new Node(value)
              return
            }
          } else { 
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
          
          if (aux.value === value) {
            break
          }
          
          if (aux.value < value) {
            aux = aux.right
          } else if (aux.value > value) {
            
            aux = aux.left
          }
        }
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
      mostrarArbol(){
          return this.arbol;
      }
    }
    const copiarArbol= (arbol1)=>{
        for (let i = 0; i < arbol1.length; i++) {
            t1.add(arbol1[i]);
        }
    }
    let t = new Tree()
    let t1=new Tree()
    t.add(1);
    t.add(2);
    t.add(5);
    t.add(15);
    t.print();
    console.log(t.mostrarArbol());
    copiarArbol(t.mostrarArbol());
    t1.print();