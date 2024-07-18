import { Injectable } from '@nestjs/common';
import { Estudiante } from 'src/models/estudiante';

@Injectable()
export class EstudiantesService {
  //crear arreglo
  private estudiantes: Estudiante[] = [];
  //Crear estudiante
  crearEstudiante(estudiante: Estudiante): void {
    estudiante.id = this.estudiantes.length + 1;
    for (let i = 0; i < this.estudiantes.length; i++) {
      if (this.estudiantes[i].email == estudiante.email) {
        return null;
      }
    }
    this.estudiantes.push(estudiante);
  }

  //obtener estudiante segun id.
  obtenerEstudianteId(id: number): Estudiante {
    for (let i = 0; i < this.estudiantes.length; i++) {
      if (this.estudiantes[i].id == id) {
        return this.estudiantes[i];
      }
    }
  }

  //retornar todos los estudiantes
  obtenerEstudiantes(): Estudiante[] {
    return this.estudiantes;
  }

  //borrar estudiantes por id.
  eliminarEstudiante(id: number): void {
    for (let i = 0; i < this.estudiantes.length; i++) {
      if (this.estudiantes[i].id == id) {
        this.estudiantes.splice(i - 1);
      }
    }
  }
}
