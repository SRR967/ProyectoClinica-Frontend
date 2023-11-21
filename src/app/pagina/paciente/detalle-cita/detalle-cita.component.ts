import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Alerta } from 'src/app/modelo/alerta';
import { DetalleCitaPacienteDTO } from 'src/app/modelo/dto/paciente/DetalleCitaPacienteDto';
import { PacienteService } from 'src/app/servicios/paciente.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-detalle-cita',
  templateUrl: './detalle-cita.component.html',
  styleUrls: ['./detalle-cita.component.css']
})
export class DetalleCitaComponent {

  detalleCita: DetalleCitaPacienteDTO;
  alertaPaciente!:Alerta

  constructor(private tokenService: TokenService, private route: ActivatedRoute, private pacienteService: PacienteService){
    this.detalleCita = new DetalleCitaPacienteDTO;
    this.obtenerDetalleCita();
  }

  obtenerDetalleCita(){
    this.route.params.subscribe((params) => {
      const codigoCita = +params['codigo']; 
      this.pacienteService.detalleCita(codigoCita).subscribe({
        next: data=>{
          this.detalleCita = data.respuesta;
        },
        error: error =>{
          this.alertaPaciente={mensaje: error.error.respuesta, tipo:"danger"};
        }
      });

    });
  }

}
