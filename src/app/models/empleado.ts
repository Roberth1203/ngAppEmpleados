export class Empleado {
    legajo: number;
    nombre: string;
    apellido: string;
    sexo: string;
    salario: number;

    constructor(_legajo: number, _nombre: string, _apellido: string, _sexo: string, _salario: number) {
        this.legajo = _legajo;
        this.nombre = _nombre;
        this.apellido = _apellido;
        this.sexo = _sexo;
        this.salario = _salario;
    }
}
