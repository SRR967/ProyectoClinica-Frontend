import { Component } from '@angular/core';
import { Alerta } from 'src/app/modelo/alerta';
import { ItemListasDto } from 'src/app/modelo/dto/ItemListasDto';
import { ItemMedicoDto } from 'src/app/modelo/dto/item-medico-dto';
import { RegistroCitaDTO } from 'src/app/modelo/dto/paciente/RegistroCitaDTO';
import { ClinicaService } from 'src/app/servicios/clinica.service';
import { PacienteService } from 'src/app/servicios/paciente.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-crear-cita',
  templateUrl: './crear-cita.component.html',
  styleUrls: ['./crear-cita.component.css']
})

export class CrearCitaComponent {

  registroCitaDto: RegistroCitaDTO;
  especialidad: string[]=[];
  alertaPaciente!:Alerta
  medico: ItemMedicoDto[]=[];
  seleccion: string;
  

  constructor(private clinicaService: ClinicaService, private pacienteService: PacienteService, private tokenService: TokenService){
    this.seleccion = "";
    this.cargarEspecialidades();
    this.registroCitaDto = new RegistroCitaDTO();
    
  }

  private cargarEspecialidades(){
    this.clinicaService.listarEspecialidades().subscribe({
      next: data => {
        this.especialidad = data.respuesta;
      },
      error: error =>{
        this.alertaPaciente = {mensaje: error.error.respuesta, tipo: "danger"};
      }
    });
  }

  public crearCita(){
    let codigoPaciente = this.tokenService.getCodigo();
    console.log(codigoPaciente);
    let token = this.tokenService.getToken();
    console.log(token);
    this.registroCitaDto.ccPaciente = codigoPaciente;
    this.pacienteService.crearCita(this.registroCitaDto).subscribe({
      next: data => {
        this.alertaPaciente = {mensaje: data.respuesta, tipo: "danger"};
      },
        error: error =>{
          this.alertaPaciente= {mensaje: error.error.respuesta, tipo:"danger"};
        }
    });

  }

  public listarMedicos(){
    this.clinicaService.listarMedico(this.seleccion).subscribe({
      next: data => {
        this.medico = data.respuesta;
      },
      error: error => {
        this.alertaPaciente= {mensaje: error.error.respuesta, tipo:"danger"};
      }
    });
  }

  onSeleccionCambio(){
    this.medico = [];
    console.log(this.seleccion);
    this.listarMedicos();
  }

  public seleccionar(codigoMedico: string){
    this.registroCitaDto.ccMedico= codigoMedico;
  }

}
