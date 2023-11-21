import { Component, Input } from '@angular/core';
import { MedicoService } from '../../../servicios/medico.service';
import { DiaLibreDTO } from 'src/app/modelo/dto/medico/DiaLibreDto';
import { NgFor } from '@angular/common';
import { NgForm } from '@angular/forms';
import { TokenService } from 'src/app/servicios/token.service';
import { Alerta } from 'src/app/modelo/alerta';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-registrar-dia-libre',
  templateUrl: './registrar-dia-libre.component.html',
  styleUrls: ['./registrar-dia-libre.component.css']
})
export class RegistrarDiaLibreComponent {


  diaLibre: DiaLibreDTO;
  alertaMedico!:Alerta
  cedula: string;



  constructor(private medicoService: MedicoService, private tokenService:TokenService, private route: ActivatedRoute) {
    this.diaLibre= new DiaLibreDTO();
    this.cedula = this.tokenService.getCodigo();
    this.diaLibre.idMedico= this.cedula;
    
  }


  registrarDiaLibre(){  
  this.medicoService.registrarDiaLibre(this.diaLibre).subscribe({
    next: data =>{
      this.alertaMedico={mensaje:data.respuesta, tipo:"danger"};
    },
    error: error => {
      this.alertaMedico={mensaje: error.error.respuesta, tipo:"danger"}
    }
  })
}

}
