import { Injectable } from '@angular/core';
import { RegistroCitaDTO } from '../modelo/dto/paciente/RegistroCitaDTO';
import CitaPacienteDTO from '../modelo/dto/paciente/CitaPacienteDto';

@Injectable({
  providedIn: 'root'
})
export class CitasService {

  cita: CitaPacienteDTO[];

  constructor() {
    this.cita=[];
  }

  public listar(): CitaPacienteDTO[]{
    return this.cita;
  }

  public obtener(codigo: number): CitaPacienteDTO | undefined{
    return this.cita.find(cita => cita.codigo == codigo);
  }

  public crear(cita:RegistroCitaDTO){
    let codigo = this.cita.length +1;
    this.cita.push({codigo: codigo, estadoCita: 'Creada', especialidad: cita.especialidad,
    fecha: new Date().toISOString()});
  }



}
