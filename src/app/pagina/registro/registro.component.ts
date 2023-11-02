import { Component } from '@angular/core';
import { CrearPacienteDto } from 'src/app/modelo/crear-paciente-dto';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']

})
export class RegistroComponent {

  crearPacienteDto: CrearPacienteDto
  eps:string[];
  tipoSangre:string[];

  constructor(){
    this.eps=[];
    this.cargarEps();
    this.tipoSangre=[];
    this.cargarTipoSangre();
    this.crearPacienteDto = new CrearPacienteDto();
  }
  
  public registrar(){
    console.log(this.crearPacienteDto);
  }

  public sonIguales():boolean{
    return this.crearPacienteDto.contrasena == this.crearPacienteDto.confirmarContrasena;
  }

  private cargarEps(){
    this.eps.push("Cafesalud")
  }

  private cargarTipoSangre(){
    this.tipoSangre.push("A+");
    this.tipoSangre.push("A-");
    this.tipoSangre.push("B+");
    this.tipoSangre.push("B-");
    this.tipoSangre.push("AB+");
    this.tipoSangre.push("AB-");
    this.tipoSangre.push("O+");
    this.tipoSangre.push("O-");
  }

}
