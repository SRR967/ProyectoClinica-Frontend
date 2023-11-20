import { Component } from '@angular/core';

import PqrsPacienteDto from 'src/app/modelo/dto/paciente/pqrsPacienteDto';
import { Alerta } from 'src/app/modelo/alerta';
import { PacienteService } from 'src/app/servicios/paciente.service';
import { PqrsService } from 'src/app/servicios/pqrs.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-listar-pqrs',
  templateUrl: './listar-pqrs.component.html',
  styleUrls: ['./listar-pqrs.component.css']
})
export class ListarPQRSComponent {

  pqrs: PqrsPacienteDto[];
  alertaPaciente!:Alerta

  constructor(private pacienteService: PacienteService, private tokenService: TokenService){
    this.pqrs = [];
  }

  public obtenerPQRS(){
    let codigo = this.tokenService.getCodigo();

    this.pacienteService.listarPQRSPaciente(codigo).subscribe({
      next: data =>{
        this.pqrs = data.respuesta;
      },
      error: error => {
        this.alertaPaciente= {mensaje: error.error.respuesta, tipo: "danger"};
      }
    });
  }

}
