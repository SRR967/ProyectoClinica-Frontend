import { Component, Input, OnInit } from '@angular/core';
import { MedicoService } from '../../../servicios/medico.service';
import { TokenService } from 'src/app/servicios/token.service';
import { CitasMedicoDTO } from 'src/app/modelo/dto/medico/CitasMedicoDto';
import { Alerta } from 'src/app/modelo/alerta';

@Component({
  selector: 'app-listar-citas',
  templateUrl: './listar-citas.component.html',
  styleUrls: ['./listar-citas.component.css']
})
export class ListarCitasMedicoComponent  {
  listarCitas: CitasMedicoDTO[]=[]
  alertaMedico!:Alerta


  constructor(private medicoService: MedicoService, private tokenService: TokenService) {
    this.getListarCitas();
  }

  public getListarCitas(){  
    let cedula = this.tokenService.getCodigo();

    this.medicoService.listarCitas(cedula).subscribe({
      next: data => {
        this.listarCitas = data.respuesta;
      },
      error: error => {
        this.alertaMedico={mensaje:error.error.respuesta,tipo:"danger"};
      }
    });
  }

  
}
