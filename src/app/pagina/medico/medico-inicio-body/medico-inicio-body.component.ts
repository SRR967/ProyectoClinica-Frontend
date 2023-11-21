import { Component } from '@angular/core';
import { Alerta } from 'src/app/modelo/alerta';
import { CitaMedicoDTO } from 'src/app/modelo/dto/medico/CitaMedicoDTo';
import { MedicoService } from 'src/app/servicios/medico.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-medico-inicio-body',
  templateUrl: './medico-inicio-body.component.html',
  styleUrls: ['./medico-inicio-body.component.css']
})
export class MedicoInicioBodyComponent {
  nombre: string ="";
  alertaMedico!:Alerta;
  citas: CitaMedicoDTO[]= [];


  constructor(private tokenService: TokenService, private medicoService: MedicoService){
    this.cargarNombre();
    this.cargarCitas();
    
  }

  public cargarNombre(){
    this.nombre = this.tokenService.getNombre();
  }

  public cargarCitas(){
    let codigoPaciente = this.tokenService.getCodigo();
    this.medicoService.verCitasPendientes(codigoPaciente).subscribe({
      next: data=>{
        this.citas = data.respuesta;
      },
      error: error =>{
        this.alertaMedico={mensaje:error.error.respuesta,tipo:"danger"};
      }
    });
  }


}
