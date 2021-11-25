/* 3. Crear una clase Alumno con los siguientes datos:
a. Nombre y calificaciones(arreglo de 5 números) y tiene un método para
obtener el promedio
b. Crear otra clase llamada Salon que tenga un método que ordene alumnos
de mayor a menor promedio */
class Alumno{
    constructor(){
        this.nombre=null;
        this.calificaciones=[];
        this.promedio=null
    }
    IngresarDatos(nombre,calificaciones){
        this.nombre=nombre;
        this.calificaciones=calificaciones;
        this.promedio=this.SacarPromedio();
    }
    mostrarDatos(){
        console.log(this.nombre,this.calificaciones,this.promedio);
    }
    SacarPromedio(){
        let promedio=0;
        for (let i = 0; i < this.calificaciones.length; i++) {
            promedio+=this.calificaciones[i];
        }
        promedio=promedio/this.calificaciones.length;
        this.promedio=promedio;
        return promedio;
    }
}
class Salon{
    constructor(){
        this.alumnos=[];
    }
    agregarALumno(alumno){
        this.alumnos.push(alumno);
    }
    ordenarAlumnos(){
        const length = this.alumnos.length;
        for (let i = 0; i < length; i++) {
        for (let j = 0; j < length - i - 1; j++) {
            if (this.alumnos[j].promedio < this.alumnos[j+1].promedio ) {
            let tmp = this.alumnos[j];
            this.alumnos[j] = this.alumnos[j + 1];
            this.alumnos[j + 1] = tmp;
            }
        }
    }
    console.log(this.alumnos);
    }
}
let salon = new Salon();
let alumno1= new Alumno();
alumno1.IngresarDatos('Jorge',[10,11,15,14,16]);
alumno1.mostrarDatos();
let alumno2= new Alumno();
alumno2.IngresarDatos('Miguel',[15,16,20,14,16]);
alumno2.mostrarDatos();
let alumno3= new Alumno();
alumno3.IngresarDatos('Ana',[5,4,15,14,3]);
alumno3.mostrarDatos();
salon.agregarALumno(alumno1);
salon.agregarALumno(alumno2);
salon.agregarALumno(alumno3);
salon.ordenarAlumnos();