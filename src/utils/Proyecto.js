export default class Proyecto {
  nombre;
  presupuesto;
  responsable;
  trabajadores;
  tecnologia;

  constructor(nombre, presupuesto, responsable, trabajadores, tecnologia) {
    this.nombre = nombre;
    this.presupuesto = presupuesto;
    this.responsable = responsable;
    this.trabajadores = trabajadores;
    this.tecnologia = tecnologia;
  }

  mostrarDatos() {
    console.log(
      `${this.nombre} ${this.presupuesto} ${nombre} ${nombre} ${nombre} ${nombre}`
    );
  }
}
