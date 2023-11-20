import { Component } from '@angular/core';
import { Alerta } from 'src/app/modelo/alerta';
import CitaPacienteDTO from 'src/app/modelo/dto/paciente/CitaPacienteDto';
import { PacienteService } from 'src/app/servicios/paciente.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-listar-citas',
  templateUrl: './listar-citas.component.html',
  styleUrls: ['./listar-citas.component.css']
})
export class ListarCitasComponent {

  citas: CitaPacienteDTO[];
  alertaPaciente!:Alerta

  constructor(private pacienteService: PacienteService, private tokenService: TokenService){
    this.citas = [];
  }

  public obtenerCitas(){
    let codigo = this.tokenService.getCodigo();
    
  }


}
