import { Component } from '@angular/core';
import { CrearPQRSDTO } from 'src/app/modelo/dto/paciente/crearPqrsDto';
import { PqrsService } from 'src/app/servicios/pqrs.service';

@Component({
  selector: 'app-crear-pqrs',
  templateUrl: './crear-pqrs.component.html',
  styleUrls: ['./crear-pqrs.component.css']
})
export class CrearPQRSComponent {
  crearPqrsDto: CrearPQRSDTO;

  constructor(private pqrsService: PqrsService){
    this.crearPqrsDto = new CrearPQRSDTO;
  }

  public crearPqrs(){
    this.pqrsService.crear(this.crearPqrsDto);
  }

  public seleccionar(codigoConsulta: number){
    this.crearPqrsDto.idConsulta = codigoConsulta;
  }
}
