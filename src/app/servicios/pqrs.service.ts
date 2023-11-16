import { Injectable } from '@angular/core';
import { CrearPQRSDTO } from '../modelo/dto/paciente/crearPqrsDto';
import PQRSpacienteDto from '../modelo/dto/paciente/PqrsPacienteDto';


@Injectable({
  providedIn: 'root'
})
export class PqrsService {

  pqrs: PQRSpacienteDto[];

  constructor(){
    this.pqrs= [];

    this.pqrs.push({codigo: 1, 
      estadoPQRS: 'Activo',
      asunto: 'Felicitaciones',
     fecha: '2023-10-12'});
  }

  public listar (): PQRSpacienteDto[]{
    return this.pqrs
  }

  public obtener(codigo: number): PQRSpacienteDto | undefined {
    return this.pqrs.find(pqrs => pqrs.codigo === codigo);
  }
  

  public crear(pqrs:CrearPQRSDTO){
    let codigo = this.pqrs.length +1;
    this.pqrs.push({codigo: codigo, estadoPQRS: 'Activo', asunto: pqrs.asunto,
     fecha: new Date().toISOString() });
  }



  
}
