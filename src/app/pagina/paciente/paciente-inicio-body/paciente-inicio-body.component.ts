import { Component } from '@angular/core';
import { ImagenService } from 'src/app/servicios/imagen.service';

@Component({
  selector: 'app-paciente-inicio-body',
  templateUrl: './paciente-inicio-body.component.html',
  styleUrls: ['./paciente-inicio-body.component.css']
})

export class PacienteInicioBodyComponent {

  constructor(private imagenService: ImagenService){}

  

}
