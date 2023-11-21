
import { Component, Input, OnInit } from '@angular/core';
import { MedicoService } from '../../../servicios/medico.service';
import { DetalleCitaDTO } from 'src/app/modelo/dto/DetalleCitaDTO';
import { Alerta } from 'src/app/modelo/alerta';
import { TokenService } from 'src/app/servicios/token.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-cita',
  templateUrl: './detalle-cita.component.html',
  styleUrls: ['./detalle-cita.component.css']
})
export class DetalleCitaMedicoComponent {
  detalleCita: DetalleCitaDTO= new DetalleCitaDTO;
  alertaMedico!:Alerta

  

  constructor(private medicoService: MedicoService, private tokenService: TokenService, private route: ActivatedRoute) {
    this.getDetalleCita()
  }



  public getDetalleCita(){  
    this.route.params.subscribe((params) => {
      const codigoCita = +params['codigo']; 
      this.medicoService.verDetalleCita(codigoCita).subscribe({
        next: data=>{
          this.detalleCita = data.respuesta;
        },
        error: error =>{
          this.alertaMedico={mensaje: error.error.respuesta, tipo:"danger"};
        }
      });

    });
  }
}
