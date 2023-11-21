import { Component, Input, OnInit } from '@angular/core';
import { MedicoService } from '../../../servicios/medico.service';
import { HistorialPacientesAtendidosDTO } from 'src/app/modelo/dto/medico/HistorialPacientesAtendidosDto';
import { TokenService } from 'src/app/servicios/token.service';
import { Alerta } from 'src/app/modelo/alerta';

@Component({
  selector: 'app-citas-atendidas',
  templateUrl: './citas-atendidas.component.html',
  styleUrls: ['./citas-atendidas.component.css']
})
export class CitasAtendidasComponent {
  citasAtendidas: HistorialPacientesAtendidosDTO[]=[]
  alertaMedico!:Alerta


  constructor(private medicoService: MedicoService, private tokenService: TokenService) {
    this.getCitasAtendidas();
  }


  getCitasAtendidas(){  
    let cedula = this.tokenService.getCodigo();

    this.medicoService.listarCitasAtendidas(cedula).subscribe({
      next: data => {
        this.citasAtendidas = data.respuesta;
      },
      error: error => {
        this.alertaMedico={mensaje:error.error.respuesta,tipo:"danger"};
      }
  });
}
}
