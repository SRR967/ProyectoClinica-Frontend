import { Component } from '@angular/core';
import { Alerta } from 'src/app/modelo/alerta';
import { VistaPreviaDto } from 'src/app/modelo/dto/paciente/VistaPreviaDto';
import { ImagenService } from 'src/app/servicios/imagen.service';
import { PacienteService } from 'src/app/servicios/paciente.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-paciente-inicio-body',
  templateUrl: './paciente-inicio-body.component.html',
  styleUrls: ['./paciente-inicio-body.component.css']
})

export class PacienteInicioBodyComponent {

  nombre: string ="";
  citas: VistaPreviaDto[]=[]
  pqrs: VistaPreviaDto[]=[]
  alertaPaciente!:Alerta

  constructor(private imagenService: ImagenService, private tokenService: TokenService, private pacienteService: PacienteService){
    this.cargarNombre();
    this.cargarCitas();
    this.cargarPqrs();
  }

  public cargarNombre(){
    this.nombre = this.tokenService.getNombre();
  }

  public cargarCitas(){
    let codigoPaciente = this.tokenService.getCodigo();
    this.pacienteService.listarCitasPrevias(codigoPaciente).subscribe({
      next: data=>{
        this.citas = data.respuesta;
      },
      error: error =>{
        this.alertaPaciente={mensaje:error.error.respuesta,tipo:"danger"};
      }
    });
  }

  public cargarPqrs(){
    let codigoPaciente= this.tokenService.getCodigo();
    this.pacienteService.listarPQRSPacientePrevia(codigoPaciente).subscribe({
      next: data=>{
        this.pqrs = data.respuesta;
      },
      error: error =>{
        this.alertaPaciente={mensaje:error.error.respuesta,tipo:"danger"};
      }
    });
    
  }

  

}
