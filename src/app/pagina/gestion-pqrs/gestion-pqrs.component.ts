import { Component } from '@angular/core';
import { PqrsService } from "c:/Users/User/MainWorkSpace/Programacion Avanzada/ProyectoClinica-Frontend/my-app/src/app/servicios/pqrs.service";
import PQRSpacienteDto from '../../modelo/dto/paciente/PqrsPacienteDto';

@Component({
  selector: 'app-gestion-pqrs',
  templateUrl: './gestion-pqrs.component.html',
  styleUrls: ['./gestion-pqrs.component.css']
})
export class GestionPqrsComponent {

  pqrs: PQRSpacienteDto[];

  constructor(private pqrsService: PqrsService){
    this.pqrs = pqrsService.listar();
  }

}
