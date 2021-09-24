/* 4.- Un almacén tiene capacidad para apilar “n” contenedores. Cada
contenedor tiene un número de identificación. Cuando se desea retirar
un contenedor específico, deben retirarse primero los contenedores
que están encima de él y colocarlos en otra pila, efectuar el retiro y
regresarlos a su respectivo lugar. */
class Stack{
    constructor(){
        this.items=[];
        this.itemsaux=[];
    }
    push(element){
        this.items.push(element);
    }
    pop(){
        return this.items.pop();
    }
    peek(){
        return this.items[this.items.length-1];
    }
    size(){
        return this.items.length;
    }
    print(){
        return this.items;
    }
    quitarcontenedor(num_contenedor){
        for (let index = this.items.length-1; index >=0; index--) {
            if (this.items[index]==num_contenedor) {
                this.items.pop();     
                break;  
            } else {
                this.itemsaux.push(this.items.pop());
            }
        }
        let longitud=this.itemsaux.length
        for (let index = 0; index <longitud ; index++) {
            this.items.push(this.itemsaux.pop());
        }
        return this.items;
    }
}
function contenedor(array,num_contenedor){
    let stack = new Stack();
    for (let index = 0; index < array.length; index++) {
        stack.push(array[index]);
    }
    
    console.log(stack.print());
    console.log(stack.quitarcontenedor(num_contenedor));
}
contenedor([100,120,130,140,150,160],130);
