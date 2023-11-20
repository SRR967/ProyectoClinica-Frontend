import { Injectable } from '@angular/core';
<<<<<<< HEAD
import PqrsPacienteDto from '../modelo/dto/paciente/pqrsPacienteDto';
=======
>>>>>>> santiago
import { CrearPQRSDTO } from '../modelo/dto/paciente/crearPqrsDto';
import PqrsPacienteDto  from '../modelo/dto/paciente/pqrsPacienteDto';


@Injectable({
  providedIn: 'root'
})
export class PqrsService {

  pqrs: PqrsPacienteDto [];

  constructor(){
    this.pqrs= [];

    this.pqrs.push({codigo: 1, 
      estadoPQRS: 'Activo',
      asunto: 'Felicitaciones',
     fecha: '2023-10-12'});
  }

  public listar (): PqrsPacienteDto []{
    return this.pqrs;
  }

  public obtener(codigo: number): PqrsPacienteDto  | undefined {
    return this.pqrs.find(pqrs => pqrs.codigo == codigo);
  }
  

  public crear(pqrs:CrearPQRSDTO){
    let codigo = this.pqrs.length +1;
    this.pqrs.push({codigo: codigo, estadoPQRS: 'Activo', asunto: pqrs.asunto,
     fecha: new Date().toISOString() });
  }



  
}
