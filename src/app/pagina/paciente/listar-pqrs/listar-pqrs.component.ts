import { Component } from '@angular/core';
import { Alerta } from 'src/app/modelo/alerta';
import PqrsPacienteDto from 'src/app/modelo/dto/paciente/PqrsPacienteDto';
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
  alerta!:Alerta

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
        this.alerta= {mensaje: error.error.respuesta, tipo: "danger"};
      }
    });
  }

}
