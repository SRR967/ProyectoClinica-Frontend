
import { Component, Input, OnInit } from '@angular/core';
import { MedicoService } from '../../../servicios/medico.service';

@Component({
  selector: 'app-detalle-cita',
  templateUrl: './detalle-cita.component.html',
  styleUrls: ['./detalle-cita.component.css']
})
export class DetalleCitaComponent implements OnInit {
  detalleCita: any[]=[]

  @Input('cedula') cedula: any

  constructor(public medicoService: MedicoService) {}


  ngOnInit(): void {
  
  }

  getDetalleCita(){  
    this.medicoService.getDetalleCita(this.cedula).subscribe({
      next: (res: any[]) => {
        this.detalleCita = res;
      },
      error: () => {
        this.detalleCita = [];
      },
  });
}
}
