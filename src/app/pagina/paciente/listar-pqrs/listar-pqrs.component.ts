import { Component } from '@angular/core';
import PqrsPacienteDto from 'src/app/modelo/dto/paciente/PqrsPacienteDto';
import { PqrsService } from 'src/app/servicios/pqrs.service';

@Component({
  selector: 'app-listar-pqrs',
  templateUrl: './listar-pqrs.component.html',
  styleUrls: ['./listar-pqrs.component.css']
})
export class ListarPQRSComponent {

  pqrs: PqrsPacienteDto[];

  constructor(private pqrsService: PqrsService){
    this.pqrs = pqrsService.listar();
  }

}
