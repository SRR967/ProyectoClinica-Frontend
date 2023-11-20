import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Alerta } from 'src/app/modelo/alerta';
import { DetalleConsultaDTO } from 'src/app/modelo/dto/paciente/DetalleConsultaDto';
import { PacienteService } from 'src/app/servicios/paciente.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-detalle-consulta',
  templateUrl: './detalle-consulta.component.html',
  styleUrls: ['./detalle-consulta.component.css']
})
export class DetalleConsultaComponent {

  detalleConsulta: DetalleConsultaDTO;
  alertaPaciente!:Alerta

  constructor(private tokenService: TokenService, private route: ActivatedRoute, private pacienteService: PacienteService ){
    this.detalleConsulta = new DetalleConsultaDTO;
    this.obtenerDetalleConsulta();
  }

  public obtenerDetalleConsulta(){
    this.route.params.subscribe((params) =>{
      const codigoConsulta = +params['codigo'];
      this.pacienteService.detalleConsulta(codigoConsulta).subscribe({
        next:data=>{
          this.detalleConsulta= data.respuesta;
        },
        error: error =>{
          this.alertaPaciente= {mensaje: error.error.respuesta, tipo:"danger"};
        }
      });
    });
  }

}
