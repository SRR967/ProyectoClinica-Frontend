import { Component, Input, OnInit } from '@angular/core';
import { MedicoService } from '../../../servicios/medico.service';

@Component({
  selector: 'app-listar-citas',
  templateUrl: './listar-citas.component.html',
  styleUrls: ['./listar-citas.component.css']
})
export class ListarCitasComponent implements OnInit {
  listarCitas: any[]=[]

  @Input('cedula') cedula: any

  constructor(public medicoService: MedicoService) {}


  ngOnInit(): void {
  
  }

  getListarCitas(){  
    this.medicoService.getListarCitas(this.cedula).subscribe({
      next: (res: any[]) => {
        this.listarCitas = res;
      },
      error: () => {
        this.listarCitas = [];
      },
  });
}
}
