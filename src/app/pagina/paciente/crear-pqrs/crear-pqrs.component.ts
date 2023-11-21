import { Component } from '@angular/core';
import { Alerta } from 'src/app/modelo/alerta';
import { ItemListasDto } from 'src/app/modelo/dto/ItemListasDto';
import { ConsultaPacienteDTO } from 'src/app/modelo/dto/paciente/ConsultaPacienteDto';
import { CrearPQRSDTO } from 'src/app/modelo/dto/paciente/crearPqrsDto';
import { ClinicaService } from 'src/app/servicios/clinica.service';
import { PacienteService } from 'src/app/servicios/paciente.service';
import { PqrsService } from 'src/app/servicios/pqrs.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-crear-pqrs',
  templateUrl: './crear-pqrs.component.html',
  styleUrls: ['./crear-pqrs.component.css']
})
export class CrearPQRSComponent {
  
  crearPqrsDto: CrearPQRSDTO;
  tipoPqrs: string[]=[];
  alertaPaciente!:Alerta
  consultaPacienteDto: ConsultaPacienteDTO[]=[];

  constructor(private pacienteService: PacienteService, private clinicaService: ClinicaService, private tokenService: TokenService){
    this.crearPqrsDto = new CrearPQRSDTO;
    this.cargarTipoPqrs();
    this.listarConsultas();
    
  }

  public crearPqrs(){
    this.pacienteService.crearPQRS(this.crearPqrsDto).subscribe({
      next: data => {
        this.alertaPaciente = {mensaje: data.respuesta, tipo:"danger"};
      },
      error: error =>{
        this.alertaPaciente={mensaje: error.error.respuesta, tipo:"danger"};
      }
    });
  }

  public seleccionar(codigoConsulta: number){
    this.crearPqrsDto.idConsulta = codigoConsulta;
  }

  public cargarTipoPqrs(){
    this.clinicaService.listarTipoPQRS().subscribe({
      next: data =>{
        this.tipoPqrs = data.respuesta;
      },
      error: error =>{
        this.alertaPaciente= {mensaje: error.error.respuesta, tipo: "danger"};
      }
    });
      
  }

  public listarConsultas(){
    let codigoPaciente = this.tokenService.getCodigo();
    this.pacienteService.listarConsultas(codigoPaciente).subscribe({
      next: data=>{
        this.consultaPacienteDto = data.respuesta;
      },
      error: error =>{
        this.alertaPaciente= {mensaje: error.error.respuesta, tipo:"danger"};
      }
    });
  }


}
