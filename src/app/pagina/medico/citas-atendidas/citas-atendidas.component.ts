import { Component, Input, OnInit } from '@angular/core';
import { MedicoService } from '../../../servicios/medico.service';

@Component({
  selector: 'app-citas-atendidas',
  templateUrl: './citas-atendidas.component.html',
  styleUrls: ['./citas-atendidas.component.css']
})
export class CitasAtendidasComponent implements OnInit {
  citasAtendidas: any[]=[]

  @Input('cedula') cedula: any

  constructor(public medicoService: MedicoService) {}


  ngOnInit(): void {
  
  }

  getCitasAtendidas(){  
    this.medicoService.getCitasAtendidas(this.cedula).subscribe({
      next: (res: any[]) => {
        this.citasAtendidas = res;
      },
      error: () => {
        this.citasAtendidas = [];
      },
  });
}
}
