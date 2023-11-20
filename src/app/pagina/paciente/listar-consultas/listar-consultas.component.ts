import { Component } from '@angular/core';
import { Alerta } from 'src/app/modelo/alerta';
import { ConsultaPacienteDTO } from 'src/app/modelo/dto/paciente/ConsultaPacienteDto';
import { PacienteService } from 'src/app/servicios/paciente.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-listar-consultas',
  templateUrl: './listar-consultas.component.html',
  styleUrls: ['./listar-consultas.component.css']
})
export class ListarConsultasComponent {
  
  alertaPaciente!:Alerta
  consulta : ConsultaPacienteDTO[]=[]

  constructor(private pacienteService: PacienteService, private tokenService: TokenService){
    this.obtenerConsultas();
  }

  public obtenerConsultas(){
    let codigo = this.tokenService.getCodigo();

    this.pacienteService.listarConsultas(codigo).subscribe({
      next: data =>{
        this.consulta = data.respuesta;
      },
      error: error => {
        this.alertaPaciente= {mensaje: error.error.respuesta, tipo: "danger"};
      }
    });
    
  }

}
