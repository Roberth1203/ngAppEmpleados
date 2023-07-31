import { Component } from '@angular/core';
import { Empleado } from 'src/app/models/empleado';

@Component({
  selector: 'app-empleado-list',
  templateUrl: './empleado-list.component.html',
  styleUrls: ['./empleado-list.component.css']
})
export class EmpleadoListComponent {
  opcionSeleccionada: string;
  totalEmpleados: number;
  listEmpleados: Empleado[] = [
    { legajo: 1, nombre: 'José Roberto', apellido: 'Arroyo', sexo: 'Masculino', salario: 25000 },
    { legajo: 2, nombre: 'Alejandro', apellido: 'Guzmán', sexo: 'Masculino', salario: 12000 },
    { legajo: 3, nombre: 'Fabián', apellido: 'Zaldivar', sexo: 'Masculino', salario: 8000 },
    { legajo: 4, nombre: 'Martha', apellido: 'Hegenwish', sexo: 'Femenino', salario: 40000 },
    { legajo: 5, nombre: 'Facundo', apellido: 'Buonanotte', sexo: 'Masculino', salario: 13000 },
    { legajo: 6, nombre: 'Igor', apellido: 'Tielemmans', sexo: 'Masculino', salario: 18000 }
  ]

  constructor() {
    this.opcionSeleccionada = 'Todos';
    this.totalEmpleados = this.listEmpleados.length;
  }

  obtenerTotalHombres(): number {
    return this.listEmpleados.filter(el => el.sexo === 'Masculino').length;
  }

  obtenerTotalMujeres(): number {
    return this.listEmpleados.filter(el => el.sexo === 'Femenino').length;
  }

  empleadoCountRadioButtonChange(radioButtonSelec: string): void {
    this.opcionSeleccionada = radioButtonSelec;
  }

}
