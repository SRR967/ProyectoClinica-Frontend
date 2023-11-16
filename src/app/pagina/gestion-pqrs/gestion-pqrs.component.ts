import { Component } from '@angular/core';
import PqrsPacienteDto from 'src/app/modelo/dto/paciente/PqrsPacienteDto';
import { PqrsService } from 'src/app/servicios/pqrs.service';

@Component({
  selector: 'app-gestion-pqrs',
  templateUrl: './gestion-pqrs.component.html',
  styleUrls: ['./gestion-pqrs.component.css']
})
export class GestionPqrsComponent {

  pqrs: PqrsPacienteDto[];

  constructor(private pqrsService: PqrsService){
    this.pqrs = pqrsService.listar();
  }

}
