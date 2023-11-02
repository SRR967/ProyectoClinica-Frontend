import { Component } from '@angular/core';
import { CrearPacienteDto } from 'src/app/modelo/crear-paciente-dto';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']

})
export class RegistroComponent {

  crearPacienteDto: CrearPacienteDto
  ciudad:String[];
  eps:string[];
  tipoSangre:string[];
  archivos!:FileList;

  constructor(){
    this.ciudad=[];
    this.cargarCiudades();
    this.eps=[];
    this.cargarEps();
    this.tipoSangre=[];
    this.cargarTipoSangre();
    this.crearPacienteDto = new CrearPacienteDto();
  }
  
  public registrar(){
    if(this.archivos != null && this.archivos.length > 0){
      console.log(this.crearPacienteDto);
      }else{
      console.log("Debe cargar una foto");
      }
  }

  public sonIguales():boolean{
    return this.crearPacienteDto.contrasena == this.crearPacienteDto.confirmarContrasena;
  }

  private cargarCiudades(){
    this.ciudad.push("Armenia");
    this.ciudad.push("Calarcá");
    this.ciudad.push("Pereira");
    this.ciudad.push("Manizales");
    this.ciudad.push("Medellín");
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

  public onFileChange(event:any){
    if (event.target.files.length > 0) {
    this.archivos = event.target.files;
    console.log(this.archivos);
    }
  }
}
