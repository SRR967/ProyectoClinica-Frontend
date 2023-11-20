import { Component } from '@angular/core';
import { ImagenService } from 'src/app/servicios/imagen.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-paciente-inicio-body',
  templateUrl: './paciente-inicio-body.component.html',
  styleUrls: ['./paciente-inicio-body.component.css']
})

export class PacienteInicioBodyComponent {

  nombre: string ="";

  constructor(private imagenService: ImagenService, private tokenService: TokenService){
    this.cargarNombre();
  }

  public cargarNombre(){
    this.nombre = this.tokenService.getNombre();
  }

  

}
