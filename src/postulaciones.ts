import { Estudiante } from './Estudiante';

export class Postulacion {
  constructor(
    public id: number,
    public fechaPostulacion: number,
    public estudiante: Estudiante,
    public estado: string,
  ) {}
}
