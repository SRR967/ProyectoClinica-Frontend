import { Component } from '@angular/core';
import { Alerta } from 'src/app/modelo/alerta';
import { ItemListasDto } from 'src/app/modelo/dto/ItemListasDto';
import { ActualizarPacienteDTO } from 'src/app/modelo/dto/paciente/ActualizarPacienteDto';
import { ClinicaService } from 'src/app/servicios/clinica.service';
import { ImagenService } from 'src/app/servicios/imagen.service';
import { PacienteService } from 'src/app/servicios/paciente.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.css']
})

export class EditarPerfilComponent {

  editarPerfil: ActualizarPacienteDTO;
  alertaPaciente!:Alerta
  ciudad:ItemListasDto[];
  eps:ItemListasDto[];
  tipoSangre:ItemListasDto[];
  archivos!:FileList;

  constructor(private tokenService: TokenService, private pacienteService: PacienteService, private imagenService: ImagenService, private clinicaService: ClinicaService){
    this.editarPerfil= new ActualizarPacienteDTO;
    this.obtenerDetallePaciente();
    this.ciudad=[];
    this.eps=[];
    this.tipoSangre=[];
    this.cargarTipoSangre();
    this.cargarEps();
    this.cargarCiudades();

    
  }

  obtenerDetallePaciente(){
    let codigo = this.tokenService.getCodigo();
    this.pacienteService.verDetallePaciente(codigo).subscribe({
      next: data =>{
        this.editarPerfil= data.respuesta;
      },
      error: error =>{
        this.alertaPaciente={mensaje:error.error.respuesta, tipo: "danger"};
      }
    });
    console.log(this.editarPerfil.apellido);
  }

  public guardarCambios(){
    this.pacienteService.editarPerfilPaciente(this.editarPerfil).subscribe({
      next: data =>{
        this.alertaPaciente= {mensaje: data.respuesta, tipo: "danger"};
      },
      error: error => {
        this.alertaPaciente= {mensaje: error.error.respuesta, tipo: "danger"};
      }
    });
  }

  private cargarCiudades(){
    this.clinicaService.listarCiudades().subscribe({
      next: data => {
        this.ciudad = data.respuesta;
      },
      error: error =>{
        this.alertaPaciente = {mensaje: error.error.respuesta, tipo: "danger"};
      }
    });
  }
  
  private cargarEps(){
    this.clinicaService.listarEPS().subscribe({
      next: data => {
        this.eps = data.respuesta;
      },
      error: error =>{
        console.log(error)
      }
    });
  }

  private cargarTipoSangre(){
    this.clinicaService.listarTipoSangre().subscribe({
      next: data => {
        this.tipoSangre = data.respuesta;
      },
      error: error =>{
        console.log(error)
      }
    });
  }

  public onFileChange(event:any){
    if (event.target.files.length > 0) {
      this.editarPerfil.foto = event.target.files[0].name;
      this.archivos = event.target.files;
    }
  }

  public subirImagen() {

    if (this.archivos != null && this.archivos.length > 0) {
      const formData = new FormData();
      formData.append('file', this.archivos[0]);
      this.imagenService.subir(formData).subscribe({
        next: data => {
        this.editarPerfil.foto = data.respuesta.url;
      },
        error: error => {
        this.alertaPaciente = { mensaje: error.error, tipo: "danger" };
      }
    });
    } else {
      this.alertaPaciente = { mensaje: 'Debe seleccionar una imagen y subirla', tipo: "danger" };
    }
  }


}
