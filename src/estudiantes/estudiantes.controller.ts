import { Body, Controller, Get, Post, Param, Delete } from '@nestjs/common';
import { Estudiante } from 'src/models/estudiante';
import { EstudiantesService } from './estudiantes.service';

@Controller('estudiantes')
export class EstudiantesController {
  constructor(private readonly servicio: EstudiantesService) {}

  //crea un nuevo estudiante
  @Post()
  crearEstudiante(@Body() estudiante: Estudiante) {
    this.servicio.crearEstudiante(estudiante);
  }

  // obtener estudiantes por id.
  @Get(':id')
  obtenerEstudianteId(@Param('id') id: number): Estudiante {
    return this.servicio.obtenerEstudianteId(id);
  }
  //obtener todos los estudiantes
  @Get()
  obtenerEstudiantes(): Estudiante[] {
    return this.servicio.obtenerEstudiantes();
  }

  //Eliminar estudiantes por ID
  @Delete(':id')
  eliminarEstudiante(@Param(':id') id: number): void {
    this.servicio.eliminarEstudiante(id);
  }
}
