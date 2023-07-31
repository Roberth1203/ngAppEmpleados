import { Component, EventEmitter, Input, Output } from '@angular/core';
import { OutletContext } from '@angular/router';

@Component({
  selector: 'app-count-empleados',
  templateUrl: './count-empleados.component.html',
  styleUrls: ['./count-empleados.component.css']
})
export class CountEmpleadosComponent {
  @Input() todos: number;
  @Input() hombres: number;
  @Input() mujeres: number;
  @Output() countRadioButtonChange = new EventEmitter<string>();
  opcionSeleccionada: string;

  constructor() {
    this.todos = 0;
    this.hombres = 0;
    this.mujeres = 0;
    this.opcionSeleccionada = 'Todos';
  }

  cambioDeOpcion(): void {
    this.countRadioButtonChange.emit(this.opcionSeleccionada);
  }
}
