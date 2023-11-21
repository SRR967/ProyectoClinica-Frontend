import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Alerta } from 'src/app/modelo/alerta';
import { AtenderCitaDTO } from 'src/app/modelo/dto/AtenderCitaDTO';
import { MedicoService } from 'src/app/servicios/medico.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-radicar-consulta',
  templateUrl: './radicar-consulta.component.html',
  styleUrls: ['./radicar-consulta.component.css']
})
export class RadicarConsultaComponent {
  atenderConsulta: AtenderCitaDTO= new AtenderCitaDTO;
  alertaMedico!:Alerta

  constructor(private medicoService: MedicoService, private tokenService: TokenService, private route: ActivatedRoute) {
    
  }

  public radicarConsulta(){
    this.route.params.subscribe((params)=>{
      const codigoCita = +params['codigo'];
      this.atenderConsulta.idCita = codigoCita;
      this.medicoService.radicarConsulta(this.atenderConsulta).subscribe({
        next: data =>{
          this.alertaMedico={mensaje:data.respuesta, tipo:"danger"};
        },
        error: error => {
          this.alertaMedico={mensaje: error.error.respuesta, tipo:"danger"}
        }
      });
    });
    
    
  }

}
