import { Component } from '@angular/core';
import { RecuperarContrasenaDto } from 'src/app/modelo/dto/RecuperarContrasenaDto';

@Component({
  selector: 'app-recuperar-contrasena',
  templateUrl: './recuperar-contrasena.component.html',
  styleUrls: ['./recuperar-contrasena.component.css']
})
export class RecuperarContrasenaComponent {

  recuperarContrasenaDto: RecuperarContrasenaDto;

  constructor(){
    this.recuperarContrasenaDto = new RecuperarContrasenaDto;
  }

  recuperar(){
    console.log(this.recuperarContrasenaDto)
  }

}
