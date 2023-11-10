import { Injectable } from '@angular/core';
import { PQRSpacienteDto } from '../modelo/PQRSpacienteDto';
import {CrearPqrsDto} from '../modelo/crearPqrsDto';

@Injectable({
  providedIn: 'root'
})
export class PqrsService {
  
  pqrs: PQRSpacienteDto[];

  constructor() {
    this.pqrs = [];
    this.pqrs.push({ codigo: 1, estadoPQRS: 'ACTIVO', asunto: 'Solicitud de información', fecha:
    '2023-10-12' });
    this.pqrs.push({ codigo: 2, estadoPQRS: 'ACTIVO', asunto: 'Solicitud de cambio de fecha',
    fecha: '2023-09-29' });
    this.pqrs.push({ codigo: 3, estadoPQRS: 'CERRADO', asunto: 'Solicitud de información', fecha:
    '2023-11-01' });
    this.pqrs.push({ codigo: 4, estadoPQRS: 'ACTIVO', asunto: 'Queja sobre médico', fecha:
    '2023-09-07' });
   }

   public listar(): PQRSpacienteDto[]{
    return this.pqrs;
   }

   public obtener(codigo: number): PQRSpacienteDto | undefined{
    return this.pqrs.find(this.pqrs => this.pqrs.codigo == codigo);
   }

   public crear(pqrs: CrearPqrsDto){
    let codigo = this.pqrs.length+1;
    this.pqrs.push({codigo: codigo, estadoPQRS: 'ACTIVO', asunto: pqrs.asunto, fecha: new Date().toISOString()});
   }
}
