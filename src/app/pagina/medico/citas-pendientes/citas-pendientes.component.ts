import { Component, Input, OnInit } from '@angular/core';
import { MedicoService } from '../../../servicios/medico.service';
import { TokenService } from 'src/app/servicios/token.service';
import { CitaMedicoDTO } from 'src/app/modelo/dto/medico/CitaMedicoDTo';
import { Alerta } from 'src/app/modelo/alerta';

@Component({
  selector: 'app-citas-pendientes',
  templateUrl: './citas-pendientes.component.html',
  styleUrls: ['./citas-pendientes.component.css']
})
export class CitasPendientesComponent  {

  citasPendientes: CitaMedicoDTO[]=[]
  alertaMedico!:Alerta



  constructor(private medicoService: MedicoService, private tokenService: TokenService) {
    this.getCitasPendientes();
  }



  getCitasPendientes(){  
    let cedula = this.tokenService.getCodigo();
    this.medicoService.verCitasPendientes(cedula).subscribe({
      next: data => {
        this.citasPendientes = data.respuesta;
      },
      error: error => {
        this.alertaMedico={mensaje:error.error.respuesta,tipo:"danger"};
      }
  });
}

}
