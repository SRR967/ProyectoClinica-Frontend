import { Component } from '@angular/core';
import { CrearCitaDto } from 'src/app/modelo/dto/paciente/CrearCitaDto';

@Component({
  selector: 'app-crear-cita',
  templateUrl: './crear-cita.component.html',
  styleUrls: ['./crear-cita.component.css']
})
export class CrearCitaComponent {

  crearCitaDto: CrearCitaDto;
  especialidad: string[];

  constructor(){
    this.especialidad = ["Oftalmologia", "Urulogia", "Pediatria", "Ginecologia"];
    this.crearCitaDto = new CrearCitaDto();
  }

  private cargarEspecialidad(){
    
  }

  public crearCita(){

  }

}
