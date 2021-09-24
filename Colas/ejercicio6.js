class Queue{
    constructor(){
        this.items=[];
        this.itemsAux=[];
    }
    //añadir un elemento a la cola al final
    enqueue(element){
        this.items.push(element);
    }
    //eliminar el primer elemento de la cola y lo retorna
    dequeue(){
        return this.items.shift();
    }
    //retorna el primer elemento de la cola sin eliminarlo
    peek(){
        return this.items[0];
    }
    //retorna el tamaño de la cola
    size(){
        return this.items.length;
    }
    //muestra el contenido de la cola.
    print(){
        if (this.size() == 0) {
            return "Queue is empty";
          } else {
            return this.items;
          }
    }
}
function ticket(users){
    let queue = new Queue();
    let queueEliminados = new Queue();
    let queueFInal = new Queue();
    for (let index = 0; index < users.length; index++) {
        queue.enqueue(users[index]);
    }
    let longitud= queue.size();
    let cola = (queue.print()).map((datos) => datos);
    for (let index = 0; index <longitud; index++) {
        let datos=queue.items[index];
         if(datos.ticket==true){
            let ticket=cola.shift();
            queueFInal.enqueue(ticket);
            queue.itemsAux.push(ticket);
        }else{
            let ticket=cola.shift();
            queue.itemsAux.push(ticket);
            queueEliminados.enqueue(ticket);
        } 
    }
    console.log(queue.print());
    console.log("------------------------")
    console.log(queueEliminados.print());
    console.log("------------------------")
    console.log(queueFInal.print());
}
ticket( [
    { user:'User1', ticket:true },
    { user:'User2', ticket:true },
    { user:'User3', ticket:false },
    { user:'User4', ticket:true },
    { user:'User5', ticket:false },
    { user:'User6', ticket:false },
    { user:'User7', ticket:true },
    { user:'User8', ticket:true },
    { user:'User9', ticket:true },
    { user:'User10', ticket:false },
    { user:'User11', ticket:true },
    ]);
/* 6.- Se tiene una cola en la cual se han repartido tickets con el orden de
atención. Sin embargo, llegada la hora de inicio hay muchos “colados”,
es por esto que se le ordena al vigilante que retire a todos aquellos que
no tienen ticket. Muestra la cola inicial, qué elementos fueron retirados
de la cola y la cola final.
Sugerencia: desencolar cada elemento, si tiene el ticket se vuelve a
encolar, si no se retira.
Cola: [
{ user:'User1', ticket:true },
{ user:'User2', ticket:true },
{ user:'User3', ticket:false },
{ user:'User4', ticket:true },
{ user:'User5', ticket:false },
{ user:'User6', ticket:false },
{ user:'User7', ticket:true },
{ user:'User8', ticket:true },
{ user:'User9', ticket:true },
{ user:'User10', ticket:false },
{ user:'User11', ticket:true },
]; */