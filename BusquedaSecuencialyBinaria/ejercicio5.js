/* 5.- Crear una clase llamada Contacto con los siguientes datos
Nombre, Apellidos, Telefono
Después crear una clase que sea ListaContactos la cual tendrá dos métodos
Agregar un contacto
Buscar un contacto por nombre
Prueba que tus clases funcionen correctamente. */
class Contacto{
    constructor(nombre,apellidos,telefono){
        this.nombre=nombre;
        this.apellidos=apellidos;
        this.telefono=telefono;
    }
}
class ListaContactos{
    constructor(){
        this.contactos=[];
    }
    agregarContacto(contacto){
        this.contactos.push(contacto);
    }
    mostrarContactos(){
        console.log(this.contactos);
    }
    buscarContacto(nombre){
        for (let i = 0; i < this.contactos.length; i++) {
            if (this.contactos[i].nombre==nombre) {
                return this.contactos[i];
            }
        }
    }
}
let jorge = new  Contacto('Jorge',"Adco",916201346);
let miguel= new  Contacto('Miguel',"Ccahuay",920201357);
let rosa= new  Contacto('Rosa',"Ramirez",92020123123);
let contactos= new ListaContactos();
contactos.agregarContacto(jorge);
contactos.agregarContacto(miguel);
contactos.agregarContacto(rosa);
contactos.mostrarContactos();
console.log("-------------------------------")
console.log(contactos.buscarContacto('Rosa'));