import { Component, Input, OnInit } from '@angular/core';
import { MedicoService } from '../../../servicios/medico.service';

@Component({
  selector: 'app-citas-pendientes',
  templateUrl: './citas-pendientes.component.html',
  styleUrls: ['./citas-pendientes.component.css']
})
export class CitasPendientesComponent implements OnInit {

  citasPendientes: any[]=[]

  @Input('cedula') cedula: any

  constructor(public medicoService: MedicoService) {}


  ngOnInit(): void {
  
  }

  getCitasPendientes(){  
    this.medicoService.getCitasPendientes(this.cedula).subscribe({
      next: (res: any[]) => {
        this.citasPendientes = res;
      },
      error: () => {
        this.citasPendientes = [];
      },
  });
}

}
